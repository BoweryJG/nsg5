# New Smile Guide

Welcome to the **New Smile Guide** project! This project is a comprehensive web-based dental care platform featuring educational resources, courses, and an integrated AI-powered dental implant simulator.

The site has been converted to use **React** and **Material UI** directly from CDN sources. The original static HTML remains in `index_backup.html` for reference, while `index.html` now bootstraps the React application found in the `src/` folder.

## 🚀 New Feature: AI Dental Implant Simulator

The platform now includes an integrated AI-powered dental implant simulator that allows dental professionals to:
- Visualize smile transformations instantly
- Upload patient photos for AI-generated previews
- Access professional-quality results in under 10 seconds
- Maintain HIPAA compliance with secure, encrypted processing

Access the simulator at `/simulator` or through the "AI Simulator" link in the navigation menu.

---

## Table of Contents
- [AI Dental Implant Simulator](#ai-dental-implant-simulator)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Customization](#customization)
- [Assets](#assets)
- [Contributing](#contributing)
- [License](#license)

---

## AI Dental Implant Simulator

The integrated AI Dental Implant Simulator provides:

### Features
- **Instant Visualization**: See potential smile transformations in seconds
- **AI-Powered**: Proprietary algorithms trained on millions of dental cases
- **Secure**: HIPAA compliant with end-to-end encryption
- **Professional Quality**: Trusted by 10,000+ dentists worldwide
- **No Storage**: Patient photos are processed but never stored

### Access
Navigate to `/simulator` in the application or click "AI Simulator" in the main navigation menu.

### Integration Details
The simulator is embedded as an iframe component within the React application, maintaining consistent styling and user experience with the main platform.

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
├── new-smile-guide/         # React application
│   ├── src/
│   │   ├── pages/
│   │   │   └── DentalImplantSimulatorPage.tsx  # AI Simulator integration
│   │   ├── components/
│   │   └── App.tsx
│   └── package.json
```

## Getting Started
1. **Clone or Download** this repository to your local machine.
2. For the React app, navigate to the `new-smile-guide` directory:
   ```bash
   cd new-smile-guide
   npm install
   npm start
   ```

All dependencies are loaded from CDNs so no build step is required for the legacy version. Simply open the file and the React application will run.

## Usage
- The main React application is in the `new-smile-guide` directory
- Styling is primarily handled by **Material UI** components
- The AI Simulator is accessible through the main navigation
- The legacy `style.css` and `script.js` files remain for reference but are no longer required
- Assets (images, videos, icons) are in their respective folders

## Customization
- Update the React components in `new-smile-guide/src/` for content changes
- Material UI's theming can be customized within the components
- The AI Simulator appearance is controlled by `DentalImplantSimulatorPage.tsx`
- Legacy scripts in `script.js` can be removed once all functionality has been ported to React
- Place additional images in `img/` and videos in `videos/`

## Assets
- **Images:** Place in `img/`
- **Videos:** Place in `videos/`
- **Icons:** See `newsmileguide-animated-icons.txt` for animated icon references

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
Specify your license here. (e.g., MIT, Apache 2.0, etc.)

---

*Created on 2025-04-18.*
*AI Simulator integrated on 2025-06-06.*