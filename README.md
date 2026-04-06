# 🚀 Workspace Knowledge Base UI (React + Tailwind)

## 📌 Overview

This project is a **pixel-perfect UI implementation** of a Knowledge Base dashboard based on a given design (Figma/assignment).

It includes:

* Sidebar navigation
* Header with search & actions
* Knowledge Base cards grid
* Create modal
* Footer pagination

Built using **React + Tailwind CSS** with a focus on **clean layout, spacing, and UI consistency**.

---

## 🛠️ Tech Stack

* ⚛️ React (Functional Components)
* 🎨 Tailwind CSS
* 🔤 React Icons
* 📦 Vite (or CRA based on your setup)

---

## ✨ Features

### ✅ Layout

* Full-width header with gradient
* Fixed sidebar navigation
* Responsive content area

### ✅ Header

* Custom logo (SVG integrated)
* Centered search bar with icon
* Keyboard shortcut hint (⌘K)
* Notification icon + profile avatar

### ✅ Sidebar

* Sectioned navigation (Projects, Orchestrator, Admin)
* Active state styling
* Icon-based menu

### ✅ Knowledge Base Cards

* Grid layout (3 columns)
* Equal height cards
* Hover effects (shadow + transition)
* Title, description, and date sections
* Clean typography hierarchy

### ✅ Create Knowledge Base Modal

* Form inputs (Name, Description, etc.)
* Styled modal layout matching design

### ✅ Footer / Pagination

* Rows count display
* Rows per page selector
* Page indicator
* Navigation buttons
* Fixed at bottom using flex layout

---

## 🎯 Key Learnings

* Proper use of **Flexbox vs Grid**
* Fixing layout issues like:

  * Uneven spacing
  * Card alignment
  * Footer positioning
* UI polishing techniques:

  * Shadows & hover effects
  * Typography hierarchy
  * Consistent spacing
* Converting **design → real UI (pixel accuracy)**

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── KBCard.jsx
│   ├── CreateKBModal.jsx
│
├── assets/
│   └── logo.svg
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone <your-repo-link>

# Navigate to project
cd <project-folder>

# Install dependencies
npm install

# Run project
npm run dev
```

---

## 📸 Screenshots

> <img width="1901" height="913" alt="image" src="https://github.com/user-attachments/assets/12dac168-e774-416e-a087-0d82b886e456" />

> <img width="1899" height="912" alt="image" src="https://github.com/user-attachments/assets/b46863e1-b788-4775-8f28-0a951f1cd5ce" />



---

## 🚀 Future Improvements

* Add real API integration
* Add search functionality
* Implement pagination logic
* Add animations (Framer Motion)
* Make fully responsive (mobile/tablet)

---

## 👨‍💻 Author

* Developed by: *Md Faizan Eqbal*
* Focus: Frontend UI Engineering

---

