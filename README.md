# 🍽️ DishExplore

DishExplore is a modern recipe discovery web application built with React.js. It allows users to discover recipes, search for dishes, filter recipes by category, view complete recipe details, watch cooking videos, and save their favorite recipes for later.

The project was developed by React components, props, state management, hooks, API integration, routing, forms, conditional rendering, and localStorage.

---

## 🌐 Live Demo

👉 **[Visit DishExplore](https://dishexplore.vercel.app/)**

---

## ⚙️ Project Setup

### Prerequisites

Before running the project, make sure you have installed:

- Node.js
- Git
- A modern web browser

 Clone the Repository

```bash
git clone https://github.com/Abhijeet-Shrestha/DishExplore.git
```
```bash
 cd DishExplore
```
```bash
 npm install
```
```bash
 npm run dev
```


# Project Structure

```
├── public
│   └── logo.png
├── src
│   ├── assets
│   │   ├── Image
│   │   ├── video
│   │   │   └── herosection.mp4
│   │   ├── bootstrap.bundle.min.js
│   │   ├── bootstrap.min.css
│   │   ├── favicon.png
│   │   └── index.css
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeList.jsx
│   │   ├── Search.jsx
│   │   └── Video_Instructions.jsx
│   ├── pages
│   │   ├── Categories.jsx
│   │   ├── Favorites.jsx
│   │   ├── HomePage.jsx
│   │   ├── LayoutPage.jsx
│   │   ├── RecipeDetails.jsx
│   │   └── RecipePage.jsx
│   ├── main.jsx
│   └── MyRoute.jsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```


## ✨ Features

### 🔍 Recipe Search
- Search recipes by name using TheMealDB API.
- Search from the recipe/category section.
- Display matching recipes dynamically.

### 🍗 Recipe Categories
- Browse recipes by category.
- Available categories include:
  - All
  - Chicken
  - Beef
  - Seafood
  - Breakfast
  - Vegetarian
- Recipes are loaded dynamically from the API.

### 📋 Recipe Details
Users can select a recipe and view:

- Recipe name
- Recipe image
- Category
- Cuisine/area
- Ingredients
- Cooking instructions
- YouTube cooking video

### ❤️ Favorites
- Add recipes to Favorites.
- Favorites are stored using browser `localStorage`.
- Favorites remain available after refreshing the page.
- Remove recipes from the Favorites page.

### 🎥 Cooking Videos
- Recipe cooking videos are displayed using ReactPlayer.
- Users can watch the available YouTube cooking tutorial directly from the application.

### 📱 Responsive Design
- Responsive layout for:
  - Desktop
  - Tablet
  - Mobile
- Built using Bootstrap responsive grid classes.

---

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap

### Libraries

- Axios
- React Router DOM
- React Player
- Bootstrap Icons

### API

- TheMealDB API

### Data Storage

- Browser LocalStorage

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Vite

---

## 🌐 API

DishExplore uses **TheMealDB API** to retrieve recipe information.

Main API:

```text
https://www.themealdb.com/api/json/v1/1/search.php?s=

```

## ⚠️ Known Limitations

- Depends on TheMealDB API availability.
- Some recipes may not have a cooking video.
- Favorites are stored only in browser localStorage.
- No user authentication or account system.
- Search results depend on the available API data.

---

## 🚀 Further Improvements

- Add user authentication and profiles.
- Add advanced cuisine and ingredient filters.
- Add recipe ratings and reviews.
- Add personalized recipe recommendations.
- Add meal planning and shopping-list features.
- Add dark/light mode.



