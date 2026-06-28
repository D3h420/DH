# DH Studio Portfolio

Statyczne portfolio pod GitHub Pages dla tatuaży i grafiki komputerowej.

## Publikacja na GitHub Pages

1. Wypchnij repozytorium na GitHuba.
2. Wejdź w `Settings` -> `Pages`.
3. W sekcji `Build and deployment` wybierz `Deploy from a branch`.
4. Ustaw branch `main` i folder `/root`.
5. Zapisz. Strona będzie dostępna pod adresem `https://twoj-login.github.io/nazwa-repo/`.

## Podmiana zdjęć

Docelowe zdjęcia wrzucaj do `assets/images/`, a potem w `index.html` podmień placeholder w wybranej karcie.

Zmień:

```html
<div class="work-visual visual-ink visual-ink-01"></div>
```

na:

```html
<img class="work-visual" src="assets/images/nazwa-zdjecia.jpg" alt="Krótki opis tatuażu" />
```

Karta pozostanie klikalna i otworzy zdjęcie w powiększeniu. Tytuł i podpis w popupie ustawisz w atrybutach `data-lightbox-title` oraz `data-lightbox-meta`.

Adres e-mail i link do Instagrama są w sekcji `contact` w pliku `index.html`.
