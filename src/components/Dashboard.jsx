import React from 'react'
import PostsComponent from './PostsComponent'
import UsersComponent from './UsersComponent'

function Dashboard() {

  return (
    <div className='dashboard_container flex text-black'>
        <div className="sidebar bg-white w-xs h-screen p-8 flex flex-col gap-8">
          <div className="posts flex gap-4 items-center cursor-pointer">
            <picture className='sidebar_picture'><img className='sidebar_img w-10' src="/posts.png" alt="posts_img" /></picture>
            <p>Posts</p>
          </div>
          <div className="categories flex gap-4 items-center">
            <picture className='sidebar_picture'><img className='sidebar_img w-10' src="/category.png" alt="categories_img" /></picture>
            <p>Categories</p>
          </div>
          <div className="users flex gap-4 items-center">
            <picture className='sidebar_picture'><img className='sidebar_img w-10' src="/users.png" alt="users_img" /></picture>
            <p>Users</p>
          </div>
        </div>
        <div className="dashboard_content w-full p-8">
          {/* <PostsComponent /> */}
          {<UsersComponent />}
        </div>
    </div>
  )
}

export default Dashboard