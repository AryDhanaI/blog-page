# Materi Les Coding: Membuat Website dari Nol

**Untuk:** Siswa usia 15 tahun
**Durasi yang disarankan:** 6–8 pertemuan (±90 menit per pertemuan)
**Contoh proyek:** Folder `Blog Page` (website "Cobee The Junior Programmer")

---

## Daftar Isi

0. Sebelum mulai: apa itu website?
1. Menyiapkan alat
2. Langkah 1 – Menyiapkan struktur folder
3. Langkah 2 – Membuat kerangka HTML
4. Langkah 3 – Membuat header dan navigasi
5. Langkah 4 – Menyusun isi halaman
6. Langkah 5 – Membuat kartu proyek
7. Langkah 6 – Membuat form kontak
8. Langkah 7 – Mempercantik dengan CSS
9. Langkah 8 – Menghidupkan halaman dengan JavaScript
10. Langkah 9 – Menguji dan memperbaiki kesalahan (debugging)
11. Langkah 10 – Mempublikasikan website
12. Latihan dan tantangan
13. Ringkasan (cheat sheet)
14. Catatan untuk tutor

---

## 0. Sebelum Mulai: Apa Itu Website?

Setiap website dibangun dari tiga bahasa utama. Bayangkan sebuah rumah:

| Bahasa | Fungsinya | Analogi rumah |
|---|---|---|
| **HTML** | Menentukan **isi** halaman: judul, paragraf, gambar, tombol, form | Struktur bangunan: dinding, pintu, atap |
| **CSS** | Mengatur **tampilan**: warna, ukuran, jarak, posisi, animasi | Cat, desain interior, dekorasi |
| **JavaScript** | Membuat halaman **bereaksi**: slider, tombol yang bisa diklik, form yang diproses | Listrik dan sistem otomatis di rumah |

Di dalam proyek kita, file-filenya adalah:

```
Blog Page/
├── index.html    ← halaman utama (beranda)
├── about.html    ← halaman "About Us"
├── project.html  ← halaman detail proyek
├── contact.html  ← halaman form kontak
├── style.css     ← semua aturan tampilan
└── script.js     ← semua perilaku interaktif
```

**Tujuan akhir:** kamu bisa membuat satu website sederhana dengan 4 halaman, navigasi, slider, dan form yang berfungsi.

---

## 1. Menyiapkan Alat

Yang perlu disiapkan:

1. **Visual Studio Code (VS Code)** – editor untuk menulis kode. Unduh di https://code.visualstudio.com
2. **Google Chrome** – browser untuk melihat hasil kerja kita.
3. **Ekstensi "Live Server"** di VS Code (penulis: Ritwick Dey).
   - Buka VS Code → klik ikon *Extensions* (kotak-kotak di sidebar kiri) → cari **Live Server** → klik **Install**.
   - Fungsinya: halaman otomatis refresh setiap kali kamu menyimpan file (`Ctrl + S`).

**Cara membuka proyek:**
1. Buka VS Code → **File → Open Folder** → pilih folder `Blog Page`.
2. Klik kanan `index.html` → **Open with Live Server**.
3. Browser akan terbuka otomatis (biasanya di alamat `http://127.0.0.1:5500`).

> **Tips:** Jangan lupa tekan `Ctrl + S` setiap selesai mengedit. Perubahan yang belum disimpan tidak akan muncul di browser.

---

## 2. Langkah 1 – Menyiapkan Struktur Folder

Tujuan: memahami bahwa website adalah **kumpulan file** yang saling terhubung.

**Latihan:**
1. Buat folder baru bernama `website-latihan`.
2. Di dalamnya, buat 3 file kosong: `index.html`, `style.css`, `script.js`.
3. Pastikan namanya tepat (huruf kecil, tanpa spasi). Komputer membedakan `Index.html` dan `index.html`, dan file dengan spasi di namanya lebih sulit dipanggil dari kode.

