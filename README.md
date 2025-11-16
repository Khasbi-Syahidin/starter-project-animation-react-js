# Starter Komponen Animasi dengan React & Framer Motion

Proyek ini adalah starter kit untuk mengimplementasikan animasi komponen yang kaya dan dapat digunakan kembali di aplikasi React (Next.js) menggunakan `framer-motion`.

## Memulai

1.  **Install dependensi:**
    ```bash
    npm install
    ```

2.  **Jalankan development server:**
    ```bash
    npm run dev
    ```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

## Cara Menggunakan Komponen Animasi

Sistem animasi ini dirancang agar modular dan mudah diintegrasikan. Berikut adalah langkah-langkah utama untuk menambahkan animasi ke komponen Anda.

### 1. Setup `MotionLazy` di Layout Utama

Untuk mengaktifkan `framer-motion` di seluruh aplikasi Anda dan memastikan fitur-fitur seperti `AnimatePresence` berfungsi dengan benar untuk animasi keluar (exit animations), Anda perlu membungkus konten utama di `src/app/layout.tsx` dengan komponen `<MotionLazy>`.

```tsx
// src/app/layout.tsx
import { MotionLazy } from '@/components/animate';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionLazy>{children}</MotionLazy>
      </body>
    </html>
  );
}
```

### 2. Bungkus Section dengan `MotionViewport`

Untuk menganimasikan elemen saat mereka masuk ke dalam viewport (area pandang), bungkus section atau container dari elemen-elemen tersebut dengan `<MotionViewport>`. Ini akan secara otomatis menerapkan animasi pada anak-anaknya saat di-scroll ke dalam pandangan.

`<MotionViewport>` juga dapat menerima `variants` untuk menganimasikan container itu sendiri, seperti `varContainer` untuk efek stagger pada anak-anaknya.

**Contoh:**

```tsx
// src/section/sample/view/sample-view.tsx
import { m } from 'framer-motion';
import { MotionViewport, varContainer } from '@/components/animate';
import SampleAnimationCard from '../sample-animation-card';

export default function SampleView() {
  return (
    <MotionViewport
      component={m.div}
      variants={varContainer().animate}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {/* Elemen anak akan dianimasikan saat section ini masuk ke viewport */}
      <SampleAnimationCard />
      <SampleAnimationCard />
      <SampleAnimationCard />
    </MotionViewport>
  );
}
```

### 3. Animasikan Elemen dengan `m.div` dan `variants`

Elemen individual yang ingin Anda animasikan harus diubah menjadi komponen motion dengan menambahkan `m.` sebagai prefix (contoh: `div` menjadi `m.div`). Kemudian, teruskan properti `variants` untuk menentukan jenis animasi yang akan digunakan.

Varian animasi yang telah ditentukan sebelumnya tersedia di `@/components/animate/variants`.

**Contoh:**

```tsx
// src/section/sample/sample-animation-card.tsx
import { m } from 'framer-motion';
import { varFade } from '@/components/animate';

export default function SampleAnimationCard() {
  return (
    <m.div
      variants={varFade({ durationIn: 0.5 }).inUp}
      className="bg-gray-800 rounded-lg p-6"
    >
      <h3 className="text-xl font-bold">Animated Card</h3>
      <p>This card fades in from the bottom.</p>
    </m.div>
  );
}
```

---

## Varian Animasi yang Tersedia

Berikut adalah daftar varian animasi yang dapat Anda impor dari `@/components/animate/variants` dan gunakan di properti `variants` komponen `m.`.

### Actions

-   `varHover(hover, tap)`: Menerapkan efek skala saat hover dan tap.
    -   **Contoh:** `whileHover="hover"` `whileTap="tap"` `variants={varHover()}`

### Background

-   `varBgColor()`: Menganimasikan transisi warna background.
-   `varBgKenburns()`: Menerapkan efek Ken Burns (zoom dan pan) pada gambar background.
-   `varBgPan()`: Menganimasikan pergerakan gradient background.

### Bounce

Animasi masuk dan keluar dengan efek memantul.
-   `in`, `inUp`, `inDown`, `inLeft`, `inRight`
-   `out`, `outUp`, `outDown`, `outLeft`, `outRight`
-   **Contoh:** `variants={varBounce().inUp}`

### Container

-   `varContainer()`: Digunakan pada komponen parent (`MotionViewport` atau `m.div`) untuk menciptakan efek stagger (penundaan berurutan) pada animasi anak-anaknya.
-   **Contoh:** `variants={varContainer().animate}`

### Fade

Animasi masuk dan keluar dengan mengubah opacity.
-   `in`, `inUp`, `inDown`, `inLeft`, `inRight`
-   `out`, `outUp`, `outDown`, `outLeft`, `outRight`
-   **Contoh:** `variants={varFade().inUp}`

### Flip

Animasi masuk dan keluar dengan efek membalik (flip) pada sumbu X atau Y.
-   `inX`, `inY`
-   `outX`, `outY`
-   **Contoh:** `variants={varFlip().inX}`

### Path

-   `varPath()`: Digunakan untuk menganimasikan gambar SVG, seperti efek menggambar.

### Rotate

Animasi masuk dan keluar dengan efek rotasi.
-   `in`
-   `out`
-   **Contoh:** `variants={varRotate().in}`

### Scale

Animasi masuk dan keluar dengan mengubah skala pada sumbu X atau Y.
-   `inX`, `inY`
-   `outX`, `outY`
-   **Contoh:** `variants={varScale().inX}`

### Slide

Animasi masuk dan keluar dengan efek geser (slide).
-   `inUp`, `inDown`, `inLeft`, `inRight`
-   `outUp`, `outDown`, `outLeft`, `outRight`
-   **Contoh:** `variants={varSlide().inRight}`

### Zoom

Animasi masuk dan keluar dengan efek zoom (skala dan opacity).
-   `in`, `inUp`, `inDown`, `inLeft`, `inRight`
-   `out`, `outUp`, `outDown`, `outLeft`, `outRight`
-   **Contoh:** `variants={varZoom().in}`

### Kustomisasi Varian

Setiap fungsi varian dapat menerima objek properti untuk kustomisasi durasi dan easing.

```tsx
// Contoh kustomisasi
const customFade = varFade({
  durationIn: 1,      // durasi animasi masuk (detik)
  durationOut: 0.5,   // durasi animasi keluar (detik)
  easeIn: 'easeIn',   // easing untuk animasi masuk
  easeOut: 'easeOut', // easing untuk animasi keluar
  distance: 200       // jarak untuk animasi (jika berlaku)
});

// Penggunaan
<m.div variants={customFade.inUp} />
```