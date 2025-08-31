# Blog CMS with User Interface and Management Dashboard

## 📌 Project Description
This project is a **fully production-ready Blog CMS** that allows users to browse blog posts, filter them by category, read detailed posts, and interact through comments.  
It also provides an **admin dashboard** for managing posts, categories, and users with role-based permissions.

The system includes:
- **Public Pages** (Home, Categories, Post Details, Authentication)
- **Private Dashboard** (Posts Management, Categories Management, Users Management)

## 🎯 Objectives
- Build a real-world CMS blog system with a professional user interface.
- Provide role-based access control for different types of users (`USER`, `MANAGE_POSTS`, `ADMIN`).
- Allow authenticated users to interact with content (comments, posts).
- Provide admins with full control over content and user roles.

## ⚡ Features
### Public Pages
- 🔑 **Signup & Login** with authentication APIs
- 🏠 **Home Page** with posts listing and pagination
- 📂 **Category Page** for posts under a specific category
- 📰 **Post Details** with comments (add/delete based on roles)

### Dashboard (Private)
- ✍️ **Posts CRUD** (create, update, delete, list)
- 📂 **Categories CRUD** (create, update, delete, list)
- 👥 **Users Management** (update user roles)

## 👥 Roles & Permissions
- **Guest (no role):**
  - View posts, categories, and post details
- **User:**
  - All Guest permissions + view/add/delete own comments
- **Manage_Posts:**
  - All User permissions + manage posts (CRUD)
- **Admin:**
  - All Manage_Posts permissions + manage categories and users

## 🛠️ Technologies Used
- **Frontend:** React, React Router, React Context
- **Styling:** CSS Modules, TailwindCSS, Material UI
- **Forms & Validation:** React Hook Form, Zod
- **API Calls:** Axios
- **Version Control:** Git & GitHub
