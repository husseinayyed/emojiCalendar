# 🗓️ Emoji Mood Calendar
# Beta Version
Welcome to **Emoji Mood Calendar** — a fun and interactive calendar that lets you express your daily mood using emojis!  
Built with **Vue 3** and **Vite**, this lightweight app saves your data in the browser using **localStorage** — no backend needed!

---

## 🌟 Features

- 🎯 **Pick your mood** by clicking on any day of the month  
- 💾 **Auto-save** — emojis stay saved even after refreshing  
- 📱 **Mobile-friendly** UI with simple design  
- 🔐 Fully **client-side** — your data stays on your device  
- ⚡ Fast loading and optimized build using Vite

---

## 🚀 Live Demo

👉 [Try it live here](https://husseinayyed.github.io/emojiCalendar/)

---

## 🛠️ Tech Stack

| Tech              | Purpose                       |
| ----------------- | -----------------------------|
| **Vue 3**         | Frontend framework            |
| **Vite**          | Fast build & dev server       |
| **JavaScript ES6+** | App logic                   |
| **HTML5 / CSS3**  | Layout & styling              |
| **LocalStorage**  | Persistent emoji data         |

---

## 📂 Project Structure
## emojiCalendar/
| File / Folder               | Description                                             |
| -------------------------- | -------------------------------------------------------|
| `index.html`               | Main HTML file                                          |
| `package.json`             | Project configuration & scripts                        |
| `vite.config.js`           | Vite configuration file                                |
| `src/`                    | Source folder                                          |
| `src/App.vue`             | Main Vue component                                     |
| `src/components/`         | Vue components folder                                  |
| `src/components/Calendar.vue` | Displays the calendar grid with clickable days         |
| `src/components/Popup.vue`    | Shows the emoji picker popup for mood selection         |
| `src/main.js`             | Application entry point                                |
| `src/assets/`             | Static assets (images, etc.)                           |
| `README.md`               | Project documentation (you’re here!)                  |

---

## 🧩 Components

- **`Calendar.vue`**  
  Displays the monthly calendar grid with each day clickable. Highlights today’s date and shows emojis for days where moods were selected.

- **`Popup.vue`**  
  A popup component that shows an emoji picker. Opens when a day is clicked, allowing the user to select an emoji to represent their mood for that day.

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/husseinayyed/emojiCalendar.git
cd emojiCalendar

2. Install dependencies

npm install

3. Run the development server

npm run dev

4. Build for production

npm run build

5. Deploy to GitHub Pages

npm run deploy

Make sure your vite.config.js has this base path set:

export default defineConfig({
  base: '/emojiCalendar/',
  plugins: [vue()],
});
```

---

🎯 Future Features (Ideas)
--

Navigate between months (previous/next)

Dark mode toggle

Show emoji usage stats (how many happy/sad days)

Custom notes for each day

Motivational quotes or stickers

---

Author
--

Made by **Hussein Ayed** (Alan)  
🔗 [GitHub Profile](https://github.com/husseinayyed)

If you like this project, please give it a ⭐️ on GitHub — it helps me stay motivated to build more cool stuff!

Thanks for checking this out!
