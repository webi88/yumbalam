// Imágenes reales de Yum Balam — todas en /public/
// Si los nombres reales son distintos, solo edita este array.
export const IMAGES = [
  "/yb-1.jpg",
  "/yb-2.webp",
  "/yb-3.webp",
  "/yb-4.jpg",
  "/yb-5.jpg",
  "/yb-6.jpg",
  "/yb-7.jpg",
  "/yb-8.webp",
  "/yb-9.jpg",
  "/yb-10.jpg",
  "/yb-11.jpg",
  "/yb-12.jpg",
  "/yb-13.jpg",
  "/yb-14.jpg",
  "/yb-15.jpg",
  "/yb-16.jpg",
] as const;

// Helper para distribuir imágenes en colecciones más largas (ej: 17 artículos)
export const img = (i: number) => IMAGES[i % IMAGES.length];
