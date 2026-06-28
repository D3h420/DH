const header = document.querySelector("[data-header]");
const tattooCards = document.querySelectorAll("[data-lightbox-title]");
const tattooModal = document.querySelector("[data-tattoo-modal]");
const projectModal = document.querySelector("[data-project-modal]");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const heroCharacter = document.querySelector(".hero-character");

const projectData = {
  art: {
    label: "Art / Digital image",
    title: "Obrazy cyfrowe",
    description:
      "Miejsce na serie ilustracji, okładki, plakaty i bardziej artystyczne rzeczy. Ten widok może później dostać konkretne mockupy, detale procesu i finalne eksporty.",
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
      "Układ pod case brandingowy: jeden mocny obraz główny, dwa detale obok i opis pod spodem. Idealne na logo, plakat, key visual, social pack albo całą mini-identyfikację.",
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
  heroCharacter.addEventListener("load", () => {
    heroCharacter.classList.add("is-loaded");
    heroCharacter.classList.remove("is-missing");
  });

  heroCharacter.addEventListener("error", () => {
    heroCharacter.classList.add("is-missing");
  });
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
    const title = tattooModal.querySelector("[data-modal-title]");
    const meta = tattooModal.querySelector("[data-modal-meta]");
    const image = card.querySelector("img");

    visual.className = "modal-visual visual-ink";
    visual.innerHTML = "";

    if (card.dataset.lightboxSrc || image) {
      const modalImage = document.createElement("img");
      modalImage.src = card.dataset.lightboxSrc || image.src;
      modalImage.alt = image?.alt || card.dataset.lightboxTitle;
      visual.append(modalImage);
    } else {
      visual.classList.add(card.dataset.lightboxVisual);
    }

    title.textContent = card.dataset.lightboxTitle;
    meta.textContent = card.dataset.lightboxMeta;
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
