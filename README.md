# The Internet Scrapbook

> *"A quiet digital corkboard for everyday moments and short stories."*

The Internet Scrapbook is a mindful, nostalgic web application designed as a peaceful sanctuary away from the noise of modern social media. It features ordinary beauty, slow photography, and short personal stories in a warm, handmade scrapbook aesthetic.

---

## 🎨 Art Direction & Design System

The application follows a carefully crafted tactile design system inspired by vintage stationery and sunlit afternoon rooms:
- **Color Palette**: Lemonade (`#FAD02C`), Sea Blue (`#0F4E77`), Matcha (`#89A377`), Honey Drizzle (`#E7BD8B`), Coffee Grounds (`#372516`), and Warm Paper Neutrals (`#FFFDF9`).
- **Typography**: Expressive handwritten and friendly headings (`Caveat` & `Kalam`) paired with clean readable body text.
- **Details**: Washi tape accents, drop shadows, subtle card rotations, and corkboard textures.

---

## ✨ Key Features

1. **Responsive Navigation**: Clean sticky header with brand logo and smooth section jump links.
2. **Bookshelf Hero**: Illustrated books, camera icon, and welcoming header greeting visitors to the unhurried digital space.
3. **The Corkboard**:
   - Interactive browsing across 10 photography categories (*Animals, Sky and Clouds, Sunset and Sunrise, Moon and Night Sky, Flowers and Trees, Café Coffee and Food, Water Ocean and River, Streets, Cars and Bikes, Mountains and Nature*).
   - Sample data with photo titles, creator credits, short stories, dates, and card tape/pin styling.
   - Lightbox modal for immersive photo and story viewing.
4. **About the Project**:
   - Asymmetrical tile grid layout.
   - Special split tile divided side-by-side into *Nostalgia* and *Mindful* moments.
   - Expandable "Read More" storytelling tile.
5. **Creator's Note & Footer**: Heartfelt creator reflection and warm footer.

---

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Linting**: Oxlint
- **Styling**: Modern CSS with custom design tokens

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Shipzz08/internet-scrapbook.git
   cd internet-scrapbook
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Run linter**:
   ```bash
   npm run lint
   ```

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── AboutSection.tsx & .css
│   ├── BookshelfHero.tsx & .css
│   ├── CorkboardSection.tsx & .css
│   ├── CreatorFooter.tsx & .css
│   └── Navigation.tsx & .css
├── data/
│   └── scrapbookData.ts
├── App.tsx
├── index.css
└── main.tsx
```

---

## 📄 License

MIT License. Created with care & nostalgia.
