import React from 'react'

function HomePage() {
    const NUMBER_POSTS = 10;
    

    return (
    <div className='homePage_container px-8 max-sm:px-4'>
        <div className="posts grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            <div className="post_content col-span-3 w-2xl max-md:col-span-2 w-full max-sm:col-span-1">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p className=''>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
            <div className="post_content">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
            <div className="post_content">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
            <div className="post_content">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
            <div className="post_content">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
            <div className="post_content">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
            <div className="post_content">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
            <div className="post_content">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
            <div className="post_content">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
            <div className="post_content">
                <picture className="post_picture object-contain">
                    <img src="/post.jpg" alt="" className="post_img w-full" />
                </picture>
                <div className="post_info flex justify-between">
                    <p>Author username</p>
                    <p>Category</p>
                </div>
                <h4>Post Title</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quisquam modi, eos quos ex porro qui id facilis placeat repudiandae, iure delectus, temporibus illum explicabo! Officia tempora qui nobis reprehenderit.</p>
            </div>
        </div>
        <div className="btns_pagination flex justify-center items-center gap-4 my-8">
            <button className='previous_btn border-none rounded-md px-4 py-2 bg-black cursor-pointer'>Previous</button>
            <p className='page_pagination'>Page : </p>
            <button className='next_btn border-none rounded-md px-4 py-2 bg-black cursor-pointer'>Next</button>
        </div>
    </div>
    )
}

export default HomePage