**Pertanyaan diskusi:**
- Mengapa `style.css` dan `script.js` dipisah dari `index.html`? Apa keuntungannya jika suatu saat ada 10 halaman?

---

## 3. Langkah 2 – Membuat Kerangka HTML

Buka `index.html` dan tulis kerangka dasar berikut. Ini adalah "cetakan" yang dipakai setiap halaman HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Cobee The Junior Programmer</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- Isi halaman ditulis di sini -->
    <script src="script.js"></script>
  </body>
</html>
```

**Penjelasan per baris:**

| Bagian | Fungsinya |
|---|---|
| `<!DOCTYPE html>` | Memberi tahu browser: "ini dokumen HTML5" |
| `<html lang="en">` | Pembungkus seluruh halaman |
| `<head>` | Informasi *tentang* halaman (tidak terlihat langsung) |
| `<meta charset="UTF-8">` | Agar huruf seperti `é` atau `🚀` tampil benar |
| `<meta name="viewport" ...>` | Agar tampilan menyesuaikan layar HP |
| `<title>` | Judul yang muncul di tab browser |
| `<link rel="stylesheet">` | Menyambungkan file CSS |
| `<body>` | Semua yang terlihat di layar ada di sini |
| `<script>` | Menyambungkan file JavaScript (ditaruh di akhir `body`) |

**Konsep penting: tag dan elemen**
- Tag biasanya berpasangan: `<p>` dibuka, `</p>` ditutup.
- Tag di dalam tag lain disebut **nested** (bersarang). Harus rapi, tidak boleh bersilangan: `<b><i>teks</b></i>` itu **salah**.

**Latihan:** Cari tahu apa beda tag `<div>` dan `<section>`. Tulis satu kalimat dengan kata-katamu sendiri.

---

## 4. Langkah 3 – Membuat Header dan Navigasi

Lihat bagian header di `index.html` (sekitar baris 27–37) dan `about.html`. Di sana ada:

```html
<header>
  <div class="header">
    <h3 class="title"><a href="index.html">Cobee The Coder</a></h3>
    <nav>
      <a href="project.html">Project</a>
      <a href="contact.html">Contact</a>
      <a href="about.html">About Us</a>
    </nav>
  </div>
</header>
```

**Yang dipelajari:**
- **`<a href="...">`** adalah link. Nilai `href` adalah tujuan halaman.
- **`<nav>`** adalah wadah untuk menu navigasi (secara arti, bukan hanya tampilan).
- **`class="..."`** memberi "nama panggilan" pada elemen supaya bisa dirias dengan CSS nanti.

**Latihan:**
1. Buat `about.html` dan `contact.html` dengan kerangka dari Langkah 2.
2. Tambahkan header yang sama di ketiga halaman.
3. Klik menu dan pastikan kamu berpindah halaman.

**Pertanyaan diskusi:** Mengapa link logo ("Cobee The Coder") mengarah ke `index.html`? Apa yang akan terjadi jika kita menulis `href="halaman-tidak-ada.html"`?

---

## 5. Langkah 4 – Menyusun Isi Halaman

Gunakan elemen semantik berikut untuk menyusun konten:

| Tag | Dipakai untuk |
|---|---|
| `<h1>` sampai `<h6>` | Judul (h1 paling besar dan paling penting; satu per halaman) |
| `<p>` | Paragraf |
| `<img src="..." alt="...">` | Gambar. `alt` = deskripsi untuk pembaca layar dan kalau gambar gagal dimuat |
| `<section>` | Bagian halaman yang punya tema sendiri |
| `<article>` | Konten yang bisa berdiri sendiri (misalnya satu proyek atau satu artikel) |
| `<ul>` / `<li>` | Daftar berpoin |

**Contoh dari halaman About (`about.html`):**

```html
<section id="about">
  <div class="section-container">
    <h2 class="section-title">About Me</h2>
    <p class="section-subtitle">My Introduction</p>
    <img class="blogger-image" src="foto-saya.png" alt="Foto Cobee" />
    <div>
      <p>
        Saya Cobee, siswa 16 tahun dari Denpasar. Saya mulai belajar coding
        sejak SD dengan Scratch...
      </p>
    </div>
  </div>
