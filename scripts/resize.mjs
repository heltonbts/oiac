// Redimensiona e comprime imagens em public/ para entrega web otimizada
import sharp from 'sharp'
import { readdir, stat, writeFile } from 'fs/promises'
import { join, extname } from 'path'

const MAX_DIMENSION = 1600
const JPEG_QUALITY = 78
const PNG_QUALITY = 80
const PUBLIC_DIR = './public'

async function* walkDir(dir) {
  const entries = await readdir(dir)
  for (const entry of entries) {
    const full = join(dir, entry)
    const s = await stat(full)
    if (s.isDirectory()) yield* walkDir(full)
    else yield full
  }
}

let count = 0
let savedBytes = 0

for await (const file of walkDir(PUBLIC_DIR)) {
  const ext = extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue

  const meta = await sharp(file).metadata()
  if (!meta.width || !meta.height) continue

  const originalSize = (await stat(file)).size

  let pipeline = sharp(file).resize(MAX_DIMENSION, MAX_DIMENSION, {
    fit: 'inside',
    withoutEnlargement: true,
  })

  if (ext === '.png') {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 })
  } else {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
  }

  const buffer = await pipeline.toBuffer()

  if (buffer.length < originalSize) {
    await writeFile(file, buffer)
    const saved = originalSize - buffer.length
    savedBytes += saved
    count++
    console.log(
      `✓ ${file.replace('./public/', '')}  ${(originalSize / 1024).toFixed(0)} KB → ${(buffer.length / 1024).toFixed(0)} KB  (-${Math.round((saved / originalSize) * 100)}%)`
    )
  }
}

console.log(
  `\n✅ ${count} imagens otimizadas — economia total: ${(savedBytes / 1024 / 1024).toFixed(1)} MB`
)
