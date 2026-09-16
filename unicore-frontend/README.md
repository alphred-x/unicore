# UniCore Frontend: The Campus Management Dashboard

This is the **React Frontend** for UniCore, a resilient and modern campus management system. It serves as the user interface for students and faculty to access the system, designed to be fast, responsive, and easy to use.

It connects to the UniCore Backend via REST APIs to handle secure login and data management.

## 🚀 Key Features

* **Modern UI:** Built with React for a fast, single-page application experience.
* **Secure Login:** Integrated with the Backend to handle JWT (JSON Web Token) authentication.
* **Fast Performance:** Powered by Vite for lightning-fast development and loading speeds.
* **Responsive Design:** Clean interface accessible on various screen sizes.
* **Real-time Feedback:** Instant success/error messages for user actions (like Login).

## 🛠️ Technology Stack

* **Framework:** React.js (v18)
* **Build Tool:** Vite
* **Language:** JavaScript (ES6+)
* **HTTP Client:** Axios
* **Styling:** CSS Modules / Standard CSS
* **IDE:** IntelliJ IDEA / VS Code

## ⚙️ Getting Started

Follow these steps to set up the frontend on your local machine.

### Prerequisites
* **Node.js** (v18 or higher) installed.
* The **UniCore Backend** must be running on port `8080`.

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_GITHUB_USERNAME/unicore-frontend.git](https://github.com/YOUR_GITHUB_USERNAME/unicore-frontend.git)
    cd unicore-frontend
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run the Application**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    * The app will start at: `http://localhost:5173`

## 🧪 Testing the Login

To test the connection with the backend, you can use the demo credentials:

* **Email:** `demo.user@unicore.com`
* **Password:** `securePass123`

## 📂 Project Structure

```text
unicore-frontend/
├── src/
│   ├── Login.jsx       # The main login component
│   ├── App.jsx         # Main application entry point
│   ├── main.jsx        # React DOM rendering
│   └── index.css       # Global styles
├── package.json        # Dependencies and scripts
└── vite.config.js      # Vite configuration
