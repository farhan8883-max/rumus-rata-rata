// Array untuk menyimpan data mata pelajaran dan nilai
const judul = document.querySelector('h1');//key👇

        let nama = localStorage.getItem('nama');
        if (!nama) {
         //value👇
            nama = prompt('masukkan nama anda: ');
                             //key👇   //Value👇
            localStorage.setItem('nama', nama);
        }

        judul.innerHTML = `Your name: ${nama}`;

        //ganti nama  //mematkan link👇(e)
        const gantiNama = (e) => {
            nama = prompt('masukkan nama baru anda: ');
            localStorage.setItem('nama', nama);
            e.preventDefault( );
        }

        //Hapus nama
        const hapusNama = (e) => {
            localStorage.removeItem('nama');
            e.preventDefault( );
        }

const mataPelajaran = [];

// Fungsi untuk menambahkan mata pelajaran ke array
function tambahMataPelajaran() {
    const namaMataPelajaran = document.getElementById('namaMataPelajaran').value;
    const nilai = parseFloat(document.getElementById('nilai').value);

    // Validasi input
    if (namaMataPelajaran && !isNaN(nilai) && nilai >= 0 && nilai <= 100) {
        // Tambahkan mata pelajaran ke array
        mataPelajaran.push({ nama: namaMataPelajaran, nilai: nilai });

        // Reset input field
        document.getElementById('namaMataPelajaran').value = '';
        document.getElementById('nilai').value = '';

        // Tampilkan data yang telah ditambahkan
        tampilkanMataPelajaran();
    } else {
        alert("Masukkan nama mata pelajaran dan nilai yang valid (0-100).");
    }
}

// Fungsi untuk menampilkan daftar mata pelajaran
function tampilkanMataPelajaran() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h3>Daftar Mata Pelajaran:</h3>";

    mataPelajaran.forEach((mp, index) => {
        outputDiv.innerHTML += `<p>${index + 1}. ${mp.nama}: ${mp.nilai}</p>`;
    });
}

// Fungsi untuk menghitung rata-rata nilai
function hitungRataRata() {
    let totalNilai = 0;
    let jumlahMataPelajaran = 0;

    // Perulangan for untuk menghitung total nilai
    // perulanga for/while
    for (let i = 0; i < mataPelajaran.length; i++) {
        let nilai = mataPelajaran[i].nilai;

        // Cek tipe data nilai //
        if (typeof nilai === 'number') {
            totalNilai += nilai;  // Tambahkan ke total
            jumlahMataPelajaran++; // Hitung jumlah mata pelajaran
        }
    }

    // Hitung rata-rata
    // operator aritmatika
    let rataRata = jumlahMataPelajaran > 0 ? totalNilai / jumlahMataPelajaran : 0;
    //if else
    if (rataRata >= 90) {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>Total Nilai: ${totalNilai} Nilai A</p>
                            <p>Rata-Rata Nilai: ${rataRata.toFixed(2)} Nilai A</p>`;
      }
      else if (rataRata< 95 && rataRata>= 80) { // true
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>Total Nilai: ${totalNilai} Nilai B</p>
                                <p>Rata-Rata Nilai: ${rataRata.toFixed(2)} Nilai B</p>`;
      }
      else { // true
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML += `<p>Total Nilai: ${totalNilai} Nilai C</p>
                                <p>Rata-Rata Nilai: ${rataRata.toFixed(2)} Nilai C </p>`;
      }
    // Tampilkan hasil
    // const outputDiv = document.getElementById('output');
    // outputDiv.innerHTML += `<p>Total Nilai: ${totalNilai}</p>
    //                         <p>Rata-Rata Nilai: ${rataRata.toFixed(2)}</p>`;
}

// Fungsi untuk reset form dan output
function resetForm() {
    mataPelajaran.length = 0;  // Kosongkan array
    document.getElementById('output').innerHTML = ''; //inner html//
}

// Memeriksa apakah rata-rata valid