</section>
```

**Perhatikan:**
- Atribut `id="about"` berbeda dengan `class`. **`id` harus unik** (hanya satu per halaman), sedangkan **`class` boleh dipakai banyak kali**.
- Sebuah tag bisa punya beberapa atribut sekaligus.

**Latihan:** Buat halaman About versimu sendiri dengan:
- satu `h2` sebagai judul,
- dua paragraf tentang dirimu,
- satu daftar `ul` berisi 3 hal yang kamu suka.

---

## 6. Langkah 5 – Membuat Kartu Proyek

Di `index.html`, bagian "My Project" dibuat dengan pola **kartu** yang diulang. Inilah pola yang paling sering dipakai di dunia web:

```html
<article id="my-project">
  <h3 class="article-title">My Project</h3>
  <div class="project-container">
    <div class="project">
      <img src="desert-rally.png" alt="Screenshot Desert Rally" width="300" height="210" />
      <h4 class="project-title">Desert Rally</h4>
      <p class="project-description">Desert Rally Game is using Scratch 3 as a platform</p>
    </div>
    <div class="project">
      <!-- kartu kedua, strukturnya sama -->
    </div>
  </div>
</article>
```

**Konsep penting: pola berulang**
Setiap kartu punya struktur yang sama: gambar → judul → deskripsi. Kalau ingin menambah proyek, cukup **copy-paste satu blok `<div class="project">`** lalu ganti isinya.

**Latihan:**
1. Tambahkan satu kartu proyek baru ke `index.html` (boleh proyek dari sekolah atau proyek Scratch-mu).
2. Pakai gambar placeholder jika belum punya screenshot. Bisa juga pakai `https://placehold.co/300x210` sebagai gambar sementara.

---

## 7. Langkah 6 – Membuat Form Kontak

Buka `contact.html`. Form dibuat dengan elemen berikut:

```html
<form autocomplete="off">
  <label for="name">Name</label>
  <input type="text" name="name" id="name" placeholder=" " />

  <label for="email">Email</label>
  <input type="text" name="email" id="email" placeholder=" " />

  <label for="message">Message</label>
  <textarea name="message" id="message" rows="8"></textarea>

  <input type="submit" value="Submit" />
</form>
```

**Yang dipelajari:**
- **`<input>`** adalah kotak isian. Atribut `type` menentukan jenisnya (`text`, `email`, `password`, dll.).
- **`<label for="name">`** harus cocok dengan **`id="name"`** pada input. Ini membuat label bisa diklik dan lebih ramah untuk pembaca layar.
- **`<textarea>`** untuk isian teks panjang.
- **`name`** adalah nama data yang akan dikirim saat form disubmit.

**Latihan:** Tambahkan field "City" dengan cara yang sama seperti "Name".

> **Catatan penting:** Form ini belum benar-benar mengirim pesan ke mana pun. Itu wajar untuk latihan. Nanti di Langkah 8 kita hanya membuat modal "Message Sent" sebagai simulasi.

---

## 8. Langkah 7 – Mempercantik dengan CSS

Sekarang kita buka `style.css`. CSS bekerja dengan **selector** (memilih elemen) lalu memberi **properti** (aturan tampilan).

```css
/* selector : properti: nilai; */
.header {
  background-color: rgb(38, 70, 83);
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
```

### 8.1 Tiga jenis selector

| Selector | Contoh | Memilih |
|---|---|---|
| Tag | `a { ... }` | Semua tag `<a>` |
| Class | `.project { ... }` | Semua elemen dengan `class="project"` |
| ID | `#jumbotron { ... }` | Elemen dengan `id="jumbotron"` (hanya satu) |

### 8.2 Flexbox: cara mudah mengatur susunan

Lihat `.project-container` di `style.css`:

```css
.project-container {
  display: flex;
  justify-content: space-around;
}
```

