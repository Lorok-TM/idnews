---
author: Putri Lestari
pubDatetime: 2026-11-10T14:21:00Z
title: "Cara Membuat Nomor Urut Otomatis yang Mengikuti Data di Excel & Google Sheets"
slug: cara-membuat-nomor-urut-otomatis-yang-mengikuti-data-di-excel-google-sheets
ogImage: "https://id-news.vercel.app/image/nomor-urut-otomatis-excel.webp"
featured: false
draft: false
tags:
  - Microsoft
description: "Pelajari 5 cara membuat nomor urut otomatis di Microsoft Excel dan Google Sheets menggunakan rumus dinamis seperti ROW agar urutan tidak berantakan saat baris dihapus atau difilter."
---

![Nomor Urut Otomatis Excel](https://id-news.vercel.app/image/nomor-urut-otomatis-excel.webp)

Pernahkah Anda menghabiskan waktu berjam-jam merapikan nomor urut di Microsoft Excel hanya karena ada satu baris data yang dihapus? Jika Anda masih mengetik angka satu per satu dari atas ke bawah, Anda sedang membuang waktu berharga yang sebenarnya bisa diotomatisasi.

Dalam dunia pengolahan data modern, efisiensi adalah segalanya. Mengetik nomor secara manual bukan hanya lambat, tetapi juga rentan terhadap *human error*. Ketika data diurutkan ulang (*sort*), disaring (*filter*), atau ada baris baru yang disisipkan, nomor urut manual dipastikan akan berantakan.

Kabar baiknya, ada beberapa trik dan rumus cerdas yang bisa menyelesaikan masalah ini dalam hitungan detik. Artikel ini akan membahas secara mendalam cara membuat nomor urut otomatis yang mengikuti data, baik di Microsoft Excel maupun Google Sheets.

Mari kita bedah satu per satu teknik dari yang paling dasar hingga rumus tingkat lanjut agar Anda bisa bekerja lebih cerdas, bukan lebih keras.

## Mengapa Penomoran Manual Sudah Tidak Efektif?

Sebelum masuk ke teknis, mari kita pahami mengapa metode manual harus segera Anda tinggalkan. Sebagai profesional yang bekerja dengan data, keakuratan adalah hal mutlak.

Ketika Anda menggunakan cara manual dengan mengetik “1, 2, 3” lalu menarik kursor ke bawah (*AutoFill* biasa), angkanya memang berurutan. Namun, metode statis ini memiliki tiga kelemahan fatal:

* **Tidak responsif terhadap penghapusan baris.** Jika Anda menghapus baris nomor 5, maka urutan akan langsung melompat dari 4 ke 6. Anda harus mengulang penarikan nomor dari awal.
* **Kacau saat fitur Filter aktif.** Ketika Anda menyaring data tertentu, nomor urut asli akan tetap menempel pada barisnya. Hasilnya, Anda akan melihat urutan angka yang acak seperti 2, 7, 15 di layar Anda.
* **Nomor muncul meski tabel kosong.** Pada template laporan profesional, nomor urut seharusnya hanya muncul jika ada data di baris tersebut. Penomoran manual membuat tabel terlihat kotor jika baris datanya masih kosong.

Untuk mengatasi masalah ini, Anda membutuhkan **cara bikin nomor urut di Excel** yang dinamis. Artinya, angka tersebut akan bereaksi dan menyesuaikan diri secara otomatis berdasarkan kondisi data di sebelahnya.

## 5 Cara Membuat Nomor Urut Otomatis di Excel

Microsoft Excel menyediakan berbagai macam fungsi bawaan (rumus) yang bisa Anda kombinasikan untuk membuat nomor urut. Berikut adalah lima metode terbaik yang bisa Anda terapkan sesuai dengan kebutuhan spesifik Anda.

### 1. Menggunakan Fitur AutoFill (Cara Dasar)

Meskipun bukan cara yang dinamis jika ada penghapusan data, *AutoFill* adalah cara paling cepat jika Anda hanya perlu membuat nomor urut satu kali untuk data statis.

Cara menggunakannya sangat mudah:

1. Ketik angka **1** pada sel pertama (misalnya `A2`).
2. Ketik angka **2** pada sel di bawahnya (`A3`).
3. Blok kedua sel tersebut (`A2` dan `A3`).
4. Arahkan kursor ke sudut kanan bawah sel `A3` hingga kursor berubah menjadi ikon plus hitam (`+`).
5. Klik dua kali (*double-click*) atau tarik kursor tersebut ke bawah hingga baris data terakhir.

> **Kelemahan:** Nomor tidak akan bergeser naik jika Anda menghapus baris di tengah tabel. Anda harus menggunakan fungsi atau rumus jika menginginkan otomatisasi penuh.

### 2. Menggunakan Fungsi ROW (Anti Berantakan Saat Baris Dihapus)

Jika Anda ingin urutan angka tetap rapi meskipun ada baris yang dihapus atau disisipkan, fungsi `ROW` adalah jawaban utamanya. Fungsi ini bekerja dengan cara membaca posisi baris sel tersebut berada.

Rumus dasarnya adalah `=ROW()`. Namun, jika tabel Anda tidak dimulai dari baris pertama (misalnya nomor 1 berada di sel `A3`), Anda harus mengurangi hasil `ROW` dengan jumlah baris di atasnya.

**Cara penerapannya:**

1. Klik pada sel tempat nomor 1 akan diletakkan (misalnya di sel `A3`).
2. Ketikkan rumus: `=ROW()-2` *(Angka 2 didapat karena sel berada di baris ke-3, sehingga 3 dikurangi 2 sama dengan 1)*.
3. Tekan **Enter**.
4. Salin (*copy*) rumus tersebut ke sel di bawahnya dengan cara menarik sudut kanan bawah sel.

Sekarang, cobalah hapus salah satu baris di tengah data Anda. Anda akan melihat bahwa nomor urut di bawahnya otomatis mengoreksi diri dan tetap berurutan dengan sempurna.

### 3. Menggunakan Fungsi IF (Nomor Muncul Hanya Jika Ada Data)

Bagaimana jika Anda ingin nomor urut hanya muncul jika kolom nama atau deskripsi sudah diisi? Ini sangat berguna untuk membuat *template* faktur, kwitansi, atau absensi karyawan.

Kita akan menggabungkan **rumus Excel nomor urut** dengan fungsi logika `IF` dan `COUNTA`. Fungsi ini membaca: “Jika sel di sebelahnya kosong, biarkan kosong. Jika ada isinya, berikan nomor urut.”

**Cara penerapannya:**

1. Anggaplah kolom B adalah kolom “Nama Karyawan” dan kolom A adalah “Nomor”.
2. Pada sel `A2`, ketikkan rumus berikut:
   ```excel
   =IF(B2="","",COUNTA($B$2:B2))
   ```
3. Tekan **Enter** dan tarik rumus tersebut ke bawah hingga baris ke-100 atau sesuai kebutuhan.

**Penjelasan Rumus:**

* `B2=""` berarti Excel mengecek apakah kolom Nama kosong.
* `""` (tanda kutip ganda) menginstruksikan Excel untuk membiarkan sel nomor tetap kosong.
* `COUNTA($B$2:B2)` berfungsi menghitung jumlah sel yang terisi dari `B2` hingga baris yang sedang aktif. Tanda dolar (`$`) berfungsi mengunci sel `B2` sebagai titik awal perhitungan.

Dengan cara ini, nomor urut baru akan tercipta secara otomatis begitu Anda mengetikkan nama di kolom sebelahnya. Ini adalah inti dari **nomor otomatis mengikuti data**.

### 4. Menggunakan Fungsi SUBTOTAL (Tetap Rapi Saat Difilter)

Dari semua masalah penomoran, data yang di-*filter* sering kali menjadi momok paling menyebalkan. Rumus `ROW` akan gagal mempertahankan urutan `1, 2, 3` jika data difilter.

Untuk mengatasi masalah ini, Anda wajib menggunakan fungsi `SUBTOTAL`. Fungsi ini dirancang khusus untuk mengabaikan baris yang disembunyikan (*hidden*) oleh fitur filter.

**Cara penerapannya:**

1. Pastikan kolom di sebelah nomor (misalnya kolom B untuk Nama) terisi data tanpa ada sel yang kosong (*blank cells*).
2. Pada sel `A2` (kolom Nomor), masukkan rumus ini:
   ```excel
   =SUBTOTAL(3, B2:B2)
   ```
3. Tekan **Enter**, lalu tarik kursor ke bawah untuk menyalin rumus ke semua baris.

**Penjelasan Rumus:**

* Angka `3` di dalam rumus adalah kode untuk fungsi `COUNTA` (menghitung sel yang tidak kosong).
* `$B$2:B2` adalah rentang (*range*) sel yang dihitung. Excel akan menghitung jumlah nama yang terlihat dari atas hingga ke baris tersebut.

Silakan uji coba dengan menyaring (*filter*) data Anda berdasarkan kategori tertentu. Anda akan melihat nomor urut di kolom A tetap dimulai dari angka **1** dan berurutan ke bawah tanpa putus.

### 5. Menggunakan Fungsi SEQUENCE (Fitur Excel Paling Modern)

Jika Anda berlangganan Microsoft 365 atau menggunakan Excel 2021 ke atas, Anda mendapatkan akses ke *Dynamic Arrays*. Salah satu fungsi andalannya adalah `SEQUENCE`.

Fungsi ini memungkinkan Anda membuat nomor urut otomatis yang mengikuti data dalam rentang panjang tanpa perlu menarik (*drag*) rumus ke bawah. Cukup ketik di satu sel, dan angkanya akan tumpah (*spill*) ke bawah dengan sendirinya.

**Cara penerapannya:** Jika Anda ingin membuat nomor urut berdasarkan jumlah data yang ada di kolom B (mulai `B2`), ketikkan rumus ini di sel `A2`:

```excel
=SEQUENCE(COUNTA(B2:B1000))
```

> **Keunggulan Utama:** Anda tidak perlu lagi meng-*copy paste* rumus ke bawah. Begitu Anda menambah data baru di kolom B, nomor urut di kolom A akan bertambah dengan sendirinya. Ini adalah metode paling *clean* dan canggih saat ini.

## Cara Membuat Nomor Otomatis Google Sheets

Apakah teknik di atas hanya berlaku untuk Microsoft Excel? Tentu saja tidak. Sebagian besar pekerja saat ini menggunakan Google Sheets untuk kolaborasi data.

Kabar baiknya, **nomor otomatis Google Sheets** bekerja dengan logika yang hampir identik dengan Excel. Fungsi `ROW`, `IF`, dan `COUNTA` berfungsi 100% sama. Namun, Google Sheets memiliki fitur khusus bernama `ARRAYFORMULA` yang membuat pekerjaan ini jauh lebih praktis.

Alih-alih menyalin rumus ke ribuan baris, Anda bisa menguasai satu baris formula di baris teratas, dan biarkan Google Sheets melakukan sisanya.

**Langkah-langkah di Google Sheets:**

1. Klik sel `A2` (sel pertama untuk nomor urut).
2. Ketikkan rumus canggih ini:
   ```excel
   =ARRAYFORMULA(IF(B2:B<>"", ROW(A2:A)-1, ""))
   ```
3. Tekan **Enter**.

**Bagaimana rumus ini bekerja?**

* `ARRAYFORMULA` memerintahkan Google Sheets untuk menerapkan rumus ke seluruh kolom sekaligus, bukan hanya di satu sel.
* `B2:B<>""` mengecek seluruh kolom B. Jika ada isinya (tidak kosong), maka jalankan perintah selanjutnya.
* `ROW(A2:A)-1` memberikan nomor urut berdasarkan baris saat ini dikurangi satu (karena baris 1 dipakai untuk judul kolom/*header*).
* Jika kolom B ditarik sampai baris ke-5000, maka nomor urut di kolom A juga akan langsung terisi sampai baris ke-5000 selama ada isinya.

Ini adalah solusi nomor satu bagi praktisi SEO dan analis data yang kerap mengimpor ribuan data (*bulk data*) ke dalam Google Spreadsheet setiap harinya.

## Studi Kasus: Penomoran Otomatis pada Tabel Absensi Karyawan

Untuk memberikan pemahaman yang lebih kuat, mari kita simulasikan penggunaannya di dunia nyata. Bayangkan Anda adalah seorang staf HR yang harus memantau daftar hadir 150 karyawan.

Setiap minggu, ada karyawan baru yang masuk dan ada yang keluar (*resign*). Jika Anda memakai penomoran manual:

* Saat karyawan *resign* dan datanya Anda hapus, nomor urut di bawahnya akan kacau.
* Anda harus mengecek ulang dan menarik (*drag*) ulang nomor dari atas ke bawah. Ini memakan waktu 3–5 menit setiap kali terjadi perubahan.

Namun, dengan mengaplikasikan rumus `=IF(B2="","",COUNTA($B$2:B2))` pada kolom nomor:

1. Ketika karyawan *resign* dan Anda menghapus barisnya (*Delete Row*), nomor urut di bawahnya akan otomatis terkoreksi.
2. Ketika ada karyawan baru, Anda tinggal mengetik namanya di kolom paling bawah, dan angka urutan baru akan seketika muncul tanpa Anda harus mengutak-atik kolom nomor.

Ini menunjukkan bagaimana **cara membuat nomor urut otomatis yang mengikuti data** benar-benar menyelamatkan produktivitas Anda. Waktu 5 menit yang dihemat setiap harinya berarti Anda menyelamatkan lebih dari 20 jam kerja dalam setahun!

## Tips Menghindari Error Saat Membuat Nomor Urut Otomatis

Meskipun fungsi-fungsi di atas sangat tangguh, terkadang pengguna mengalami hasil yang tidak sesuai harapan (*error* atau `#REF!`). Berikut adalah beberapa tips dari ahli untuk memastikan penomoran otomatis tabel Anda berjalan sempurna:

* **Pahami Referensi Absolut vs Relatif:** Pada rumus `SUBTOTAL` dan `COUNTA`, perhatikan penggunaan tanda dolar (`$`). Penulisan `$B$2:B2` sangat krusial. Tanda dolar mengunci sel pertama (`B2`), sementara `B2` kedua dibiarkan bebas agar bisa bergerak menjadi `B3`, `B4`, saat ditarik ke bawah. Jika Anda lupa memberi tanda dolar, urutan angkanya hanya akan menghasilkan angka `1` terus-menerus.
* **Waspadai Sel Kosong (Blank Cells) di Tengah Data:** Fungsi yang menggunakan `COUNTA` akan menghitung sel yang terisi. Jika ada satu baris di kolom acuan (misal Nama) yang tidak sengaja kosong, maka nomor urut di bawahnya akan meleset satu angka. Pastikan kolom acuan bebas dari sel kosong, atau gunakan fungsi `ROW` sebagai alternatif yang lebih kebal terhadap sel kosong.
* **Hindari Merge Cells pada Kolom Nomor:** Melakukan *Merge Cells* (menggabungkan sel) pada kolom yang berisi rumus penomoran sering kali memicu *error* dan membuat formula tidak bisa disalin ke bawah. Gunakan *Center Across Selection* sebagai ganti *Merge Cells* jika hanya untuk kebutuhan visualisasi.

## FAQ (Pertanyaan yang Sering Diajukan)

Berikut adalah beberapa pertanyaan yang paling sering dicari pengguna terkait **cara membuat nomor urut otomatis yang mengikuti data**:

### 1. Bagaimana cara membuat nomor urut yang tidak berubah saat di-filter?
Anda harus menggunakan rumus `=SUBTOTAL(3, $B$2:B2)` (asumsikan kolom B adalah data acuan). Fungsi `SUBTOTAL` secara otomatis akan mengabaikan data yang tersembunyi karena filter, sehingga nomor urut yang tampil akan selalu berurutan dari angka `1`.

### 2. Apakah rumus SEQUENCE bisa digunakan di Excel versi lama?
Tidak bisa. Fungsi `SEQUENCE` adalah bagian dari *Dynamic Array* yang hanya tersedia di Excel 365 dan Excel versi 2021 ke atas. Untuk versi 2019 ke bawah, Anda harus menggunakan fungsi `ROW` atau `IF`.

### 3. Kenapa rumus penomoran saya menghasilkan error #NAME?
*Error* `#NAME` biasanya terjadi karena ada salah ketik (*typo*) pada penulisan nama fungsi. Misalnya, Anda mengetik `SUBTOTL` alih-alih `SUBTOTAL`, atau Anda mencoba menggunakan fungsi `SEQUENCE` di Excel versi lama yang belum mendukung fungsi tersebut.

### 4. Bisakah membuat penomoran dengan awalan huruf otomatis, misalnya “A-001, A-002”?
Tentu saja. Anda cukup menambahkan fungsi teks (*Concatenate*) di depan rumus nomor urut. Contohnya: `="A-" & TEXT(ROW()-1, "000")`. Rumus ini akan mengubah nomor `1` menjadi teks berformat `A-001`, dan mengikuti pergeseran baris secara dinamis.

### 5. Cara otomatis mengisi nomor di tabel Word, apakah sama dengan Excel?
Berbeda. Di Microsoft Word, Anda tidak menggunakan rumus. Cukup blok kolom yang ingin diberi nomor, lalu klik menu **Home**, dan pilih ikon **Numbering**. Jika Anda menambah atau menghapus baris tabel di Word, nomor tersebut akan otomatis menyesuaikan diri.

### 6. Apakah ARRAYFORMULA di Google Sheets memperlambat kinerja file?
Jika digunakan dengan benar, `ARRAYFORMULA` justru lebih ringan daripada menyalin (*copy*) rumus ke ribuan baris. Namun, pastikan Anda membatasi referensi baris (misalnya tidak menggunakan `A2:A` jika data Anda hanya 500 baris, ubah menjadi `A2:A500`) agar server tidak membaca jutaan baris kosong.

## Kesimpulan

Mengetahui **cara membuat nomor urut otomatis yang mengikuti data** adalah salah satu keahlian dasar namun berdampak sangat besar bagi siapa saja yang bekerja dengan *spreadsheet*. Anda tidak perlu lagi dipusingkan dengan urutan nomor yang berantakan saat melakukan penghapusan baris, penambahan data, maupun penerapan filter.

Untuk data yang sering ditambah di akhir tabel, kombinasikan fungsi **IF dan COUNTA**. Jika pekerjaan Anda mengharuskan penyaringan data secara konstan, **SUBTOTAL** adalah sahabat terbaik Anda. Dan bagi pengguna Excel versi terbaru, jangan ragu memanfaatkan keajaiban fungsi **SEQUENCE** untuk kecepatan maksimal.

Menguasai rumus-rumus ini tidak hanya meningkatkan akurasi data Anda, tetapi juga membangun reputasi Anda sebagai seorang profesional yang bekerja dengan rapi, efisien, dan melek teknologi.

Apakah panduan ini membantu Anda menyelesaikan masalah penomoran data? Praktikkan langsung rumus-rumus di atas pada dokumen kerja Anda hari ini. Jika Anda menemukan kendala saat menerapkannya, atau ingin membagikan trik lain yang sering Anda gunakan, jangan ragu untuk menyimpan artikel ini atau membagikannya kepada rekan kerja di tim Anda agar mereka juga bisa bekerja lebih produktif!
