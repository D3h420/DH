const header = document.querySelector("[data-header]");
const tattooCards = document.querySelectorAll(".gallery-tattoo .work-card");
const tattooModal = document.querySelector("[data-tattoo-modal]");
const projectModal = document.querySelector("[data-project-modal]");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const heroCharacter = document.querySelector(".hero-character");

const projectData = {
  art: {
    label: "Art / Digital image",
    title: "Obrazy cyfrowe",
    description:
      "ilustracji, okładki, plakaty i bardziej artystyczne kwestie",
    images: [
      "assets/images/graphics/art/B4752062-8412-448F-9ACA-CE0938BA8066.PNG",
      "assets/images/graphics/art/B4752062-8412-448F-9ACA-CE0938BA8066.PNG",
      "assets/images/graphics/art/B4752062-8412-448F-9ACA-CE0938BA8066.PNG",
    ],
  },
  brand: {
    label: "Brand / Utility graphics",
    title: "Grafika użytkowa",
    description:
      "Branding dla LAB5, logotyp, identyfikacja wizualna, materiały promocyjne",
    images: [
      "assets/images/graphics/branding/Zrzut_ekranu_2026-03-29_o_22.11.16.png",
      "assets/images/graphics/branding/IMG_9831.jpg",
      "assets/images/graphics/branding/logo3.png",
    ],
  },
  web: {
    label: "Web / Templates",
    title: "Szablony stron",
    description:
      "Sekcja pod layouty www, landing page i elementy UI. Możesz pokazać pełny ekran projektu, dwa zbliżenia i krótko opisać dla kogo był robiony.",
    images: [
      "assets/images/graphics/web/WarMachine.png",
      "assets/images/graphics/web/WarMachine.png",
      "assets/images/graphics/web/WarMachine.png",
    ],
  },
};

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

if (heroCharacter) {
  const markHeroCharacterLoaded = () => {
    heroCharacter.classList.add("is-loaded");
    heroCharacter.classList.remove("is-missing");
    heroCharacter.closest(".hero-figure")?.classList.add("has-character");
  };

  heroCharacter.addEventListener("load", () => {
    markHeroCharacterLoaded();
  });

  heroCharacter.addEventListener("error", () => {
    heroCharacter.classList.add("is-missing");
    heroCharacter.closest(".hero-figure")?.classList.remove("has-character");
  });

  if (heroCharacter.complete && heroCharacter.naturalWidth > 0) {
    markHeroCharacterLoaded();
  }
}

const openModal = (modal) => {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeModal = () => {
  document.querySelectorAll(".modal.is-open").forEach((modal) => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  });
  document.body.classList.remove("modal-open");
};

tattooCards.forEach((card) => {
  card.addEventListener("click", () => {
    const visual = tattooModal.querySelector("[data-modal-visual]");
    const image = card.querySelector("img");

    visual.className = "modal-visual visual-ink";
    visual.innerHTML = "";

    if (card.dataset.lightboxSrc || image) {
      const modalImage = document.createElement("img");
      modalImage.src = card.dataset.lightboxSrc || image.src;
      modalImage.alt = image?.alt || "Tatuaż";
      visual.append(modalImage);
    } else {
      visual.classList.add(card.dataset.lightboxVisual);
    }

    openModal(tattooModal);
  });
});

document.querySelectorAll("[data-project]").forEach((tile) => {
  tile.addEventListener("click", () => {
    const project = projectData[tile.dataset.project];
    const [mainImage, sideOneImage, sideTwoImage] = project.images;

    projectModal.querySelector("[data-project-label]").textContent = project.label;
    projectModal.querySelector("[data-project-title]").textContent = project.title;
    projectModal.querySelector("[data-project-description]").textContent = project.description;
    projectModal.querySelector("[data-project-main]").innerHTML = `<img src="${mainImage}" alt="">`;
    projectModal.querySelector("[data-project-side-one]").innerHTML = `<img src="${sideOneImage}" alt="">`;
    projectModal.querySelector("[data-project-side-two]").innerHTML = `<img src="${sideTwoImage}" alt="">`;
    openModal(projectModal);
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
