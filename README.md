# V-Fiesta 5.0

V-Fiesta 5.0 is a production-grade, multi-page event website built for the annual tech festival by IEEE PIE Kerala Section. 
It features a Dark Luxury layout matched with retro-futuristic geometry. 

## Tech Stack
- React
- Vite
- React Router DOM
- Custom CSS Modules (no external libraries)

## Folder Structure
```text
/src
 ├── /assets       # Static assets/images
 ├── /components   # Modular React components & scoped CSS modules
 ├── /data         # Constants & payload arrays (Events, FAQ, Schedule)
 ├── /pages        # Route views (/events, /schedule, /register)
 ├── /styles       # Global CSS + Token variables
 ├── App.jsx       # Main Route scaffolding
 └── main.jsx      # React Render Entry
```

## Local Setup
1. Clone the repository.
2. Ensure you have Node.js installed.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local Vite server:
   ```bash
   npm run dev
   ```

## Deployment
Build for production using:
```bash
npm run build
```
Upload the generated `/dist` directory to any static host (Vercel, Netlify, or IEEE server).

## Contributing
Please fork the project and create a new branch containing any proposed features. Before resolving a PR, assure strict adherence to the `.module.css` scoped styling methodology and semantic components map. 
