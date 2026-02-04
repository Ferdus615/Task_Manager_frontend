# My Task Manager

A modern, FEATURE-RICH todo list application built with Next.js, designed for seamless task management with a premium user experience.

## ✨ Features

- **📝 Rich Text Editing**: Create detailed task descriptions using the integrated [Tiptap](https://tiptap.dev/) editor with formatting support.
- **🔄 Drag & Drop**: Easily prioritize tasks by dragging and dropping them into your preferred order using `@dnd-kit`.
- **🗂️ Task Organization**:
  - **Active Tasks**: View and manage your current to-dos.
  - **Completed Tasks**: Mark tasks as done and keep track of your productivity.
  - **Archived Tasks**: Archive tasks to declutter your view without losing them.
  - **Deleted Tasks**: safely remove tasks with an option to restore or permanently delete.
- **💾 Local Storage**: Your tasks are saved automatically to your browser's local storage, so you never lose your data.
- **🎨 Modern UI**: A sleek, dark-themed interface built with Tailwind CSS, featuring a responsive sidebar and smooth interactions.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Drag & Drop**: [@dnd-kit](https://dndkit.com/) (Core, Sortable, Utilities)
- **Rich Text Editor**: [Tiptap](https://tiptap.dev/) (React, Starter Kit, Extensions)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)

## 🚀 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- **`app/`**: Contains the main application code (Next.js App Router).
  - **`Components/`**: Reusable UI components.
    - **`texteditor/`**: Tiptap editor configuration and components.
    - `Sidebar.jsx`: Navigation sidebar.
    - `TaskList.jsx`: Displays the list of tasks.
    - `TaskCard.jsx`: Individual task item with drag handle and actions.
  - **`context/`**: Contains `TaskContext.jsx` for global state management of tasks.
  - `page.js`: Main dashboard view.
  - `layout.js`: Root layout defining fonts and global providers.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
