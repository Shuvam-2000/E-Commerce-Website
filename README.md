# ShopsPhere

ShopsPhere is an e-commerce web application for clothes and wearables. It is a frontend-only project that offers users a seamless shopping experience with a variety of features and smooth navigation across different sections of the website.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Packages Used

- **react-slick**: For creating product sliders.
- **react-router-dom**: For routing between pages.
- **react-toastify**: For toast notifications and error handling.

## Features

### 1. Home Page
- Overview of the web application.
- Displays the top 10 products and 5 best-selling products.
- Includes a newsletter section, hero section, and a fully functional navbar and footer.

### 2. Inventory Page
- Showcases all products with options to filter by category.
- Search functionality to quickly find products.
- Price-based sorting to help users browse products within their budget.

### 3. Product Page
- Detailed view of individual products.
- Displays available sizes and features a "check pin code" functionality with frontend validation.
- Add to Cart feature.
- Customer reviews section with a slider made using react-slick.
- Best-selling product recommendations.

### 4. Cart Page
- Displays items added to the cart with a total price section.
- Item counter to increase or decrease product quantity (up to a maximum of 10).
- "Confirm and Place Order" button with validation: redirects to the Place Order page if items are in the cart or shows a toast error message if the cart is empty.

### 5. Place Order Page
- Form for collecting customer delivery information with proper frontend validations.
- Displays total price of products and allows users to choose a payment method.
- Place Order button that works if all form validations are satisfied.

### 7. About Us Page
- Overview of the website's purpose and goals.

### 8. Contact Us Page
- Contains all necessary contact details, including phone numbers, address, and email IDs.
- Includes a "Search Job" button.

### 9. Login Page
- Allows users to log in with proper frontend validations.
- After login, users are redirected to the Home Page.

### 10. Sign Up Page
- New user registration page with frontend validation.

## Deployment

The project is deployed on Vercel and can be accessed online for a live demo.
Link:- https://shops-phere.vercel.app/
---
## Clone The Repository
git clone https://github.com/your-username/ShopsPhere.git
