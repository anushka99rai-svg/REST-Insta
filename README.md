# RESTInsta 📸

A simplified, full-stack Instagram clone built with **Node.js**, **Express**, **EJS**, and **Multer**. This project demonstrates standard **RESTful architecture** implementing complete CRUD (Create, Read, Update, Delete) operations with image uploads and method override.

---

## 🚀 Features

- **Feed / Index Route (`GET /posts`)**: View a feed of all posts with usernames, uploaded images, and captions.
- **Image Upload (`POST /posts/new`)**: Upload local images directly via **Multer** into the `public/uploads` directory.
- **Single Post View (`GET /posts/:id`)**: Inspect individual posts by their unique identifier.
- **Edit Caption (`PATCH /posts/:id`)**: Edit post captions utilizing `method-override` to simulate HTTP `PATCH` requests from HTML forms.
- **Delete Post (`DELETE /posts/:id`)**: Remove posts dynamically using `method-override` for HTTP `DELETE` requests.
- **Unique Identification**: Every post is assigned a unique identifier via **UUID v4**.
- **Responsive Layout**: Instagram-inspired feed layout with mobile-friendly card components.

---

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Templating Engine**: [EJS (Embedded JavaScript templates)](https://ejs.co/)
- **File Uploads**: [Multer](https://github.com/expressjs/multer)
- **HTTP Method Simulation**: [method-override](https://github.com/expressjs/method-override)
- **ID Generation**: [uuid](https://github.com/uuidjs/uuid)
- **Styling**: Vanilla CSS3 (Flexbox, modern aspect ratios, responsive card UI)

---

## 📋 RESTful Routing Table

| HTTP Method | Route | Description | Action |
|:---:|:---|:---|:---|
| **GET** | `/posts` | Show all posts in the feed | Index |
| **GET** | `/posts/new` | Display the form to create a new post | New |
| **POST** | `/posts/new` | Upload image and create new post | Create |
| **GET** | `/posts/:id` | Display a specific post by ID | Show |
| **GET** | `/posts/:id/edit` | Display form to edit post caption | Edit |
| **PATCH** | `/posts/:id` | Update post caption | Update |
| **DELETE** | `/posts/:id` | Delete post by ID | Destroy |

---

## 📂 Project Structure

```text
RESTInsta/
├── public/
│   ├── style.css          # Central stylesheet (Instagram-style theme)
│   └── uploads/            # Uploaded post images stored here by Multer
├── views/
│   ├── index.ejs          # Main feed displaying all posts
│   ├── new.ejs            # Form to upload a new post
│   ├── show.ejs           # Detailed view of a single post
│   └── edit.ejs           # Form to update a post's caption
├── index.js               # Express application entry point & REST routes
├── package.json           # Dependencies and project metadata
└── README.md              # Project documentation
```

---

## ⚙️ Getting Started

### 1. Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation

Clone or navigate to the repository directory:

```bash
cd RESTInsta
```

Install the dependencies:

```bash
npm install
```

### 3. Running the Server

Start the application with Node:

```bash
node index.js
```

Or using `nodemon` for auto-reloading during development:

```bash
npx nodemon index.js
```

### 4. Open in Browser

Open your browser and navigate to:

```text
http://localhost:8080/posts
```

---

## 👤 Author

- **Anushka Rai**
