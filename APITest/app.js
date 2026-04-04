// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.json());

// Путь к JSON файлу с постами
const postsFile = path.join(__dirname, "posts.json");

// Функция для чтения постов из файла
function readPosts() {
  if (!fs.existsSync(postsFile)) {
    fs.writeFileSync(postsFile, JSON.stringify([]));
  }
  const data = fs.readFileSync(postsFile, "utf-8");
  return JSON.parse(data);
}

// Функция для записи постов в файл
function writePosts(posts) {
  fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

// ================== ROUTES ==================

// Получить все посты
app.get("/posts", (req, res) => {
  const posts = readPosts();
  res.json(posts);
});

// Получить один пост по id
app.get("/posts/:id", (req, res) => {
  const posts = readPosts();
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }
  res.json(post);
});

// Создать новый пост
app.post("/posts", (req, res) => {
  const posts = readPosts();
  const { title, body, userId } = req.body;


  const newPost = {
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
    userId,
    title,
    body,
  };

  posts.push(newPost);
  writePosts(posts);

  res.status(201).json(newPost);
});

// =============================================

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});