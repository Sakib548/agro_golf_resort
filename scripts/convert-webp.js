const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

async function convertImages() {
  const files = fs.readdirSync(imagesDir);
  console.log(`Found ${files.length} files in ${imagesDir}`);

  let convertedCount = 0;
  let totalSavedBytes = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
      continue;
    }

    const inputPath = path.join(imagesDir, file);
    const baseName = path.basename(file, ext);
    const outputPath = path.join(imagesDir, `${baseName}.webp`);

    try {
      const originalStat = fs.statSync(inputPath);
      
      // Convert with max width 2048px, quality 80, without enlargement
      await sharp(inputPath)
        .resize({ width: 2048, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(outputPath);

      const newStat = fs.statSync(outputPath);
      const saved = originalStat.size - newStat.size;
      totalSavedBytes += Math.max(0, saved);
      convertedCount++;

      console.log(
        `✓ ${file} -> ${baseName}.webp: ${(originalStat.size / 1024 / 1024).toFixed(2)}MB -> ${(newStat.size / 1024).toFixed(1)}KB`
      );
    } catch (err) {
      console.error(`✗ Error converting ${file}:`, err.message);
    }
  }

  console.log(`\nCompleted! Converted ${convertedCount} images.`);
  console.log(`Estimated bandwidth saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB!`);
}

convertImages();
