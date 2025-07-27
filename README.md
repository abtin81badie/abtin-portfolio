# Personal Portfolio Website

*Last Updated: July 27, 2025*

## 📜 Description

This repository contains the source code for my personal portfolio website. It is designed to showcase my professional skills, educational background, projects, and accomplishments. The site is built with modern web technologies to ensure a responsive, fast, and user-friendly experience.

The project is structured using React, with a focus on creating reusable and maintainable components. This README provides an overview of the project structure, the technologies used, and instructions on how to set it up for local development.

## ✨ Features

* **Modern & Clean UI:** A visually appealing design that focuses on readability and user experience.
* **Fully Responsive:** The layout seamlessly adapts to all device sizes, from mobile phones to desktop monitors.
* **Component-Based Architecture:** Built with React, making the codebase modular, scalable, and easy to manage.
* **Dynamic Sections:** Dedicated components for different sections like "About Me," "Projects," "Experience," and "Honors and Awards."

## 🛠️ Technologies Used

This project is built using the following technologies:

* **[React.js](https://reactjs.org/)**: A JavaScript library for building user interfaces.
* **[Styled Components](https://styled-components.com/)**: A library for styling React components with actual CSS code.
* **HTML5 & CSS3**: For the core structure and styling.
* **Git & GitHub**: For version control and hosting the repository.

## ⚙️ Setup and Installation

To run this project on your local machine, please follow these steps:

1.  **Clone the Repository**
2.  **Navigate to the Project Directory**
3.  **Install Dependencies**
    Using `npm`:
    ```bash
    npm install
    ```

4.  **Run the Development Server**
    This command will start the application and open it in your default browser at `http://localhost:3000`.
    ```bash
    npm start
    ```

## 🧩 Component Spotlight: `Honors.js`

As an example of the project's structure, the `Honors` component is responsible for displaying a list of honors and awards.

* **`Honors`**: The main functional component that renders the entire section.
* **`SectionContainer`**: A styled `div` that sets the background and padding for the section.
* **`SectionWrapper`**: A container that centers the content and sets a maximum width.
* **`SectionTitle`**: A styled `h2` for the main heading of the section.
* **`HonorsList`**: A styled `ul` element that acts as a container for the list of awards.
* **`HonorItem`**: A styled `li` for each individual award, featuring a card-like design with a box shadow.
* **`HonorTitle` & `HonorYear`**: Styled components for displaying the award's title and the associated details (year, institution).
