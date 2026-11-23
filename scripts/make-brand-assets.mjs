// Derives web-ready brand assets from public/solvanta-logo.png:
//  - public/solvanta-mark.png : the S monogram with the white background removed
//  - src/app/icon.png / apple-icon.png : favicon + touch icon (mark on navy)
// Run with: node scripts/make-brand-assets.mjs
import sharp from "sharp";

const SRC = "public/solvanta-logo.png";
// Monogram bounds within the 2172x724 source (left of the vertical divider)
const crop = { left: 110, top: 70, width: 485, height: 600 };

const { data, info } = await sharp(SRC)
  .extract(crop)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

// Remove the white backdrop: derive alpha from distance to white and un-premultiply colours.
for (let i = 0; i < data.length; i += 4) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  let a = (255 - Math.min(r, g, b)) / 255;
  if (a < 0.05) { data[i + 3] = 0; continue; }
  a = Math.min(1, a * 1.0);
  data[i] = Math.max(0, Math.min(255, Math.round((r - (1 - a) * 255) / a)));
  data[i + 1] = Math.max(0, Math.min(255, Math.round((g - (1 - a) * 255) / a)));
  data[i + 2] = Math.max(0, Math.min(255, Math.round((b - (1 - a) * 255) / a)));
  data[i + 3] = Math.round(a * 255);
}

const transparent = sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } });
const trimmed = await transparent.png().toBuffer();
const mark = await sharp(trimmed).trim({ threshold: 5 }).resize({ height: 208 }).png({ compressionLevel: 9 }).toBuffer();
await sharp(mark).toFile("public/solvanta-mark.png");
const meta = await sharp(mark).metadata();
console.log("mark:", meta.width, "x", meta.height);

// Icons: mark centred on a navy rounded square
async function icon(size, out, pad = 0.2) {
  const inner = Math.round(size * (1 - pad * 2));
  const m = await sharp(mark).resize({ width: inner, height: inner, fit: "inside" }).toBuffer();
  const radius = Math.round(size * 0.22);
  const bg = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#162A52"/><stop offset="1" stop-color="#0B1730"/></linearGradient></defs><rect width="${size}" height="${size}" rx="${radius}" fill="url(#g)"/></svg>`,
  );
  await sharp(bg).composite([{ input: m, gravity: "center" }]).png().toFile(out);
}
await icon(512, "src/app/icon.png");
await icon(180, "src/app/apple-icon.png", 0.18);
console.log("icons written");

// Social share card (1200x630)
{
  const W = 1200, H = 630;
  const markH = 150;
  const m = await sharp(mark).resize({ height: markH }).toBuffer();
  const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="a" cx="0.85" cy="0" r="0.9"><stop offset="0" stop-color="#1677FF" stop-opacity="0.55"/><stop offset="1" stop-color="#1677FF" stop-opacity="0"/></radialGradient>
    <radialGradient id="b" cx="0" cy="1" r="0.7"><stop offset="0" stop-color="#38A5FF" stop-opacity="0.28"/><stop offset="1" stop-color="#38A5FF" stop-opacity="0"/></radialGradient>
    <pattern id="g" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M56 0H0V56" fill="none" stroke="#38A5FF" stroke-opacity="0.08"/></pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="#0B1730"/>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#a)"/>
  <rect width="${W}" height="${H}" fill="url(#b)"/>
  <g font-family="Noto Sans, DejaVu Sans, sans-serif">
    <text x="262" y="132" font-size="46" font-weight="800" fill="#FFFFFF" letter-spacing="1">SOLVANTA</text>
    <text x="264" y="170" font-size="20" font-weight="600" fill="#38A5FF" letter-spacing="10">TECHNOLOGIES</text>
    <text x="80" y="330" font-size="64" font-weight="800" fill="#FFFFFF">We Build Digital Solutions That</text>
    <text x="80" y="410" font-size="64" font-weight="800" fill="#38A5FF">Move Businesses Forward.</text>
    <text x="80" y="500" font-size="28" font-style="italic" fill="#CBD5E1">Turning Challenges into Solutions.</text>
    <text x="80" y="578" font-size="20" fill="#7C8BA6">Software Development &amp; Technology Solutions</text>
  </g>
</svg>`);
  await sharp(svg).composite([{ input: m, left: 80, top: 62 }]).png({ compressionLevel: 9 }).toFile("src/app/opengraph-image.png");
  await sharp("src/app/opengraph-image.png").toFile("src/app/twitter-image.png");
  console.log("social card written");
}
