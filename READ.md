# WordPress Webpack & BrowserSync Boilerplate

A boilerplate setup for developing WordPress themes using Webpack and BrowserSync. This setup includes live reloading, hot module replacement (HMR), Tailwind CSS, and proxying to a local WordPress development server (e.g., MAMP).

## Features

- **Webpack**: Bundles JavaScript, CSS, and other assets.

- **BrowserSync**: Enables live reloading across devices and automatically syncs file changes.

- **Tailwind CSS**: Utility-first CSS framework integrated into the build process.

- **Hot Module Replacement (HMR)**: Immediate updates in the browser without a full page reload.

- **Automated Project Proxy Setup**: Easily configure the proxy for each new WordPress project.

## Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v12+ recommended)

- [MAMP](https://www.mamp.info/en/) or another local development environment with `.local` domains for WordPress.

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

Set  up  a  new  WordPress  project  using  setupProject.js:

To  configure  the  project's  proxy  URL  for  BrowserSync,  follow  these  steps:

Run  the  setupProject.js  script:

node  setupProject.js

You  will  be  prompted  to  enter  the  name  of  your  project (e.g., brad-university). This name will be used to set up the proxy URL.
```
