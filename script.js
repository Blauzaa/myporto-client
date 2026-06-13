// script.js

// Smooth scrolling for navigation links
// --- Smooth Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // If burger menu is active, close it on link click
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      burgerMenu.classList.remove("toggle"); // Assuming 'toggle' class for burger animation
    }
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// --- Burger Menu Functionality ---
const burgerMenu = document.querySelector(".burger-menu");
const menu = document.querySelector(".menu");

if (burgerMenu && menu) {
  burgerMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
    burgerMenu.classList.toggle("toggle"); // For 'X' icon animation if you have CSS for it
  });
}

// Intersection Observer untuk Animasi Scroll pada About Section
const aboutSection = document.getElementById("about");
if (aboutSection) {
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          aboutObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  aboutObserver.observe(aboutSection);
}
// Intersection Observer untuk Animasi Scroll pada Projects Section
const projectsSection = document.getElementById("projects");
if (projectsSection) {
  const projectsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          projectsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  projectsObserver.observe(projectsSection);
}
// Intersection Observer untuk Animasi Scroll pada Contact Section
const contactSection = document.getElementById("contact");
if (contactSection) {
  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          contactObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  contactObserver.observe(contactSection);
}
// Intersection Observer untuk Animasi Scroll pada Experience Section
const experienceSection = document.getElementById("experience");
if (experienceSection) {
  const experienceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          experienceObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  experienceObserver.observe(experienceSection);
}
// Intersection Observer untuk Animasi Scroll pada Education Section
const educationSection = document.getElementById("education");
if (educationSection) {
  const educationObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          educationObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  experienceObserver.observe(educationSection);
}
// Intersection Observer untuk Animasi Scroll pada Resume Section
const resumeSection = document.getElementById("resume");
if (resumeSection) {
  const resumeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          resumeObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  resumeObserver.observe(resumeSection);
}
// Intersection Observer untuk Animasi Scroll pada Services Section
const servicesSection = document.getElementById("services");
if (servicesSection) {
  const servicesObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          servicesObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  servicesObserver.observe(servicesSection);
}
const testimonialsSection = document.getElementById("testimonials");
// Pastikan testimonialsSection tidak null sebelum meng-observe
if (testimonialsSection) {
  const testimonialsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          testimonialsObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );
  testimonialsObserver.observe(testimonialsSection);
}

// Intersection Observer untuk Animasi Scroll pada Featured Gallery Section
const featuredGallerySection = document.getElementById("featured-gallery");
if (featuredGallerySection) {
  const featuredGalleryObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          featuredGalleryObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );
  featuredGalleryObserver.observe(featuredGallerySection);
}

// Intersection Observer untuk Animasi Scroll pada Client Logos Section
const clientLogosSection = document.getElementById("client-logos");
if (clientLogosSection) {
  const clientLogosObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          clientLogosObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );
  clientLogosObserver.observe(clientLogosSection);
}

// Intersection Observer untuk Animasi Scroll pada New Services Showcase Section
const servicesShowcaseSection = document.getElementById("services-showcase");
if (servicesShowcaseSection) {
  const servicesShowcaseObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          servicesShowcaseObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  servicesShowcaseObserver.observe(servicesShowcaseSection);
}

const myJourneySection = document.getElementById("my-journey");
if (myJourneySection) {
  const myJourneyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          myJourneyObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  myJourneyObserver.observe(myJourneySection);
}

// Intersection Observer untuk Animasi Scroll pada Blog Section
const blogSection = document.getElementById("blog");
if (blogSection) {
  const blogObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          blogObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );
  blogObserver.observe(blogSection);
}

// --- Typing Animation for Hero Section ---
document.addEventListener("DOMContentLoaded", function () {
  const typedTextSpan = document.getElementById("typed-text");
  const textArray = [
    "Software Developer.",
    "UI/UX Enthusiast.",
    "Problem Solver.",
    "Tech Explorer.",
    "Creative Thinker.",
  ];
  const typingDelay = 120;
  const erasingDelay = 70;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 500);
    }
  }

  if (typedTextSpan) {
    setTimeout(type, newTextDelay / 2);
  }
});

// ✅ PERBAIKAN: Kode jQuery lama yang menyebabkan error '$ is not defined' sudah dihapus seluruhnya dari sini.


// Gantilah URL di bawah ini dengan URL domain LifeOS Anda yang sudah dideploy di Vercel
const LIFEOS_API_URL = 'https://my-life-os-ebb1.vercel.app/api/portfolio'; 

async function loadDynamicProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  try {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #888;">
        <i class="fas fa-spinner fa-spin" style="font-size: 28px; margin-bottom: 10px; color: #3b82f6;"></i>
        <p style="font-size: 14px;">Loading projects from LifeOS...</p>
      </div>
    `;

    const response = await fetch(LIFEOS_API_URL);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);
    
    const projects = await response.json();

    if (projects.length === 0) {
      container.innerHTML = `
        <p style="grid-column: 1/-1; text-align: center; color: #666; font-style: italic; padding: 40px;">
          Tidak ada proyek yang berstatus "Published" di database LifeOS Anda.
        </p>
      `;
      return;
    }

    container.innerHTML = projects.map(project => {
      const projectLink = project.demo_url || project.github_url || '#';
      const coverImage = project.cover_url || 'img/Project/default-cover.png';

      const techTags = project.tech_stack && project.tech_stack.length > 0
        ? `<div class="project-tags" style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 12px;">
            ${project.tech_stack.map(tech => `
              <span style="font-size: 9px; font-family: monospace; background: rgba(255, 255, 255, 0.15); color: #fff; padding: 2px 6px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1);">
                ${tech}
              </span>
            `).join('')}
           </div>`
        : '';

      return `
        <div class="gallery-item">
          <a href="${projectLink}" target="_blank" rel="noopener noreferrer">
            <img src="${coverImage}" alt="${project.title}" onerror="this.src='img/Project/default-cover.png';" />
            <div class="gallery-item-overlay">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              ${techTags}
            </div>
          </a>
        </div>
      `;
    }).join('');

  } catch (error) {
    console.error('Error loading projects:', error);
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: #ef4444; padding: 40px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.15); border-radius: 20px;">
        <i class="fas fa-exclamation-triangle" style="font-size: 28px; margin-bottom: 10px;"></i>
        <p style="font-weight: bold; margin-bottom: 5px;">Gagal Menghubungkan ke LifeOS</p>
        <p style="font-size: 12px; opacity: 0.8; font-family: monospace;">Detail Error: ${error.message}</p>
        <p style="font-size: 11px; margin-top: 15px; color: #666;">Baca petunjuk di bawah untuk mengatasinya.</p>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', loadDynamicProjects);