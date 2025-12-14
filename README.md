<div align="center">
  <br />
  <h1 align="center">Zentro API Gateway</h1>
  <p align="center">
    A high-performance, lightweight API Gateway built with Go and React.
    <br />
    <a href="https://github.com/fike110/zentro/issues/new?template=bug.md">Report bug</a>
    ·
    <a href="https://github.com/fike110/zentro/issues/new?template=feature.md&labels=feature">Request feature</a>
  </p>
</div>

---

##  About

**Zentro** is a modern, lightweight API Gateway designed to unify entry points for microservices. It combines the raw performance of **Go** on the backend with a sleek, responsive **React** dashboard for management and monitoring.

Whether you need dynamic routing, load balancing, or real-time traffic insights, Zentro provides a robust solution that is easy to configure and deploy.

## ✨ Features

- ** High Performance:** Built with Go 1.24 and Chi router for minimal latency.
- ** Dynamic Routing:** Configure routes via JSON without restarting the server.
- ** Load Balancing:** Native support for distributing traffic across multiple upstream services.
- ** Middleware & Filters:** Built-in support for authentication, rate limiting, and logging.
- ** Real-time Monitoring:** Live traffic visualization and metrics using Recharts.
- ** Modern UI:** A beautiful, responsive dashboard built with React 19, Vite, and Tailwind CSS 4.
- ** Extensible:** Modular architecture allowing for custom filter and middleware integration.

## Tech Stack

### Backend
- **Language:** [Go](https://go.dev/) (v1.24+)
- **Router:** [Chi](https://github.com/go-chi/chi) - lightweight, idiomatic, and composable router.
- **Utilities:** `fsnotify` for hot-reloading configurations.

### Frontend
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching:** [TanStack Query v5](https://tanstack.com/query/latest)
- **Visualization:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Go**: Version 1.24 or later.
- **Node.js**: Version 20 or later (recommended for Vite 7).
- **pnpm**: Recommended package manager (or npm/yarn).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/fike110/zentro.git
    cd zentro
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    cd webapp
    pnpm install
    # or npm install
    ```

3.  **Build the Frontend:**
    ```bash
    pnpm build
    # or npm run build
    ```
    This compiles the React app into the `dist` folder, which the Go backend serves.

4.  **Run the Backend:**
    Return to the root directory and use the Makefile:
    ```bash
    cd ..
    make run
    ```
    Or run manually:
    ```bash
    go run ./cmd/gateway
    ```

The API Gateway will start on `http://localhost:8080` (default), and the Management UI will be accessible at `http://localhost:8081` (or whichever port is configured).

## ⚙️ Configuration

Zentro uses JSON files for configuration, located in the `config/` directory.

- **`routes.json`**: Defines the routing rules, upstream services, and load balancing policies.
- **`consumers.json`**: Manages API consumers and authentication credentials.

Example `routes.json` snippet:
```json
[
  {
    "path": "/api/v1/users",
    "method": "GET",
    "upstream": ["http://users-service:3000"],
    "plugins": ["rate-limit", "auth"]
  }
]
```

## Project Structure

```
zentro-api-gateway/
├── cmd/
│   └── gateway/       # Main application entry point
├── config/            # Configuration files (routes, consumers)
├── internal/          # Core application logic
│   ├── filters/       # Request/Response filters
│   ├── lb/            # Load balancing algorithms
│   ├── management/    # Management API & UI server logic
│   ├── proxy/         # Reverse proxy implementation
│   └── router/        # Request routing logic
├── webapp/            # React frontend application
│   ├── src/
│   ├── public/
│   └── package.json
├── makefile           # Build and run commands
├── go.mod             # Go module definition
└── README.md          # Project documentation
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue to discuss improvements or bugs.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/fike110">fike110</a>
</p>
