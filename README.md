# Photography Portfolio Frontend

This repository contains the frontend source code for [yanchengqiu.com](https://yanchengqiu.com).

## Tech Stack & Architecture
* **Framework:** React (v19) via Vite (v7)
* **Routing:** React Router (v7)
* **Animations:** Motion (prev. Framer Motion)
* **Media API:** Cloudinary (React SDK)

##  Environments & Accounts
This project splits its infrastructure between cloud-hosted static frontends and a self-hosted local backend.

###  Frontend Infrastructure
* **Hosting Provider:** GitHub Pages
  * **Live URL:** [https://farazaleboyeh.github.io](https://farazaleboyeh.github.io)
  * **Deployment Method:** **Automated via GitHub Actions**
    * Every push or pull request merged into the `main` branch triggers the deployment workflow [github/workflows/pages.yml](.github/workflows/pages.yml).
    * The workflow automatically sets up Node.js, installs dependencies, builds the production assets via Vite, and deploys the static files to the `gh-pages` branch.

### Backend Infrastructure (Self-Hosted)
* **Host Hardware:** Raspberry Pi (running locally)
* **Reverse Proxy & Routing:** [Cloudflare Tunnels](https://www.cloudflare.com/products/tunnel/)
  * **Purpose:** Exposes the local Raspberry Pi backend securely to the public internet without opening port forwarding rules on the local router.
  * **API Endpoint:** [https://api.yanchengqiu.com](https://api.yanchengqiu.com)


##  Local Development

### Prerequisites
* **Node.js** `v22.x` or higher 
* **npm** `v10.x` or higher

### Installation & Setup
1. Clone repository
```bash
git clone [https://github.com/farazaleboyeh/farazaleboyeh.github.io.git](https://github.com/farazaleboyeh/farazaleboyeh.github.io.git)
cd farazaleboyeh.github.io
```
2. Run `npm install` to install dependencies.
4. Create a `.env` file based on `.env.example` and add the required API keys.
5. Run `npm run dev` to start the local preview.
6. Run `npm run build` to test the production build.
