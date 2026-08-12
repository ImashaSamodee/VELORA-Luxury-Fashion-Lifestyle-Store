<div align="center">

# 🛍️ VELORA — Luxury Fashion & Lifestyle Store

**A modern, fully responsive e-commerce front-end for a luxury fashion and lifestyle brand.**

Built with **React 19**, featuring category-based shopping (Men, Women, Kids), product browsing with related-product suggestions, a live shopping cart, and user authentication pages — all wrapped in a clean, premium UI.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Status](https://img.shields.io/badge/status-in%20development-yellow)]()
[![License](https://img.shields.io/badge/license-unlicensed-lightgrey)]()

[**🔗 Live Demo**](https://6a7c48fe2cf78a2a06b1418b--playful-heliotrope-8bc535.netlify.app/) · [Report Bug](https://github.com/ImashaSamodee/VELORA-Luxury-Fashion-Lifestyle-Store/issues) · [Request Feature](https://github.com/ImashaSamodee/VELORA-Luxury-Fashion-Lifestyle-Store/issues)

</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#available-scripts)
- [Routes](#️-routes)
- [Roadmap](#-roadmap)
- [Contributors](#-contributors)
- [License](#-license)

---

## ✨ Features

- 🏠 **Home Page** — hero banner, new collections, popular picks, category banners, offers, and newsletter sign-up
- 👔 **Shop by Category** — dedicated pages for Men's, Women's, and Kids' collections
- 🆕 **New In** & 🔥 **Sale** pages for the latest arrivals and discounted items
- 🔍 **Product Details** — image gallery, size selector, description tabs, and related product suggestions
- 🛒 **Shopping Cart** — add/remove items, quantity control, and live cart total via React Context API
- 🔐 **Authentication Pages** — Login and Signup UI
- 🧭 **Breadcrumb Navigation** for clear product discovery paths
- 📱 **Fully Responsive** — optimized layout across desktop, tablet, and mobile
- ⚡ **Client-side Routing** — smooth, single-page navigation with React Router DOM

---

## 🛠️ Tech Stack

| Category          | Technology                         |
|--------------------|-------------------------------------|
| Library            | React 19                           |
| Routing            | React Router DOM 7                 |
| State Management   | React Context API                  |
| Styling            | CSS3                               |
| Tooling            | React Scripts (Create React App)   |
| Testing            | React Testing Library, Jest        |
| Deployment         | Netlify                            |

---

## 📂 Project Structure

```
VELORA-Luxury-Fashion-Lifestyle-Store/
├── public/                        # Static assets & HTML shell
└── src/
    ├── Components/
    │   ├── Assets/                 # Images & product data (all_product.js)
    │   ├── Navbar/                 # Site navigation bar
    │   ├── Hero/                   # Home page hero section
    │   ├── NewCollections/         # New arrivals section
    │   ├── Popular/                # Popular products section
    │   ├── CollectionBanners/      # Category banner images
    │   ├── Offers/                 # Promotional offers section
    │   ├── ShopByCategory/         # Category quick-links
    │   ├── Item/                   # Reusable product card
    │   ├── ProductDisplay/         # Single product detail view
    │   ├── DescriptionBox/         # Product description tabs
    │   ├── RelatedProducts/        # Related product carousel
    │   ├── Breadcrums/             # Breadcrumb navigation
    │   ├── CartItems/              # Cart table & summary
    │   ├── NewsLetter/             # Newsletter subscription form
    │   └── Footer/                 # Site footer
    ├── Context/
    │   └── ShopContext.jsx         # Global cart state (Context API)
    ├── Pages/
    │   ├── Shop.jsx                # Home page
    │   ├── ShopCategory.jsx        # Men / Women / Kids category page
    │   ├── NewIn.jsx               # New arrivals page
    │   ├── Sale.jsx                # Sale page
    │   ├── Product.jsx             # Product detail page
    │   ├── Cart.jsx                # Shopping cart page
    │   ├── Login.jsx               # Login page
    │   └── Signup.jsx              # Signup page
    ├── App.js                      # Route definitions
    └── index.js                    # App entry point
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm (comes bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ImashaSamodee/VELORA-Luxury-Fashion-Lifestyle-Store.git

# 2. Move into the project directory
cd VELORA-Luxury-Fashion-Lifestyle-Store

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command          | Description                                  |
|--------------------|-----------------------------------------------|
| `npm start`       | Runs the app in development mode              |
| `npm run build`   | Builds an optimized production bundle          |
| `npm test`        | Launches the test runner in watch mode         |
| `npm run eject`   | Ejects the CRA configuration (irreversible)    |

---

## 🗺️ Routes

| Path                     | Page                |
|----------------------------|----------------------|
| `/`                       | Home                 |
| `/mens`                   | Men's Collection      |
| `/womens`                 | Women's Collection    |
| `/kids`                   | Kids' Collection      |
| `/new-in`                 | New Arrivals          |
| `/sale`                   | Sale Items            |
| `/product/:productId`     | Product Details       |
| `/cart`                   | Shopping Cart         |
| `/login`                  | Login                 |
| `/signup`                 | Signup                |

---

## 🧭 Roadmap

- [ ] Connect to a real backend & database (currently uses static product data)
- [ ] Wire up functional authentication (Login/Signup)
- [ ] Add checkout & payment flow
- [ ] Add product search & filtering
- [ ] Add wishlist functionality

---

## 🤝 Contributors

- [Imasha Samodee](https://github.com/ImashaSamodee)

---

## 📄 License

This project is currently unlicensed. Add a `LICENSE` file to define usage terms if you plan to open-source it.
