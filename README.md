# New Smile Guide

Welcome to the **New Smile Guide** project! This project appears to be a web-based guide, possibly related to dental care, smile design, or a similar topic. Below you’ll find instructions for setup, usage, and contributing.

The site has been converted to use **React** and **Material UI** directly from CDN sources. The original static HTML remains in `index_backup.html` for reference, while `index.html` now bootstraps the React application found in the `src/` folder.

---

## Table of Contents
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Assets](#assets)
- [Contributing](#contributing)
- [Deployment](#deployment)
- [License](#license)

---

## Project Structure
```
new_smile_guide/
├── index.html               # React entry point
├── index_backup.html        # Original static HTML
├── src/
│   └── App.jsx              # React application code
├── css/
│   └── style.css            # Legacy stylesheet
├── script.js                # Legacy JavaScript (optional)
├── img/                     # Images and icons
├── videos/                  # Video assets
├── assets/                  # Misc assets
├── newsmileguide-animated-icons.txt # Icon data or reference
```

## Getting Started
1. **Clone or Download** this repository to your local machine.
2. Open `index.html` in your web browser to view the site.

All dependencies are loaded from CDNs so no build step is required. Simply open the file and the React application will run.

## Usage
- Styling is primarily handled by **Material UI** components.
- The legacy `style.css` and `script.js` files remain for reference but are no longer required.
- Assets (images, videos, icons) are in their respective folders.

## Customization
- Update the React components in `src/App.jsx` for content changes.
- Material UI's theming can be customized within the components or by adding additional stylesheets.
- Legacy scripts in `script.js` can be removed once all functionality has been ported to React.
- Place additional images in `img/` and videos in `videos/`.

## Assets
- **Images:** Place in `img/`
- **Videos:** Place in `videos/`
- **Icons:** See `newsmileguide-animated-icons.txt` for animated icon references.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Deployment
To deploy the **New Smile Guide** on Netlify:

1. **Connect your repository.** From the Netlify dashboard, choose **Add new site** and link this Git repository.
2. **Use the included `netlify.toml`.** Netlify will automatically detect the base directory (`new-smile-guide`), run `npm install && npm run build`, and publish the `build/` folder.
3. **Set environment variables (optional).** The configuration pins Node.js to version `18` and enables CI mode. Modify these in `netlify.toml` if needed.
4. **Deploy.** Netlify will build and host the production files. Locally you can mimic this step with `npm run netlify`.

## License
Specify your license here. (e.g., MIT, Apache 2.0, etc.)

---

*Created on 2025-04-18.*
