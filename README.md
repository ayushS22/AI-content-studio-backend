# AI Content Studio – Backend

AI Content Studio is a full-stack AI-powered content and image generation platform.

This repository contains the backend API built with Express.js, MongoDB, and various AI integrations including Gemini and Hugging Face.

---

## 🌐 Live API

https://generator-cms-backend.onrender.com/

---

## 🚀 Features

- JWT-based User Authentication (Signup/Login)
- AI Content Generation (Rewrite, Expand, Shorten, Articles, SEO Content)
- AI Image Generation with Multiple Resolutions
- Content & Image History Tracking
- Rate Limiting for API protection
- Redis Caching (Optional)
- Cloudinary Image Storage Integration

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- Redis (Optional Caching)
- Gemini API (Content Generation)
- Hugging Face API (Image Generation)
- Cloudinary (Image Storage)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/ai-content-studio-backend.git
cd ai-content-studio-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create `.env` File

Create a `.env` file in the root directory and add:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret
HUGGING_FACE_API_KEY=your_huggingface_key
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
GEMINI_API_KEY=your_gemini_key
REDIS_URL=your_redis_url (optional)
```

⚠️ Do NOT commit your `.env` file.

### 4️⃣ Run the Server

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

---

## API Routes

| Route | Description |
|-------|------------|
| `/v1/auth` | Authentication (Signup, Login) |
| `/v1/content` | Content Generation Operations |
| `/v1/image` | Image Generation Operations |

---

##  Deployment

Backend deployed on Render.

---

## 📈 Future Improvements

- Role-based access control
- Subscription/Payment integration
- Admin dashboard
- Prompt templates system

---

## 👨‍💻 Author

Ayush Sahu  
B.Tech – Information Technology  
ABES Engineering College