# 🎬 MovieDeux: The Modern Movie Catalog

---

## ✨ Project Overview

**MovieDeux** is a sleek, modern, and fully responsive application designed to explore and catalog films and television series. Built with a focus on fast performance and intuitive user experience, this platform allows users to search for titles, browse popular and trending content, view detailed information (synopsis, cast, ratings), and manage their personalized watchlists.

This project serves as a showcase of modern front-end development practices, utilizing a powerful **component-based architecture** and a **utility-first styling framework**.

---

## 🎯 Key Features

* **Comprehensive Search**: Fast, type-ahead search functionality to find any movie or TV show.
* **Detailed Views**: Dedicated pages for each title, displaying plot summaries, genre tags, cast and crew information, and external ratings.
* **Trending & Popularity**: Dynamic sections highlighting the currently trending and most popular content.
* **Personalized Watchlist** *(Planned)*: User authentication and the ability to save titles to a personalized "To Watch" or "Favorites" list.
* **Fully Responsive Design**: Optimized layout for seamless viewing on desktop, tablet, and mobile devices (**Mobile-First** approach).

---

## 🚀 Technical Stack

The application is built using a robust and performance-oriented stack:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **React / Next.js** | A component-based library for building interactive user interfaces. |
| **Language** | **TypeScript** | Enhances code quality and maintainability with static type checking. |
| **Styling** | **Tailwind CSS** | A utility-first framework enabling rapid custom design and responsiveness. |
| **Data Source** | **The Movie Database (TMDB)** | Utilized for comprehensive and up-to-date movie and TV data. |
| **State Mgmt** | **React Context / Zustand** | Efficient global state handling for user preferences and data fetching status. |

---

## ⚙️ Setup and Installation

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You must have the following installed:

* **Node.js** (LTS recommended)
* **npm** or **Yarn**

### Steps

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/rayancmorais/moviedeux.git](https://github.com/rayancmorais/moviedeux.git)
    cd moviedeux
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Configure Environment Variables:**

    Create a **`.env.local`** file in the root directory and add your TMDB API key.

    ```bash
    # Example TMDB API Key
    NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
    ```

4.  **Run the application:**

    ```bash
    npm run dev
    # or
    # yarn dev
    ```

    The application will start in development mode, typically accessible at `http://localhost:3000`.

---

## 🤝 Contribution

Contributions are welcome! If you find a bug or have suggestions for features, please feel free to **open an issue** or **submit a pull request**.

---

