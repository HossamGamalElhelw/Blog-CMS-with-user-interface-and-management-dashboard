import React, { useContext, useEffect } from 'react'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TokenContext } from './TokenContext';
import { useLocation, useNavigate } from 'react-router-dom';

const schema = z.object({
    name: z.string().min(4,'Name must at least 4 characters.'),
    slug: z.string().min(3,'Slug must at least 3 characters.')
})

function CreateCategory() {
    const { token } = useContext(TokenContext); 
    const location = useLocation();
    const {category} = location.state || {};
    const navigate = useNavigate();
    const {register , handleSubmit,formState:{errors}, reset,setValue} = useForm({resolver : zodResolver(schema),defaultValues :{name: category?.name || '',slug: category?.slug || ''}},);

    const onSubmit = async(data) =>{
        try {
            const createCatgory = await axios.post('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/categories',
                data,
                {
                    headers:{
                        'Authorization':`Bearer ${token}`,
                        'Content-Type':'application/json'
                    }
                }
            )
            navigate('/Dashboard');
        } catch (error) {
            console.error(error);
        }finally{
            reset();
        }
    }     
    const handleUpdate = async (data) =>{
        try {
            const updateCategory = await axios.patch(`http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/categories/${category.id}`,
                data,
                {
                    headers:{
                        'Authorization':`Bearer ${token}`,
                        'Content-Type':'application/json'
                    }
                }
                
            )
            navigate('/Dashboard');
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        if(category){
            setValue('name', category.name);
            setValue('slug', category.slug)
        }
    }, [category,setValue]);
    
    console.log(category);
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className='text-2xl font-semibold mb-4'>Create Category</h1>
            <form onSubmit={handleSubmit(category ? handleUpdate : onSubmit)} className='flex flex-col gap-2'>
                <label className='flex flex-col gap-2'>
                    Name
                    <input {...register('name')} className='p-2 bg-gray-200 text-gray-950 rounded-sm' type="text" placeholder='Category Name' />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </label>
                <label className='flex flex-col gap-2'>
                    Slug
                    <input {...register('slug')} className='p-2 bg-gray-200 text-gray-950 rounded-sm' type="text" placeholder='Category Slug' />
                    {errors.slug && <p className='text-red-500'>{errors.slug.message}</p>}
                </label>
                <button className='p-2 bg-gray-500 rounded-sm cursor-pointer mt-2'>{category ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
}

export default CreateCategory