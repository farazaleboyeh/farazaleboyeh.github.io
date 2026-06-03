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
3. Run `npm run dev` to start the local preview.
4. Run `npm run build` to test the production build.

```text
public/                           # All button/logo assets  
src/
├── components/   
│    ├──Form.jsx                  # Web3Forms contact form implementation, child of about page
│    ├──Gallery.jsx               # All images, across all Cloudinary folders, loaded to this component
│    ├──Lightbox.jsx              # Images selected for fullscreen viewing appear here
│    ├──TitleBar.jsx              # Title bar, parent of all titlebar-components/ components
│    └──titlebar-components/      # Contains all components used for all versions/sizes of the title bar
│       ├──CollectionsList.jsx    # Collections view of for expanded mobile navigation menu
│       ├──MenuItems.jsx          # Inital view of for expanded mobile navigation menu
│       ├──TitlebarDropdown.jsx   # Desktop dropdown
│       └──TitlebarFullscreen.jsx # Parent of MenuItems & CollectionsList, merely a container to swap out 
├── pages/                        # Page/Route components mapped to React Router
│   ├── about.jsx                 # About page
│   └── home.jsx                  # "Home page", gallery component
├── App.jsx                       # Routes to either home or about
├── Layout.jsx                    # Main application wrapper, titlebar loaded ahead of page content
└── main.jsx                      # Application entry point
```
Note: All CSS files omitted for clarity, all components have their respective CSS modules, with global styling in ```index.css``` & ```app.css```. 