- `display: flex` membuat anak-anaknya tersusun **berjajar** (default ke samping).
- `justify-content: space-around` membagi ruang kosong secara merata di sekitar mereka.

**Eksperimen:** ubah `space-around` menjadi `center`, `flex-start`, atau `space-between`. Perhatikan perbedaannya di browser.

### 8.3 Warna, jarak, dan bayangan

Di proyek ini dipakai beberapa teknik:

```css
.project {
  margin: 10px 30px;              /* jarak luar */
  padding: 20px;                  /* jarak dalam */
  border-bottom: 10px solid #e76f51;
  border-radius: 10px;            /* sudut membulat */
  box-shadow: 0 0 10px gainsboro; /* bayangan */
}
```

**Tips warna:** Proyek ini memakai palet dari satu keluarga warna:
- `rgb(38, 70, 83)` → biru gelap (header dan footer)
- `rgb(244, 162, 97)` → oranye (teks menu)
- `#e76f51` → merah-oranye (judul kartu)

Coba cari palet warnamu sendiri di situs seperti https://coolors.co.

### 8.4 Membuat tampilan responsif (media query)

Di bagian bawah `style.css` ada:

```css
@media (max-width: 900px) {
  aside {
    display: none;
  }
  .project-detail {
    display: block;
  }
}
```

Artinya: **"jika lebar layar 900px atau kurang, terapkan aturan ini."** Dengan ini, website yang sama tampil berbeda di HP dan di laptop.

**Latihan:**
1. Ubah warna header menjadi warna favoritmu.
2. Tambahkan `border-radius` pada gambar `.project img`.
3. Buka DevTools (`F12`) → pilih ikon HP di pojok kiri atas → lihat apakah sidebar hilang saat layar kecil.

---

## 9. Langkah 8 – Menghidupkan Halaman dengan JavaScript

JavaScript membuat halaman **bereaksi** terhadap aksi pengguna (klik, ketik, scroll, waktu). Ada tiga konsep inti di sini.

### 9.1 Mengambil elemen dari HTML

```javascript
var mini = document.querySelector(".mini-text");   // ambil elemen pertama dengan class ini
var btn  = document.getElementById("icon-up");     // ambil elemen dengan id ini
```

### 9.2 Mengubah isi dan tampilan

Dari `script.js`:

```javascript
function changeText() {
  document.querySelector(".mini-text").innerHTML = "Scroll down";
  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";
}
```

Di `index.html`, fungsi ini dipanggil lewat tombol:

```html
<button id="icon-up" onclick="changeText()">
```

**Alur kerjanya:**
1. Pengguna klik tombol.
2. Browser menjalankan `changeText()`.
3. Teks berubah, tombol pertama disembunyikan, tombol kedua muncul.

### 9.3 Event listener: cara yang lebih rapi

Di bagian "Like Dislike" di `script.js`, cara yang dipakai adalah:

```javascript
btnLike.onclick = function () {
  btnDislike.classList.remove("red");
  this.classList.toggle("green");
};
```

- `classList.toggle("green")` artinya: kalau class `green` belum ada, tambahkan; kalau sudah ada, hapus. Ini trik yang sangat sering dipakai.

### 9.4 Perulangan: slider otomatis

Slider di beranda berganti gambar sendiri setiap 5 detik:

```javascript
setInterval(function () {
  showSlide((currentSlide + 1) % slides.length);
}, 5000);
```

- `setInterval(fungsi, 5000)` = jalankan fungsi tiap 5000 milidetik (5 detik).
- `% slides.length` adalah trik **modulo**: setelah slide terakhir, kembali ke slide pertama. Contoh: jika ada 5 slide, `(4 + 1) % 5 = 0`.

### 9.5 Validasi input

Fungsi `newElement()` di `script.js` memeriksa apakah input kosong:

```javascript
if (inputValue === "") {
  alert("Data tidak boleh kosong!");
  return;
}
```

- `if` adalah pengambilan keputusan.
- `return` menghentikan fungsi lebih awal.

