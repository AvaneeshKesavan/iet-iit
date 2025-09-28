# Contributing to IET On Campus Website

Thank you for considering contributing!  
We welcome contributions ranging from bug fixes and documentation improvements to UI enhancements and feature additions.

---

## Table of Contents

- [Getting Started](#-getting-started)
- [How to Contribute](#-how-to-contribute)
- [Code Guidelines](#-code-guidelines)
- [Submitting Changes](#-submitting-changes)
- [Reporting Bugs](#-reporting-bugs)
- [Requesting Features or Enhancements](#-requesting-features-or-enhancements)
- [Improving Documentation](#-improving-documentation)
- [Modules & Dependencies](#-modules--dependencies)
- [Community Standards](#-community-standards)

---

## Getting Started

### 1. Fork the Repository

Click the **Fork** button at the top-right of this repository to create your copy.

### 2. Clone your fork

```bash
git clone https://github.com/your-username/iet-website.git
cd iet-website
```

### 3. Install Dependencies

```bash
npm install
```
Note: Use TailwindCSS v3 only. TailwindCSS v4 is not supported in this project.

### 4. Run the Development Server
```bash
npm run dev
```
Visit http://localhost:5173 to see the website locally.

---

## How to Contribute

Here are some ways you can contribute:

- Work on open issues
- Report bugs
- Suggest new features
- Improve documentation
- Add or improve test coverage
- Design or UI improvements

---

## Steps to Contribute

### 1. Create a new branch for your changes:
```bash
git checkout -b feature/your-feature-name
```
### 2. Make your changes in the codebase.
### 3. Commit your changes:
```bash
git add .
git commit -m "Add: Meaningful description of your change"
```
### 4. Push to your fork:
```bash
git push origin feature/your-feature-name
```
### 5. Open a Pull Request (PR) against the main branch of the original repository.
If your PR fixes an issue, include Fixes #issue-number in the PR description.

---

## Code Guidelines
- Follow existing naming conventions.
- Use TailwindCSS v3 classes only.
- Keep commits atomic and descriptive.
- Maintain responsive and accessible UI.

---

## Modules & Dependencies
- React.js
- TailwindCSS v3
- Framer Motion (for animations)
- React Icons (Font Awesome)
- Node.js v18+ (recommended)
- npm 9+ (recommended)
Always ensure your local setup matches the versions above.

---

## Issue & PR Management
- PRs for unassigned issues will not be accepted.
- Keep your branch up-to-date with main:
```bash
git fetch origin
git pull origin main
```
