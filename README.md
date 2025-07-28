# MoksitOrg Portfolio and Admin Dashboard

=============================================

## **Overview**

This monorepo contains two main projects:

1. **React Portfolio**: A public-facing website showcasing my work, skills, and experiences.
2. **Admin Dashboard**: A private dashboard for managing the portfolio, including creating, editing, and deleting content.

## **Tools and Technologies**

- **NX**: A powerful build tool for managing monorepos.
- **React**: A popular JavaScript library for building user interfaces.

## **Getting Started**

## Prerequisites

- Node.js (latest version)
- npm (latest version) or Yarn
- NX CLI: Install globally using `npm install -g nx`
- Git: For version control

## Installation

1. Clone the repository: `git clone https://github.com/moksitAbdelhakim/portfolio-dashboard.git`
2. Install dependencies: `npm install` (or `yarn install`)
3. Run the development server: `npx nx serve react-portfolio` (for the portfolio) or `npx nx serve admin-dashboard` (for the admin dashboard)

## Building and Deployment

- To build the portfolio: `npx nx build react-portfolio`
- To build the admin dashboard: `npx nx build admin-dashboard`
- To deploy: `npx nx deploy react-portfolio` (or `admin-dashboard`)

## **Directory Structure**

- `apps/`: Contains the portfolio and admin dashboard applications.
  - `react-portfolio/`: Portfolio application code.
  - `admin-dashboard/`: Admin dashboard application code.
- `packages/`: Shared libraries and utilities.

## **Contributing**

Contributions are welcome! Please submit a pull request with a clear description of the changes.

## **License**

This project is licensed is not under any License, because I plan to keep it private in the future.
Feel free to use it as a reference for your own projects.

## **Contact**

For any questions or feedback, please contact me at [moksit.abdelhakim@gmail.com](mailto:moksit.abdelhakim@gmail.com)