### 9.6 Latihan JavaScript (bertahap)

1. **Mudah:** Buat tombol yang saat diklik mengubah warna latar `body` menjadi acak. (Petunjuk: `Math.random()`)
2. **Sedang:** Buat counter: sebuah angka yang bertambah 1 setiap kali tombol diklik.
3. **Sulit:** Pada form kontak, buat agar pesan error muncul jika field Email tidak mengandung karakter `@`. (Petunjuk: `input.value.includes("@")`)

---

## 10. Langkah 9 – Menguji dan Memperbaiki Kesalahan (Debugging)

Kesalahan itu hal yang normal dalam coding. Programmer profesional pun menghabiskan banyak waktu untuk debugging.

**Cara membuka alat bantu di Chrome:**
1. Tekan `F12` (atau klik kanan → **Inspect**).
2. Buka tab **Console**. Di sini muncul pesan error berwarna merah.
3. Buka tab **Elements** untuk melihat HTML yang sedang berjalan. Kamu bisa mengklik elemen di halaman untuk mencari kodenya.

**Jenis kesalahan yang paling sering:**

| Gejala | Kemungkinan penyebab |
|---|---|
| Tampilan berantakan, CSS tidak berlaku | Path file salah, nama class salah ketik, atau lupa menyimpan file |
| Tombol tidak bereaksi | Nama fungsi di `onclick` salah, atau `script.js` tidak tersambung |
| Gambar tidak muncul | Path `src` salah, atau file gambar belum ada di folder |
| Console: `Uncaught ReferenceError` | Variabel atau fungsi belum didefinisikan |
| Halaman putih total | Ada tag yang belum ditutup atau salah tulis di HTML |

**Metode debugging yang disarankan (langkah demi langkah):**
1. Baca pesan error dengan teliti. Biasanya ada nama file dan nomor baris.
2. Buka file tersebut dan lihat baris yang disebut.
3. Ubah satu hal saja, lalu cek lagi. Jangan mengubah banyak hal sekaligus.
4. Jika buntu, gunakan `console.log(variabel)` untuk melihat nilai di tengah jalan.

**Latihan "cari bug":** Sengaja ubah satu huruf di `getElementById("icon-up")` menjadi `getElementById("icon-upp")`. Lihat errornya di Console, lalu perbaiki.

---

## 11. Langkah 10 – Mempublikasikan Website

Setelah website selesai, kita bisa membagikannya ke internet secara gratis.

### Opsi A: Netlify Drop (paling mudah)
1. Buka https://app.netlify.com/drop
2. Seret (drag) seluruh folder `Blog Page` ke halaman tersebut.
3. Dalam beberapa detik kamu mendapatkan link publik.

### Opsi B: GitHub Pages
1. Buat akun di https://github.com dan repository baru.
2. Upload semua file ke repository.
3. Buka **Settings → Pages**, pilih branch `main`, lalu **Save**.
4. Website tersedia di `https://namamu.github.io/nama-repo`.

> **Catatan penting:** Website harus punya file `index.html` di level paling atas folder agar langsung terbuka.

---

## 12. Latihan dan Tantangan

**Latihan dasar (wajib):**
- [ ] Website punya 4 halaman dengan navigasi yang berfungsi
- [ ] Setiap halaman punya `<title>` yang berbeda
- [ ] Ada minimal satu daftar (`ul`) dan satu form

**Latihan menengah:**
- [ ] Tambahkan halaman baru untuk proyekmu sendiri
- [ ] Buat slider sendiri dengan minimal 3 slide
- [ ] Buat navbar yang berubah warna saat di-hover (`a:hover`)

**Tantangan (opsional):**
- [ ] Buat tombol "Kembali ke atas" yang muncul saat halaman di-scroll ke bawah (petunjuk: `window.scrollY`)
- [ ] Simpan teks dari form ke `localStorage` (petunjuk: cari "MDN localStorage")

---

## 13. Ringkasan (Cheat Sheet)

