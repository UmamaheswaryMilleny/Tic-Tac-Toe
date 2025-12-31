# Tic-Tac-Toe 🎮

A modern, responsive Tic-Tac-Toe game built with **React**, **Vite**, and **Tailwind CSS**. This application features a clean UI, game state persistence, and real-time notifications for game outcomes.

## 🚀 Features

- **Classic Gameplay**: Enjoy the traditional 3x3 grid Tic-Tac-Toe experience.
- **State Persistence**: Game progress is saved automatically using local storage. You won't lose your game even if you refresh the page!
- **Interactive UI**: polished design with hover effects and animations using Tailwind CSS.
- **Real-time Notifications**: Winners and Draws are announced using `react-hot-toast`.
- **Game Management**: Options to reset the game or return to the home screen at any time.
- **Routing**: Seamless navigation between the Home screen and Game board using `react-router-dom`.

## 🛠️ Tech Stack

- **[React](https://react.dev/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[React Router](https://reactrouter.com/)**: Declarative routing for React.
- **[React Hot Toast](https://react-hot-toast.com/)**: Smoking hot React notifications.

## 📂 Project Structure

```
src/
├── components/
│   ├── Board.jsx    # Main game logic and board layout
│   ├── Home.jsx     # Landing page with "Start Game" button
│   └── Square.jsx   # Individual grid square component
├── App.jsx          # Main application component with routing
├── main.jsx         # Entry point
└── index.css        # Global styles and Tailwind imports
```

## 💿 Installation & Running Locally

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd tic-tac-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in Browser**
   Open [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal) to view the app.

## 🏗️ Build for Production

To create a production-ready build:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized files for deployment.

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any ideas for improvements.

## 📄 License

This project is open-source and available for use.
