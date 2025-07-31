# ERP System

A modern Enterprise Resource Planning (ERP) system built with Angular, focusing on case management and business analytics.

## 🔍 Overview

This ERP system provides a comprehensive solution for managing business cases, tracking performance metrics, and visualizing data. It features a responsive interface with a dashboard that displays key performance indicators and case management tools.

## ✨ Features

- **Dashboard**: Overview of key metrics including active cases, resolved cases, revenue, and growth rate
- **Case Management**: Track and manage business cases with filtering capabilities
- **Data Visualization**: Interactive charts showing case progress and other metrics
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Clean interface with sidebar navigation and customizable layouts

## 🛠️ Technologies Used

- **Frontend Framework**: Angular 20.1.0
- **UI Components**: Custom Angular components
- **State Management**: Angular Signals
- **Styling**: SCSS with component-scoped styles
- **Icons**: HeroIcons via @ng-icons
- **Charts**: Chart.js with ng2-charts
- **Typography**: Raleway variable font
- **Reactive Programming**: RxJS
- **Code Quality**: ESLint, Prettier
- **Testing**: Jasmine, Karma

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/) (v9.x or later)
- [Angular CLI](https://angular.io/cli) (v20.x)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/juan-alarcondiaz/dashboard-technical-test.git
   cd dashboard-technical-test
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running the Application

### Development Server

Start the development server:

```bash
npm start
```

Or use the Angular CLI directly:

```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

### Production Build

To build the application for production:

```bash
npm run build
```

This will create optimized production files in the `dist/` directory.

## 📁 Project Structure

```
erp/
├── src/
│   ├── app/
│   │   ├── core/                 # Core functionality
│   │   │   ├── layouts/          # Application layouts
│   │   │   │   ├── main-layout/  # Main application layout with header and sidebar
│   │   │   │   └── minimal-layout/ # Minimal layout for error pages
│   │   ├── dashboard/            # Dashboard feature module
│   │   ├── shared/               # Shared components, pipes, and services
│   │   ├── app.ts                # Root component
│   │   ├── app.html              # Root component template
│   │   ├── app.routes.ts         # Application routes
│   │   └── app.config.ts         # Application configuration
│   └── styles/                   # Global styles
├── public/                       # Public assets
├── angular.json                  # Angular CLI configuration
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # Project documentation
```

## 🧪 Testing

### Running Unit Tests

Execute unit tests via [Karma](https://karma-runner.github.io):

```bash
npm test
```

### Code Coverage

To generate a code coverage report:

```bash
npm test -- --code-coverage
```

The coverage report will be available in the `coverage/` directory.

## 🧹 Code Quality

This project uses ESLint and Prettier for code quality and formatting.

### Linting

To lint the codebase:

```bash
npm run lint
```

### Formatting

The project is configured with Prettier. Many IDEs can be set up to format on save using the project's Prettier configuration.

## 📦 Deployment

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Static Hosting**: Deploy the contents of the `dist/` directory to any static hosting service like Netlify, Vercel, or GitHub Pages.
- **Docker**: You can create a Dockerfile for containerized deployment (see example below).
- **CI/CD**: Configure your CI/CD pipeline to build and deploy the application automatically.
