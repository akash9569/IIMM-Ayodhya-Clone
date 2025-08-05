# 🏛️ IIMM Ayodhya Branch – React Website

This is a responsive and modular website built using **React.js** and **Bootstrap** to showcase the newly established **Ayodhya Branch of the Indian Institute of Materials Management (IIMM)**. The website serves as a platform to inform, engage, and invite professionals and students to participate in the institute’s growth initiatives.

---

## 📌 Features

- 🔹 Responsive layout using Bootstrap  
- 🔹 Clean UI with card-based layout and image sliders  
- 🔹 Modular React components for easy scalability  
- 🔹 Priority information sections for users  
- 🔹 Interactive footer with contact details  

---

## 📁 Folder & File Structure

```bash
iimm-ayodhya/
├── public/
│   └── index.html               # Base HTML file
│
├── src/
│   ├── assets/                  # Images, icons, and logos
│   │   └── ...                  
│   |
│   ├── components/              # Reusable UI components
│   │   ├── Announce.js          # Announcement section
│   │   ├── Card.js              # Card component for main content
│   │   ├── Card2.js             # Additional card section
│   │   ├── Card3.js
│   │   ├── Card4.js
│   │   ├── Card5.js
│   │   ├── CardSlider.js        # Horizontal scroll card carousel
│   │   ├── CardSlider1.js
│   │   ├── Footer.js            # Footer section
│   │   ├── Head.js              # Head section
│   │   ├── Header.js            # Top hero section
│   │   ├── NameCard.js
│   │   ├── Navbar.js            # Top navigation bar
│   │   └── Slider.js            # Main image slider
│   |
│   ├── pages/
│   │   └── Home.js              # Home page layout combining all components
│   |
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # React DOM entry point
│   └── index.css                # Global styles
│
├── .gitignore
├── package.json
├── README.md                    # You're reading this 😊
└── vite.config.js               # Vite config file
