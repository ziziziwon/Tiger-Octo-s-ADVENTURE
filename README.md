# 🐯🐙 Tiger Octo's Adventure

**Tiger Octo's Adventure** is an interactive web experience combining pixel art aesthetics, motion design, and immersive storytelling through React and Three.js (R3F).

## ✨ Features

- 🎮 **Interactive Mini-Games**
  - Star Catcher Game
  - Rain Memory Game
  - Item Catch Game

- 🎨 **Visual Effects**
  - Light Bloom Effects
  - Parallax Background
  - Rain & Sparkle Effects

- 📖 **Story Elements**
  - Multiple Scene Transitions
  - Emotion Log System
  - Memory Collection System
  - Interactive Invite Cards

- 🖼️ **Gallery & Collections**
  - Collectible Items
  - Behind the Scene Content
  - Reward System with Modals

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **3D Rendering**: React Three Fiber (R3F)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Animation**: Framer Motion
- **Build Tool**: Create React App

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ziziziwon/Tiger-Octo-s-ADVENTURE.git

# Navigate to project directory
cd Tiger-Octo-s-ADVENTURE

# Install dependencies
npm install
```

## 🚀 Available Scripts

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

## 📁 Project Structure

```
src/
├── components/
│   ├── effects/          # Visual effects components
│   ├── minigames/        # Interactive game components
│   ├── LandingPage.tsx   # Main landing page
│   ├── GamePage.tsx      # Game interface
│   ├── GalleryPage.tsx   # Gallery view
│   └── ...
├── store/
│   ├── memoryStore.ts    # Memory state management
│   └── useSceneStore.ts  # Scene transition state
├── data/
│   └── scenes.ts         # Scene configuration data
├── utils/
│   └── posterGenerator.ts # Utility functions
└── theme.ts              # Theme configuration
```

## 🎯 Key Components

- **MemoryStage**: Main game stage with memory collection mechanics
- **InviteScene**: Interactive invitation card system
- **SceneLoader**: Dynamic scene transition manager
- **ProgressBar**: Visual progress tracking
- **RewardModal**: Achievement and reward display

## 📚 Documentation

- [Tiger's Invite Guide](./TIGERS_INVITE_GUIDE.md)
- [Debug Layers Reference](./DEBUG_LAYERS.md)

## 🎨 Design Philosophy

This project combines:
- **Pixel Art Aesthetics**: Nostalgic visual style
- **Motion Design**: Smooth animations and transitions
- **Interactive Storytelling**: User-driven narrative experience
- **Character-Driven Experience**: Focused on Tiger Octo's journey

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is [MIT](./LICENSE) licensed.

## 👤 Author

**ziziziwon**

---

Made with ❤️ for Tiger Octo's Adventure
