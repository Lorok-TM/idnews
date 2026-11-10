---
author: Putri Lestari
pubDatetime: 2026-11-09T11:10:00Z
title: "Cara Menggabungkan Beberapa File Excel Menjadi Satu dalam Hitungan Menit"
slug: cara-menggabungkan-beberapa-file-excel-menjadi-satu-dalam-hitungan-menit
ogImage: "https://id-news.vercel.app/image/gabungkan-file-excel-menjadi-satu.webp"
featured: false
draft: false
tags:
  - Microsoft
description: "Pusing rekap data ratusan laporan? Pelajari cara menggabungkan file Excel menjadi satu secara otomatis dengan Power Query, VBA Macro, dan trik cepat lainnya."
---

![Gabungkan File Excel Menjadi Satu](https://id-news.vercel.app/image/gabungkan-file-excel-menjadi-satu.webp)

Pernahkah Anda dihadapkan pada tugas untuk merekap puluhan bahkan ratusan laporan penjualan bulanan dari berbagai cabang ke dalam satu dokumen? Jika Anda masih melakukannya dengan cara *copy-paste* satu per satu, Anda sedang membuang banyak waktu berharga.

Bagi para pekerja data, staf administrasi, maupun analis, mengelola data yang terpisah-pisah adalah rutinitas sehari-hari yang sering kali merepotkan. Risiko *human error* seperti data ganda, baris yang terlewat, hingga salah format sangat rentan terjadi jika dilakukan secara manual.

Untungnya, ada banyak **cara menggabungkan file Excel** yang jauh lebih efektif dan otomatis. Mulai dari fitur bawaan Microsoft Excel seperti Power Query, hingga penggunaan *script* VBA Macro untuk tingkat lanjut.

Dalam artikel ini, kita akan mengupas tuntas berbagai metode menggabungkan beberapa file Excel menjadi satu dengan mudah. Mari kita mulai! 

## Mengapa Penting Mengetahui Cara Menggabungkan File Excel?

Sebelum masuk ke teknis, penting untuk memahami mengapa keahlian ini sangat krusial di dunia kerja modern. Di era digital saat ini, kecepatan dan akurasi data adalah kunci.

Ketika Anda tahu cara *merge* Excel secara otomatis, Anda bisa memangkas waktu kerja dari yang awalnya berjam-jam menjadi hanya beberapa klik saja. Efisiensi ini tentu akan meningkatkan produktivitas Anda secara drastis.

Selain itu, menyatukan data Excel secara otomatis menggunakan fitur khusus akan meminimalisir kesalahan manusia. Data yang terintegrasi dengan baik juga mempermudah proses analisis, pembuatan *pivot table*, hingga penyusunan *dashboard* pelaporan yang komprehensif.

## Persiapan Sebelum Menggabungkan Beberapa File Excel

Agar proses penyatuan data berjalan lancar tanpa *error*, ada beberapa langkah persiapan yang pantang Anda lewati. Menggabungkan file dengan struktur yang berantakan hanya akan menghasilkan data yang *corrupt*.

Berikut adalah *best practices* yang wajib Anda lakukan:

- **Kumpulkan File dalam Satu Folder:** Pastikan semua file Excel yang ingin Anda gabungkan berada di dalam satu folder khusus. Jangan campur dengan file lain.
- **Samakan Format Header (Judul Kolom):** Pastikan nama kolom, urutan, dan jumlah kolom di setiap file sama persis. Misalnya, jika file pertama memiliki kolom “Nama” di kolom A, pastikan file kedua juga demikian.
- **Bersihkan Data dari Baris Kosong:** Hapus baris atau kolom kosong yang tidak perlu (seperti judul laporan di baris 1-3) agar data bisa menyambung dengan rapi.
- **Gunakan Ekstensi File yang Sama:** Sebisa mungkin, pastikan semua file memiliki format yang seragam, baik itu `.xlsx`, `.xls`, atau `.csv`.
- **Buat Backup Data:** Biasakan untuk menggandakan (duplikat) folder asli sebelum mulai bereksperimen. Ini berguna untuk mencegah kehilangan data jika terjadi kesalahan.

## 5 Cara Menggabungkan Beberapa File Excel Menjadi Satu

Terdapat beberapa opsi yang bisa Anda sesuaikan dengan kebutuhan, mulai dari skala kecil hingga data dalam jumlah masif. Berikut adalah panduan langkah demi langkahnya.

### 1. Cara Manual (Copy-Paste) untuk Data Skala Kecil

Jika Anda hanya perlu menggabungkan 2 hingga 3 file saja, menggunakan metode *copy-paste* masih cukup relevan. Meskipun terdengar sederhana, ada trik agar proses ini lebih cepat.

Cara ini sangat cocok bagi pemula yang tidak ingin pusing dengan fitur tingkat lanjut. Namun, sangat tidak disarankan jika file yang digabungkan lebih dari 5 buah.

**Langkah-langkahnya:**

1. Buka file Excel tujuan (file master yang akan menjadi tempat gabungan data).
2. Buka file Excel sumber (file yang datanya ingin diambil).
3. Di file sumber, blok area data yang ingin disalin. Anda bisa menggunakan *shortcut* **Ctrl + Shift + Panah Bawah/Kanan** untuk menyeleksi data secara cepat.
4. Tekan **Ctrl + C** (Copy).
5. Beralih ke file master, klik pada sel kosong pertama di bagian bawah data yang sudah ada, lalu tekan **Ctrl + V** (Paste).
6. Ulangi langkah di atas untuk file-file berikutnya.

### 2. Menggunakan Fitur Power Query (Sangat Direkomendasikan)

Bagi Anda yang menggunakan Excel 2016 atau versi lebih baru (termasuk Office 365), Power Query adalah senjata rahasia terbaik. Fitur ini dirancang khusus untuk mengambil, membersihkan, dan menggabungkan data secara otomatis.

Keunggulan utama Power Query adalah sifatnya yang dinamis. Jika bulan depan ada file laporan baru yang masuk ke dalam folder, Anda hanya perlu mengklik tombol “Refresh”, dan data baru tersebut akan otomatis tergabung!

**Langkah-Langkah Menggunakan Power Query:**

1. Buka halaman kerja Excel baru yang kosong (*Blank Workbook*).
2. Pergi ke tab **Data** di bagian atas menu *ribbon*.
3. Klik **Get Data** > pilih **From File** > lalu klik **From Folder**.
4. Akan muncul jendela pencarian. Cari dan pilih folder tempat Anda menyimpan semua file Excel yang ingin digabungkan, lalu klik **Open**.
5. Excel akan menampilkan jendela *preview* berisi daftar nama file di dalam folder tersebut. Perhatikan bagian bawah jendela, lalu klik tombol **Combine** dan pilih **Combine & Transform Data**.
6. Pada jendela *Combine Files*, pilih *Sheet* tempat data Anda berada (misalnya Sheet1). Pastikan *preview* datanya sudah benar, lalu klik **OK**.
7. Jendela *Power Query Editor* akan terbuka. Di sini, Anda bisa merapikan data, menghapus kolom *Source.Name* jika tidak diperlukan, atau mengubah format tanggal.
8. Jika data sudah dirasa rapi, klik tombol **Close & Load** yang ada di pojok kiri atas.
9. *Boom!* Seluruh data dari berbagai file kini telah menyatu ke dalam satu tabel Excel yang rapi.

### 3. Menggunakan VBA Macro (Untuk Proses Otomatisasi Cepat)

Jika Anda menyukai *coding* atau ingin proses yang lebih instan dari Power Query, menggunakan script *Visual Basic for Applications* (VBA) adalah jawabannya. Cara menggabungkan file excel ini sangat populer di kalangan analis tingkat lanjut.

Sekalipun Anda tidak mengerti bahasa pemrograman, Anda tetap bisa menggunakan cara ini cukup dengan melakukan *copy-paste script* yang sudah kami sediakan di bawah.

**Langkah-langkah menggunakan VBA Macro:**

1. Pastikan semua file Excel yang akan digabungkan sudah berada dalam satu folder yang sama.
2. Buka satu file Excel baru (*Blank Workbook*).
3. Tekan tombol **Alt + F11** pada keyboard secara bersamaan. Ini akan membuka jendela *Microsoft Visual Basic for Applications*.
4. Pada menu di bagian atas, klik **Insert** lalu pilih **Module**.
5. *Copy* kode VBA di bawah ini, lalu *Paste* ke dalam jendela Module yang kosong:

```vba
Sub GabungkanFileExcel()
    Dim FolderPath As String
    Dim Filename As String
    Dim Sheet As Worksheet
    Dim LastRow As Long
    Dim DestSheet As Worksheet
    
    'Tentukan folder tempat file disimpan, ganti alamat di bawah sesuai folder Anda
    FolderPath = "C:\Users\NamaUser\Documents\FolderLaporan\" 
    
    Set DestSheet = ActiveWorkbook.Sheets(1)
    Filename = Dir(FolderPath & "*.xls*")
    
    Application.ScreenUpdating = False
    Application.DisplayAlerts = False
    
    Do While Filename <> ""
        Workbooks.Open Filename:=FolderPath & Filename, ReadOnly:=True
        
        For Each Sheet In ActiveWorkbook.Sheets
            LastRow = DestSheet.Cells(DestSheet.Rows.Count, "A").End(xlUp).Row
            Sheet.UsedRange.Copy DestSheet.Range("A" & LastRow + 1)
        Next Sheet
        
        Workbooks(Filename).Close
        Filename = Dir()
    Loop
    
    Application.ScreenUpdating = True
    Application.DisplayAlerts = True
    
    MsgBox "Proses penggabungan file Excel selesai!", vbInformation
End Sub
```

6. **Penting:** Ubah bagian `"C:\Users\NamaUser\Documents\FolderLaporan\"` dengan lokasi folder Anda sendiri. Jangan lupa tambahkan tanda *backslash* (`\`) di bagian akhir.
7. Tekan tombol **F5** pada keyboard atau klik ikon *Play* (segitiga hijau) di bagian atas untuk menjalankan *script*.
8. Tunggu beberapa detik, dan akan muncul notifikasi bahwa proses penggabungan telah selesai.

### 4. Lewat Command Prompt (Khusus Format CSV)

Bagaimana jika file laporan yang Anda unduh dari sistem perusahaan berformat `.csv` (*Comma Separated Values*)? Anda bisa menggunakan Command Prompt (CMD) di sistem operasi Windows.

Metode ini sangat ringan, sangat cepat, dan bisa mengeksekusi ribuan file CSV dalam waktu kurang dari dua detik.

**Langkah-langkahnya:**

1. Kumpulkan semua file `.csv` di dalam satu folder (misalnya di drive `D:\Laporan`).
2. Tekan tombol **Windows + R** pada keyboard, ketik `cmd`, lalu tekan **Enter**.
3. Arahkan CMD ke folder Anda dengan mengetikkan perintah: `cd /d D:\Laporan` lalu tekan **Enter**.
4. Ketik perintah berikut: `copy *.csv SemuaData.csv` lalu tekan **Enter**.
5. Selesai! Buka folder Anda, maka akan muncul satu file baru bernama `SemuaData.csv` yang berisi gabungan dari seluruh file Anda.

### 5. Menggunakan Tools Online atau Add-ins Tambahan

Jika Anda mencari cara yang lebih visual dan tidak ingin bersinggungan dengan fitur rumit, Anda bisa memanfaatkan *tools online* atau *Add-ins* pihak ketiga. Salah satu *Add-ins* paling terkenal untuk Excel adalah **Kutools for Excel**.

Kutools memiliki fitur *Combine* yang memungkinkan Anda menggabungkan beberapa file, sheet, maupun *workbook* hanya dengan antarmuka yang sangat ramah pengguna (*user-friendly*). Anda hanya perlu memilih file, menentukan format pemisahan, dan klik *Combine*.

Sebagai alternatif gratis, banyak *website online* (seperti ASPOSE atau GroupDocs) yang menawarkan fitur “Merge Excel Online”. Anda cukup mengunggah file Anda ke situs tersebut, dan mengunduh file gabungannya. Namun, **metode online ini tidak disarankan jika data Anda bersifat rahasia (confidential) perusahaan**.

## Tips Agar Proses Merge File Excel Berjalan Lancar

Pekerjaan menggabungkan beberapa file excel menjadi satu seringkali menemui hambatan teknis. Agar Anda tidak membuang waktu memperbaiki hasil *merge* yang berantakan, ikuti beberapa tips pro berikut ini:

- **Atasi Header yang Berulang:** Saat menggunakan VBA atau copy-paste, judul kolom (Header) dari file kedua dan seterusnya biasanya ikut tersalin. Anda bisa memblok seluruh data, gunakan fitur **Filter**, cari nama header tersebut, lalu hapus baris yang memuat header yang berulang. (Catatan: Power Query otomatis mengatasi masalah ini).
- **Pastikan Format Tipe Data Sama:** Jika di file A kolom nomor HP berformat *Text*, pastikan di file B juga berformat *Text* (bukan *Number*). Perbedaan format tipe data bisa menyebabkan kolom terpisah atau angka nol di depan nomor HP menghilang saat digabung menggunakan Power Query.
- **Tutup File yang Sedang Digabung:** Saat menggunakan metode VBA Macro atau Power Query, pastikan file sumber tidak sedang Anda buka di jendela Excel lain. File yang sedang terbuka (Read/Write) terkadang gagal ditarik datanya oleh sistem.

## FAQ (Pertanyaan yang Sering Diajukan)

Berikut adalah beberapa pertanyaan yang paling sering ditanyakan oleh pengguna Excel seputar proses penggabungan file:

### 1. Apakah bisa menggabungkan file Excel dengan jumlah kolom yang berbeda?
Bisa, jika Anda menggunakan Power Query. Power Query akan otomatis menyesuaikan *header*. Kolom yang tidak ada di file tertentu akan diisi dengan nilai *null* (kosong) pada hasil akhir. Namun, jika memakai cara manual atau VBA biasa, datanya akan menjadi berantakan.

### 2. Kenapa proses Power Query saya terasa lambat (lemot)?
Hal ini biasanya terjadi jika file sumber Anda terlalu besar (ratusan MB), atau terdapat banyak format warna/rumus berat di file sumber. Disarankan untuk menyimpan file sumber dalam bentuk *Values* saja atau berekstensi CSV agar lebih ringan saat di-*load*.

### 3. Apakah pengguna Mac bisa menggunakan fitur Power Query?
Pada Excel for Mac versi terbaru (Microsoft 365), fitur dasar Power Query sudah mulai didukung. Namun, fungsionalitasnya belum selengkap di versi Windows. Jika tombol tidak tersedia, gunakan metode *copy-paste* atau Add-ins.

### 4. Berapa batas maksimal file yang bisa digabungkan?
Tergantung kemampuan komputer dan batas baris Excel itu sendiri. Batas baris maksimal satu sheet Excel adalah 1.048.576 baris. Jika total gabungan baris melebihi angka tersebut, Excel tidak akan sanggup menampilkannya di satu lembar kerja. Anda harus menggunakan *Power Pivot* atau *Database (SQL)*.

### 5. Apakah saya bisa menggabungkan data dari Google Sheets ke Excel?
Bisa. Anda harus mengunduh (Download as .xlsx) file Google Sheets terlebih dahulu ke dalam komputer lokal. Setelah itu, perlakukan file tersebut seperti file Excel biasa dan gabungkan menggunakan salah satu metode di atas.

### 6. Apakah data asli di file sumber akan terhapus setelah digabungkan?
Tidak. Metode Power Query, VBA Macro, maupun *Copy-paste* hanya “membaca dan menyalin” data dari file sumber. File asli Anda akan tetap utuh dan aman di dalam foldernya.

## Kesimpulan

Mengetahui cara menggabungkan file Excel adalah salah satu keterampilan administrasi paling berharga yang bisa menghemat berjam-jam waktu Anda. Dari kelima metode yang telah kita bahas, **menggunakan Power Query adalah pilihan terbaik, teraman, dan paling profesional**.

Power Query tidak hanya menyatukan data, tetapi juga merapikannya secara otomatis. Sementara itu, untuk keperluan format CSV yang super cepat, Command Prompt (CMD) patut Anda andalkan. Pilih metode yang paling sesuai dengan skala data, tingkat pemahaman teknis Anda, dan versi Office yang digunakan.

**Siap untuk bekerja lebih cerdas, bukan lebih keras?** Jangan hanya membaca artikel ini. Segera buka laptop Anda, kumpulkan file Excel yang berserakan, dan praktikkan langkah-langkah Power Query atau VBA di atas sekarang juga!

Jika artikel panduan ini membantu mempermudah pekerjaan Anda, jangan ragu untuk membagikan tautan (*link*) artikel ini ke rekan kerja di grup kantor Anda agar mereka juga bisa menyelesaikan rekap data harian dengan lebih cepat. Selamat mencoba!
