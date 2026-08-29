# Replacing placeholder images

Each `.img-placeholder` block is a stand-in — the text inside describes the shot to take or source. To swap one in:

1. Add the real file to an `images/` folder (create it at the project root).
2. Replace the placeholder `<div>` with an `<img>`, keeping the same wrapping element sizing where possible:

   ```html
   <div class="img-placeholder">
     <span>Pumpkin Spice Syrup bottle...</span>
   </div>
   ```

   becomes:

   ```html
   <img src="images/pumpkin-spice.jpg" alt="Pumpkin Spice Syrup bottle with cinnamon sticks and latte art" class="product-photo" loading="lazy" />
   ```

3. Recommended sizes: product photos ~1000×1000px (square, matches `.product-card` crop), hero/about photos ~1200×1500px (4:5) or 1200×900px (4:3) depending on the section. Export as JPEG (photos) or WebP if your host supports it, keeping files under ~300KB.
4. Write real `alt` text describing the image for screen readers — don't reuse marketing copy.
5. Add `loading="lazy"` to any image below the fold (skip it on the hero image so it loads immediately).

No CSS changes are needed for `.product-card .img-placeholder` sizing — an `<img class="product-photo">` with `width:100%; height:100%; object-fit:cover;` will match the existing aspect-ratio boxes if you keep the parent wrapper.
