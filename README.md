# Share Task

[Live Demo](https://share-task.vercel.app/)

## Overview

This project is a product listing web application built with Vite, showcasing a simple and user-friendly layout based on the provided Figma design. The app fetches product data from an external API, allowing users to view product details, add items to the cart or wishlist, and apply various filters for a smooth shopping experience.

## Features

- **Navbar**: A responsive navigation bar for easy navigation across the app.
- **Product Listing**: Displays a list of products, fetched via API, following the Figma design specifications.
- **Filter Based on Search and Category**: Allows users to filter products by keywords and categories.
- **Pagination**: Efficient data loading with pagination to improve user experience.
- **Cart and Wishlist Management**: Users can add or remove items from both the cart and wishlist, with a dedicated view for each.
- **Product Details View**: Displays detailed information about each product.
- **Footer**: A footer with relevant links and information for site navigation.

## Technologies Used

- **Vite**: For fast and efficient frontend bundling and development.
- **Axios**: To handle API calls for product data.
- **Tailwind CSS**: For styling and responsiveness.
- **Zustand**: For global state management to handle cart and wishlist items across components.
- **AOS (Animate on Scroll)**: To add subtle animations for a smoother UI experience.
- **Spinner (React Loader)**: For loading indicators during data fetching.

## Functionalities

1. **Navbar**: Provides easy navigation and access to different sections.
2. **Search Filter**: Quickly filter products by name or description.
3. **Category Filter**: Filter products by specific categories.
4. **Data Rendering**: Efficiently fetch and display data from the API.
5. **Pagination**: Load products in a paginated view to improve performance.
6. **Footer**: Provides additional site navigation and information.
7. **Cart Component**: View and manage items added to the cart.
8. **Wishlist Component**: View and manage items added to the wishlist.
9. **Product Details View**: Detailed information on each product.
10. **Add/Remove Cart Functionality**: Add or remove items from the cart with instant state updates.
11. **Add/Remove Wishlist Functionality**: Manage wishlist items easily.
12. **Animations**: Smooth scrolling animations for an engaging user experience.

## Getting Started

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sohrab09/share-task
   cd share-task
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build the project**:
   ```bash
   npm run build
   ```

### API
The app fetches product data from [DummyJSON](https://dummyjson.com/docs/products), an open-source API used to simulate product data.

### Deployment
The app is deployed on Vercel for easy access and can be viewed [here](https://share-task.vercel.app/).

## Project Structure

- **/src**: Contains all the main application code, components, styles, and assets.
  - **/components**: All reusable UI components (e.g., Navbar, Footer, ProductCard, Cart, Wishlist).
  - **/pages**: Pages for different views like Home, Product Details, etc.
  - **/config**: Config for AXIOS data fetching and API endpoints.
  - **/state**: Global state setup using Zustand.
  - **/assets**: Images, icons, and other static assets.
  - **/layouts**: Layout components for different sections of the app.

## Contribution

Contributions are welcome! Please submit a pull request or open an issue for any suggested improvements.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [AOS](https://github.com/michalsnik/aos)
- [DummyJSON](https://dummyjson.com/)
- [Vercel](https://vercel.com/)