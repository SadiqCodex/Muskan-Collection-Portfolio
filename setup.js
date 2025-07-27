const fs = require("fs");
const path = require("path");

const structure = {
  "": [
    "index.html",
    "about.html",
    "projects.html",
    "case-studies.html",
    "blog.html",
    "blog-post.html",
    "contact.html",
    "README.md",
    "LICENSE",
    ".gitignore"
  ],
  "assets": {
    "images": [
      "profile.jpg",
      "hero-bg.jpg",
      "project1.jpg",
      "project2.jpg",
      "blog-thumb1.jpg"
    ],
    "icons": [
      "html.svg",
      "css.svg",
      "js.svg",
      "react.svg",
      "github.svg",
      "linkedin.svg"
    ],
    "fonts": [
      "poppins.woff2",
      "inter.woff2",
      "dmmono.woff2"
    ],
    "testimonials": [
      "client1.jpg",
      "client2.jpg"
    ]
  },
  "css": [
    "root.css",
    "base.css",
    "layout.css",
    "header.css",
    "footer.css",
    "home.css",
    "about.css",
    "projects.css",
    "case-studies.css",
    "blog.css",
    "contact.css",
    "responsive.css"
  ],
  "js": [
    "nav.js",
    "theme-toggle.js",
    "filter.js",
    "testimonials.js",
    "contact-form.js",
    "animations.js"
  ],
  "components": [
    "header.html",
    "footer.html",
    "testimonial-card.html",
    "project-card.html"
  ],
  "blog-posts": [
    "performance-ux.html",
    "learning-react.html"
  ],
  "libs": [
    "swiper.min.js",
    "aos.min.js",
    "highlight.min.js"
  ]
};

function createStructure(basePath, obj) {
  Object.entries(obj).forEach(([folder, content]) => {
    const currentPath = folder ? path.join(basePath, folder) : basePath;

    if (folder && !fs.existsSync(currentPath)) {
      fs.mkdirSync(currentPath, { recursive: true });
    }

    if (Array.isArray(content)) {
      content.forEach(file => {
        if (file) {
          const filePath = path.join(currentPath, file);
          if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, "");  // Khaali file banayega
          }
        }
      });
    } else {
      createStructure(currentPath, content);
    }
  });
}

// Run in current directory (jaise jahan se aap command run karoge)
createStructure(__dirname, structure);

console.log("✅ Muskan Cloth Collection premium portfolio folder structure created with empty files!");
