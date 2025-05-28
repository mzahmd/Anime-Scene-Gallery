# 🎬 Anime Scene Gallery

An interactive web project that dynamically fades in scene images when hovering over anime titles.

## ✨ Technologies

- `React` - UI Framework
- `TypeScript`
- `Framer Motion` - for smooth animations
- `Tailwind CSS` - for styling
- `Docker` - containerized development

## 🚀 Features

- Smooth animation for popping images
- Each title reveals three images
- Scenes respond to mouse movement 
- Custom white cursor

## 🚦 Running the Project

```bash
git clone (my_repo)
npm install
npm run dev
```
### 🐳 With Docker

```bash
git clone (my_repo)
docker build -t anime-scene . 
docker run -p 5173:5173 -v "${pwd}:/app" -v /app/node_modules anime-scene
```

Open `http://localhost:5173` in your browser
