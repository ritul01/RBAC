# **Role-Based Access Control (RBAC) UI**

## **Project Description**

This project demonstrates a **Role-Based Access Control (RBAC)** system implemented as a user-friendly web application. The UI allows administrators to manage users, roles, and permissions efficiently, ensuring secure access control.

Key features include:
- User management (CRUD operations, role assignments, and status updates).
- Role management (creation, editing, and mapping permissions).
- Permission management (dynamic mapping of roles to permissions).
- A clean and intuitive UI built with **React** and styled using **Tailwind CSS**.

---

## **Features**

### 1. **User Management**
- View a list of users with their roles and statuses.
- Add new users, assign roles, and toggle their active/inactive status.
- Edit or delete users.

### 2. **Role Management**
- Create new roles and edit existing ones.
- Define permissions (e.g., Read, Write, Delete) for each role.
- View the list of roles with associated permissions.

### 3. **Permission Management**
- Dynamically assign or modify permissions for roles.
- View permissions mapped to each role.

### 4. **Local Mock API Simulation**
- Simulates CRUD operations using local state with mock data.
- Async operations emulate real API calls for a seamless user experience.

---

## **Technologies Used**

### **Frontend**
- **React**: Component-based architecture for building a responsive UI.
- **Tailwind CSS**: Utility-first CSS framework for fast and customizable styling.

### **State Management**
- React **useState** and **useEffect** hooks for local state management.

### **Mock API**
- Local state and `setTimeout` to simulate API calls.
- Mock data stored in `src/mock-data` for users and roles.

---

## **Project Structure**

---

## **Setup and Installation**

Follow these steps to run the project locally:

### **Prerequisites**
- **Node.js** (v14+ recommended)
- **npm** or **yarn**

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rbac-ui.git
   cd rbac-ui

2. Install all dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

4. Open the application in your browser at:
   ```arduino
   http://localhost:3000

# After Successful runing You can see the User page
    ```arduino
    http://localhost:3000/users  
<br>
    You can see the Screenshot here:
    ![image](./imag.png)