# DevOps Implementation Project

## Overview

This project showcases the implementation of DevOps practices in a fictional company, **Tech**, as part of a challenge to simulate a real-world scenario. The main goal is to enhance processes using the CALMS framework (Culture, Automation, Lean, Measurement, and Sharing) and the Three Ways of DevOps.

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide-react
- **Components**: Radix UI
- **Programming Language**: TypeScript

---

## Key Features

1. **Cultural Transformation**: 
   - Enhanced team collaboration through CALMS practices.

2. **Automation**:
   - Designed a CI/CD pipeline using Jenkins, Docker, and Terraform.

3. **Metrics and Continuous Improvement**:
   - Defined key performance metrics such as Mean Time Between Deploy and Deploy Success Rate.
   - Established feedback loops and mechanisms for knowledge sharing.

4. **Visualization**:
   - Interactive dashboard to present metrics, goals, and implementation steps.

---

## Project Structure

```plaintext
src/
├── components/        # Reusable UI components
├── pages/             # Main application pages
├── App.tsx           # Root application file
├── main.tsx          # Entry point
└── index.css         # Global styles
```

---

## Installation

### Prerequisites

- Node.js (>= 16.0.0)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/dev-ops-implementation.git
   cd dev-ops-implementation
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application in your browser:

   ```
   http://localhost:5173
   ```

---

## Application Details

### Tabs

1. **Overview**
   - High-level goals of the project.

2. **Metrics**
   - Interactive cards displaying:
     - Mean Time Between Deploy
     - Deploy Success Rate
     - Incident Metrics

3. **Timeline**
   - Key milestones and progress.

4. **Implementation**
   - Step-by-step DevOps practices implemented.

---

## Metrics Visualization

The application includes a dashboard to track metrics with visual progress bars. For instance:

- **Deploy Success Rate**: Target: 95%, Current: 80%.
- **Mean Time Between Commit and Deploy**: Target: 2 hours, Current: 48 hours.

---

## Planned Improvements

- Integration with real-time CI/CD pipelines.
- Dynamic data fetching for metrics.
- Enhanced monitoring with logging and alerting systems.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

Franklin Macedo

Connect with me on [LinkedIn](https://www.linkedin.com/in/franklin-macedo-dev/).