**HTML**
```
<tag atribut="nilai">isi</tag>
<a href="">  <img src="" alt="">  <input type="">  <div class="">  <section id="">
```

**CSS**
```
selector { properti: nilai; }
.class  #id  tag          → cara memilih elemen
display: flex; justify-content: center; → susunan
@media (max-width: 900px) { ... }       → responsif
```

**JavaScript**
```
document.querySelector(".class")       → ambil elemen
elemen.innerHTML = "teks"              → ubah isi
elemen.style.display = "none"          → ubah tampilan
elemen.classList.toggle("nama")        → tambah/hapus class
setInterval(fungsi, ms)                → jalankan berulang
if (kondisi) { ... } else { ... }      → keputusan
```

**Kebiasaan baik:**
- Simpan file setiap selesai mengedit (`Ctrl + S`)
- Beri nama file dan class yang jelas
- Rapikan indentasi (`Shift + Alt + F` di VS Code untuk merapikan otomatis)
- Commit atau backup proyek secara berkala

---

## 14. Catatan untuk Tutor

Hal-hal yang perlu diperhatikan saat memakai proyek `Blog Page` sebagai bahan ajar:

1. **Gambar dan aset dimuat dari internet.** Semua gambar di HTML memakai URL `https://cobee-the-junior-programmer.netlify.app/assets/...`, dan `style.css` juga memuat background dari sana. Gambar **tidak ada di folder** ini. Jika situs tersebut mati, gambar tidak akan tampil. Untuk latihan, minta siswa mengunduh gambar sendiri dan mengubah path menjadi relatif (misalnya `assets/desert-rally.png`).
2. **Form kontak tidak mengirim data ke mana pun.** `script.js` hanya menampilkan modal. Ini bisa dijadikan bahan diskusi: "Bagaimana cara pesan ini benar-benar sampai ke email?"
3. **Peta dan video** memakai `<iframe>` dari Google Maps dan YouTube. Ini bisa dipakai untuk menjelaskan cara "embed" konten pihak lain.
4. **Tag `<script>` di akhir `body`** menjadi contoh yang baik untuk menjelaskan urutan loading halaman.
5. **Kode yang bisa dijadikan diskusi lanjutan:**
   - Di `index.html`, kedua kartu di `project.html` memakai class `project-description` untuk dua hal yang berbeda (di beranda sebagai deskripsi singkat, di halaman detail sebagai paragraf panjang). Ini bisa jadi pelajaran tentang penamaan class dan pentingnya konsistensi.
   - Di `script.js`, bagian `window.AOS` dan `AOS.init()` bergantung pada library eksternal. Jika library gagal dimuat, animasi tidak berjalan tapi halaman tetap berfungsi. Ini contoh bagus tentang ketergantungan pada kode pihak lain.
   - Blok `@media (max-width: 900px) { * { font-size: 2.5vw; padding: 0; margin: 0; } }` sangat agresif dan menghapus semua jarak. Bisa dijadikan latihan "perbaiki desain responsif ini" untuk siswa yang sudah lebih mahir.
6. **Saran alur les (6–8 pertemuan):**
   - Pertemuan 1: Alat + Langkah 1–2 (folder dan kerangka HTML)
   - Pertemuan 2: Langkah 3–4 (header, navigasi, konten)
   - Pertemuan 3: Langkah 5–6 (kartu proyek dan form)
   - Pertemuan 4: Langkah 7 (CSS dasar sampai flexbox)
   - Pertemuan 5: Langkah 7 lanjutan (responsif) + Langkah 8 bagian 9.1–9.3
   - Pertemuan 6: Langkah 8 bagian 9.4–9.6 (slider dan validasi)
   - Pertemuan 7: Debugging dan publikasi (Langkah 9–10)
   - Pertemuan 8: Proyek mandiri dan presentasi hasil kerja siswa

---

*Selamat belajar! Kesalahan adalah bagian dari proses. Setiap error yang berhasil diperbaiki membuatmu lebih mahir.*
