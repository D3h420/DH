# DH Studio Portfolio

Statyczne portfolio pod GitHub Pages dla tatuaży i grafiki komputerowej.

## Publikacja na GitHub Pages

1. Wypchnij repozytorium na GitHuba.
2. Wejdź w `Settings` -> `Pages`.
3. W sekcji `Build and deployment` wybierz `Deploy from a branch`.
4. Ustaw branch `main` i folder `/root`.
5. Zapisz. Strona będzie dostępna pod adresem `https://twoj-login.github.io/nazwa-repo/`.

## Podmiana zdjęć

Struktura plików jest przygotowana tak:

- `assets/images/brand-character/` - postać/logo na przezroczystym tle do hero.
- `assets/images/tattoos/` - zdjęcia tatuaży, najlepiej `.jpg`, `.jpeg`, `.png` albo `.webp`.
- `assets/images/graphics/art/` - obrazy cyfrowe i prace artystyczne.
- `assets/images/graphics/branding/` - branding, plakaty, key visuale, grafika użytkowa.
- `assets/images/graphics/web/` - szablony stron, layouty i UI.

Postać do hero wrzuć jako:

```text
assets/images/brand-character/character.png
```

Najlepiej PNG z przezroczystym tłem. Strona automatycznie pokaże za nią animowaną poświatę magenta.

Docelowe zdjęcia tatuaży wrzucaj do `assets/images/tattoos/`, a potem w `index.html` podmień placeholder w wybranej karcie.

Zmień:

```html
<div class="work-visual visual-ink visual-ink-01"></div>
```

na:

```html
<img class="work-visual" src="assets/images/tattoos/nazwa-zdjecia.jpg" alt="Krótki opis tatuażu" />
```

Karta pozostanie klikalna i otworzy zdjęcie w powiększeniu. Tytuł i podpis w popupie ustawisz w atrybutach `data-lightbox-title` oraz `data-lightbox-meta`.

Adres e-mail i link do Instagrama są w sekcji `contact` w pliku `index.html`.
