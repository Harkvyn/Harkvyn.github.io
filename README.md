# 🔍 Fraud Investigator Portfolio — Astro Version

Portfolio modern dengan Astro + Tailwind CSS. Static build = deploy sempurna ke GitHub Pages tanpa masalah MIME type!

## 📁 Struktur Project

```
Harkvyn.github.io/
├── src/
│   ├── pages/
│   │   └── index.astro      ← Halaman utama
│   ├── layouts/
│   │   └── Layout.astro     ← Base layout (nav, footer, cursor)
│   └── styles/
│       └── global.css       ← Global styles + animasi
├── public/                  ← Static assets (gambar, favicon)
├── astro.config.mjs         ← Konfigurasi Astro
├── tailwind.config.mjs      ← Konfigurasi Tailwind
├── package.json
└── .gitignore
```

## 🚀 Setup & Deploy

### 1. Install dependencies
```bash
npm install
```

### 2. Test di local
```bash
npm run dev
# Buka: http://localhost:4321
```

### 3. Build & Deploy ke GitHub Pages
```bash
npm run deploy
```

Perintah ini akan:
1. `astro build` → generate folder `dist/` berisi HTML/CSS/JS murni
2. `gh-pages -d dist` → push ke branch `gh-pages`

### 4. Aktifkan GitHub Pages
1. GitHub repo → **Settings** → **Pages**
2. Source: branch `gh-pages`, folder `/ (root)`
3. Save → tunggu 1-2 menit
4. Live di: **https://Harkvyn.github.io** ✅

## ✨ Kenapa Astro?

| | React + Vite | Astro |
|---|---|---|
| Output | JavaScript bundle | Static HTML murni |
| MIME type error | ❌ Bisa terjadi | ✅ Tidak pernah |
| Load speed | Sedang | Sangat cepat |
| GitHub Pages | Perlu config | Langsung jalan |
| SEO | Butuh setup | Built-in |

## 🎨 Fitur

- ✅ **Scramble text** effect di hero
- ✅ **Animated particles** background
- ✅ **Bento Grid** skills section
- ✅ **Timeline** experience dengan reveal-on-scroll
- ✅ **Custom cursor** dengan follower effect
- ✅ **Scanline** CRT overlay
- ✅ **Micro-interactions** di semua tombol
- ✅ **Glow effects** cyber blue + crimson red
- ✅ **100% Static** — no server needed
