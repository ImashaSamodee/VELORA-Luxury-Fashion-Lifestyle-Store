# VELORA — Luxury Fashion & Lifestyle Store

VELORA is a modern, fully responsive e-commerce front-end for a luxury fashion and lifestyle brand, built with **React 19**. It offers category-based shopping (Men, Women, Kids), product browsing with related-product suggestions, a shopping cart with live totals, and user authentication pages — all wrapped in a clean, premium UI.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![License](https://img.shields.io/badge/status-in%20development-yellow)

---

## ✨ Features

- 🏠 **Home Page** — hero banner, new collections, popular picks, category banners, offers, and newsletter sign-up
- 👔 **Shop by Category** — dedicated pages for Men's, Women's, and Kids' collections
- 🆕 **New In** & 🔥 **Sale** pages for the latest arrivals and discounted items
- 🔍 **Product Details** — image gallery, description tabs, and related product suggestions
- 🛒 **Shopping Cart** — add/remove items, quantity control, and live cart total via React Context API
- 🔐 **Authentication Pages** — Login and Signup UI
- 📱 **Fully Responsive** — optimized layout across desktop, tablet, and mobile
- ⚡ **Client-side Routing** — smooth navigation with React Router DOM

---

## 🛠️ Tech Stack

| Category         | Technology                          |
|-------------------|--------------------------------------|
| Library           | React 19                            |
| Routing           | React Router DOM 7                  |
| State Management  | React Context API                   |
| Styling           | CSS3                                |
| Tooling           | React Scripts (Create React App)    |
| Testing           | React Testing Library, Jest         |

---

## 📂 Project Structure

```
VELORA-Luxury-Fashion-Lifestyle-Store/
├── public/                     # Static assets & HTML shell
└── src/
    ├── Components/
    │   ├── Assets/              # Images, product data (all_product.js)
    │   ├── Navbar/               # Site navigation bar
    │   ├── Hero/                 # Home page hero section
    │   ├── NewCollections/       # New arrivals section
    │   ├── Popular/               # Popular products section
    │   ├── CollectionBanners/    # Category banner images
    │   ├── Offers/                # Promotional offers section
    │   ├── ShopByCategory/       # Category quick-links
    │   ├── Item/                  # Reusable product card
    │   ├── ProductDisplay/       # Single product detail view
    │   ├── DescriptionBox/       # Product description tabs
    │   ├── RelatedProducts/      # Related product carousel
    │   ├── Breadcrums/            # Breadcrumb navigation
    │   ├── CartItems/             # Cart table & summary
    │   ├── NewsLetter/            # Newsletter subscription form
    │   └── Footer/                # Site footer
    ├── Context/
    │   └── ShopContext.jsx        # Global cart state (Context API)
    ├── Pages/
    │   ├── Shop.jsx                # Home page
    │   ├── ShopCategory.jsx       # Men / Women / Kids category page
    │   ├── NewIn.jsx               # New arrivals page
    │   ├── Sale.jsx                 # Sale page
    │   ├── Product.jsx             # Product detail page
    │   ├── Cart.jsx                 # Shopping cart page
    │   ├── Login.jsx                # Login page
    │   └── Signup.jsx               # Signup page
    ├── App.js                       # Route definitions
    └── index.js                     # App entry point
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/ImashaSamodee/VELORA-Luxury-Fashion-Lifestyle-Store.git

# Move into the project directory
cd VELORA-Luxury-Fashion-Lifestyle-Store

# Install dependencies
npm install

# Start the development server
npm start
```

The app will run at [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command         | Description                                |
|------------------|---------------------------------------------|
| `npm start`      | Runs the app in development mode            |
| `npm run build`  | Builds the app for production               |
| `npm test`       | Launches the test runner                    |
| `npm run eject`  | Ejects the CRA configuration (irreversible) |

---

## 🗺️ Routes

| Path              | Page               |
|--------------------|---------------------|
| `/`                | Home                |
| `/mens`            | Men's Collection    |
| `/womens`          | Women's Collection  |
| `/kids`            | Kids' Collection    |
| `/new-in`          | New Arrivals        |
| `/sale`            | Sale Items          |
| `/product/:productId` | Product Details |
| `/cart`            | Shopping Cart       |
| `/login`           | Login               |
| `/signup`          | Signup              |

---

## 🤝 Contributors

- [Imasha Samodee](https://github.com/ImashaSamodee)
- [Umindu Dinal](https://github.com/umindudinal)

---

## 📄 License

This project is currently unlicensed. Add a `LICENSE` file to define usage terms if you plan to open-source it.
