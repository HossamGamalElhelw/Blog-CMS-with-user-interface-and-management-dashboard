import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useContext } from 'react';
import { TokenContext } from './TokenContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const topTags = [
    { tag: 'tag1' },
    { tag: 'tag2'},
    { tag: 'tag3' },
    { tag: 'tag4' },
    { tag: 'tag5' }
  ];
const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
] 
const schemaCover = z.any().refine(file => file && file.length > 0,{message: 'Required cover'})
                    .refine(file => ACCEPTED_IMAGE_TYPES.includes(file[0]?.type),{
                        message: 'Only JPEG, JPG, PNG, and WEBP images are allowed.'
                    })

const schema = z.object({
    title: z.string().min(5,'Title must be at least 5 characters'),
    content: z.string().min(10,'Content must be at least 10 character'),
    cover: schemaCover,
    categories: z.string().nonempty('Please select one category'),
    tags: z.array(z.string().min(1,'Please select one tag')),
})  

function CreatePost() {
    const { token } = useContext(TokenContext); 
    const location = useLocation();
    const {post} = location.state || {};
    const navigate = useNavigate()
    const {register,handleSubmit,control,formState:{ errors },reset,setValue} = useForm({resolver: zodResolver(schema)
        ,defaultValues:{
            title: post?.title,
            content: post?.content,
            cover: post?.cover,
            categories: post?.categories,
            tags: post?.tags
        }});
    const onSubmit = async (data) => {
        console.log(data);
        
        let coverUrl = new FormData();
        coverUrl.append('cover', data.cover[0]);
        //! upload image to server
        try {
            const response = await axios.post('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/uploads/posts',
                coverUrl,
                {
                    headers:{
                        'Authorization':`Bearer ${token}`,
                        'Content-Type':'multipart/form-data'
                    }
                }
            )
            coverUrl = response.data.data;
        } catch (error) {
            console.error('error is ',error);
            return;
        }  
        const postData = {
            title: data.title,
            content: data.content,
            cover: coverUrl,
            published: true,
            categories: [Number(data.categories)],
        }        
        //! upload post
        try {
            const response = await axios.post('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/posts',
                postData,
                {
                    headers:{
                        'Authorization':`Bearer ${token}`,
                        'Content-Type':'application/json'
                    }
                }
            )
            navigate('/Dashboard');
        } catch (error) {
            console.error('error is ',error);
            return;
        } 
    }
    //! update Post
    const updatePost = async(data) =>{
        try {
            const response = await axios.patch(`http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/posts/${post.id}`,
                data,{
                    headers:{
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
            console.log(response);
            navigate('/Dashboard');
        } catch (error) {
            console.error(error);
            return;
        }
    }
    useEffect(()=>{      
        console.log(post);
        if(post){
            setValue('title',post.title);
            setValue('content',post.content);
            setValue('cover',post.cover);
            setValue('categories',post.categories);
            setValue('tags',post.tags);
        }
    },[setValue,post])

    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className='text-2xl font-semibold font-'>Create Post</h1>
            <form onSubmit={handleSubmit(post ? updatePost : onSubmit)} className='flex flex-col gap-2'>
                <label className='flex flex-col gap-2'>
                    Title
                    <input {...register('title')} className='p-2 bg-gray-200 text-gray-950 rounded-sm' type="text" placeholder='Title' />
                    {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                </label>
                <label className='flex flex-col gap-2'>
                    Content
                    <input {...register('content')} className='p-2 bg-gray-200 text-gray-950 rounded-sm' type="text" placeholder='Content' />
                    {errors.content && <p className='text-red-500'>{errors.content.message}</p>}
                </label>
                <label className='flex flex-col gap-2'>
                    Cover
                    <input {...register('cover')} className='p-2 bg-gray-200 text-gray-950 rounded-sm cursor-pointer' type="file" placeholder='Cover' />
                    {errors.cover && <p className='text-red-500'>{errors.cover.message}</p>}
                </label>
                <label className='flex flex-col gap-2'>
                    Categories
                    <select  {...register('categories')}  defaultValue="" className='p-2 bg-gray-200 text-gray-950 rounded-sm cursor-pointer'>
                        <option value="" disabled >Choose Category</option>
                        <option value="1">YouTube</option>
                        <option value="2">Website</option>
                    </select>
                    {errors.categories && <p className='text-red-500'>{errors.categories.message}</p>}
                </label>
                <label className="flex flex-col gap-2">
                    Tags 
                    <Controller
                        name="tags"
                        control={control}
                        render={({ field }) => (
                            <Autocomplete
                                {...field}
                                className='bg-gray-200 rounded-sm'
                                multiple
                                options={topTags.map(tag => tag.tag)} 
                                onChange={(_, newValue) => field.onChange(newValue)} 
                                renderInput={(params) => (
                                    <TextField {...params} label="Tags" placeholder="Choose tags" />
                                )}
                                sx={{ width: '500px' }}
                            />
                        )}
                    />
                    {errors.tags && <p className="text-red-500">{errors.tags.message}</p>}
                </label>
                <button className='p-2 bg-gray-500 rounded-sm cursor-pointer mt-2'>{post ? 'Update Post' : 'Create Post'}</button>
            </form>
        </div>
    );
}

export default CreatePost;


