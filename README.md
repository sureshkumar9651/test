## Key Features to Implement

## 1. Authentication (Mock-based)

* **Session Management:** Uses `localStorage` to store user session data.
* **User Roles:** Hardcoded roles defined in `/lib/mockData.ts`.
* **Global State Management:** Authentication state is managed globally with Context API (`/contexts/AuthContext.tsx`).
* **Protected Routes:** Implemented using a Higher-Order Component (HOC) or a wrapper component (`/components/ProtectedRoute.tsx`).

---

## 2. Pages & UI Components

### **Login & Signup**

* **Paths:** `/auth/login/page.tsx`, `/auth/signup/signup.tsx`
* **Features:**

  * Simple form-based login and signup.
  * User data is saved in `localStorage`.
  * Successful login/signup redirects to `/dashboard`.

### **User Management**

* **Path:** `/dashboard/user-management/page.tsx`
* **Access:** Admin-only view.
* **Features:**

  * List, edit, and delete mock users.
  * Assign roles (e.g., Admin, User).

### **Document Management**

* **Path:** `/dashboard/document-management/page.tsx`
* **Features:**

  * Upload mock documents (metadata is stored in `localStorage`).
  * Preview and delete documents.

### **Ingestion Management**

* **Path:** `/dashboard/ingestion-management/page.tsx`
* **Features:**

  * Button to simulate ingestion process.
  * Status and progress are reflected and saved in `localStorage`.
  * Displays progress/loading states.

### **Q\&A Interface**

* **Path:** `/dashboard/qa-interface/page.tsx`
* **Features:**

  * Submit questions and mock-fetch answers.
  * Display answers with related documents from mock data.

---

## Technologies Used

| **Tool**               | **Purpose**                             |
| ---------------------- | --------------------------------------- |
| **Next.js**            | SSR/SSG + Routing                       |
| **TypeScript**         | Type safety and static type checking    |
| **Tailwind CSS**       | Responsive UI and utility-first styling |
| **React Context**      | Lightweight state management            |
| **localStorage**       | Simulated backend for auth & storage    |            |                                         |
