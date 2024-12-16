# Webflow Build Starter

## Included Dependencies

This project integrates several powerful libraries to enhance your Webflow builds:

-   **GSAP**
-   **LocomotiveScroll**
-   **Lenis**
-   **OverlayScrollbars**
-   **Swiper**

**Note:** A GSAP license is required for commercial use, and GSAP is not included directly in this repository. To use GSAP, you can install the free version by running:

```bash
npm i gsap
```

in the project root.

## Local Development

For local development, we recommend using VS Code with the Live Server extension.

Install dependencies

```bash
npm i
```

Start the server and run

```bash
npm run watch
```

to begin build process and watch changes.

### Setting Up Styles and Scripts in Webflow

While developing locally, add the following links to your Webflow project:

**In the Website Head (Stylesheet):**

```
<link rel="stylesheet" href="http://127.0.0.1:5500/dist/styles/style.css">
```

**In the Website Footer (Scripts):**

```
<script src="http://127.0.0.1:5500/dist/scripts/index.js"></script>
```

## Project Deployment via CDN

To deploy your project using a Content Delivery Network (CDN):

1. Create a GitHub repository.
2. Publish a release with a version tag to ensure consistent cache updates with each new release.

Replace the placeholders {git-user}, {git-repository}, and {release-tag} in the links below with your specific repository information.

## Webflow Production Setup

**In the Website Head (Stylesheet):**

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/{git-user}/{git-repository}@{release-tag}/dist/styles/style.css">
```

**In the Website Footer (Scripts):**

```
<script src="https://cdn.jsdelivr.net/gh/{git-user}/{git-repository}@{release-tag}/dist/scripts/index.js"></script>
```
