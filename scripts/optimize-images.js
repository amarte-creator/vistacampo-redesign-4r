#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create optimized blur data URLs for images
const imagesDir = path.join(__dirname, '../public/images');
const outputFile = path.join(__dirname, '../lib/image-blur-data.ts');

function createBlurDataURL(width = 8, height = 8) {
  // Create a minimal base64 encoded 1x1 transparent pixel
  const canvas = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#f3f4f6"/>
  </svg>`;
  return `data:image/svg+xml;base64,${Buffer.from(canvas).toString('base64')}`;
}

function generateBlurData() {
  const images = fs.readdirSync(imagesDir).filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  const blurData = {};
  
  images.forEach(image => {
    const name = image.replace(/\.[^/.]+$/, '');
    blurData[name] = createBlurDataURL();
  });

  const content = `// Auto-generated blur data URLs for images
export const imageBlurData: Record<string, string> = ${JSON.stringify(blurData, null, 2)};

export function getBlurDataURL(imageName: string): string {
  return imageBlurData[imageName] || imageBlurData.default || '';
}
`;

  fs.writeFileSync(outputFile, content);
  console.log(`✅ Generated blur data for ${images.length} images`);
}

generateBlurData();
