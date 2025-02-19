import React, {useState} from 'react'
import PostsComponent from './PostsComponent'
import UsersComponent from './UsersComponent'
import CategoriesComponent from './CategoriesComponent';

function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('Posts');   


  return (
    <div className='dashboard_container flex text-black'>
        <div className="sidebar bg-white w-xs h-screen p-8 flex flex-col gap-8">
          <div className="posts flex gap-4 items-center">
            <picture className='sidebar_picture'><img className='sidebar_img w-10' src="/posts.png" alt="posts_img" /></picture>
            <button className='cursor-pointer' onClick={() => setActiveComponent('Posts')}>
                Posts
            </button>
          </div>
          <div className="categories flex gap-4 items-center">
            <picture className='sidebar_picture'><img className='sidebar_img w-10' src="/category.png" alt="categories_img" /></picture>
            <button className='cursor-pointer' onClick={() =>setActiveComponent('Categories') }>
                Categories
              </button>  
          </div>
          <div className="users flex gap-4 items-center">
            <picture className='sidebar_picture'><img className='sidebar_img w-10' src="/users.png" alt="users_img" /></picture>
            <button className='cursor-pointer' onClick={() => setActiveComponent('Users')}>
                Users
            </button>
          </div>
        </div>
        <div className="dashboard_content w-full p-8">
          {activeComponent === 'Posts' && <PostsComponent />}
          {activeComponent === 'Users' && <UsersComponent />}
          {activeComponent === 'Categories' && <CategoriesComponent />}
        </div>
    </div>
  )
}
export default Dashboard