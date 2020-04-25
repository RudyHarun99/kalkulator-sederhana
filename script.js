var tambah = document.getElementById('tambah');
var kurang = document.getElementById('kurang');
var kali = document.getElementById('kali');
var bagi = document.getElementById('bagi');
var clear = document.getElementById('clear');

// ambil nilai
function ambilNilai() {
    var angka1 = document.getElementById('angka1').value;
    var angka2 = document.getElementById('angka2').value;
    objAngka = {
        num1: angka1,
        num2: angka2
    }
    return objAngka
}

// tampil hasil
function tampilHasil(hasil) {
    var hasilOperasi = document.getElementById('hasil');
    hasilOperasi.innerText = hasil;
}

// operasi penambahan
function operasiTambah() {
    var nilai = ambilNilai();
    var hasil = parseInt(nilai.num1) + parseInt(nilai.num2);
    tampilHasil(hasil);
}

// operasi pngurangan
function operasiKurang() {
    var nilai = ambilNilai();
    var hasil = parseInt(nilai.num1) - parseInt(nilai.num2);
    tampilHasil(hasil);
}

// operasi pengalian
function operasiKali() {
    var nilai = ambilNilai();
    var hasil = parseInt(nilai.num1) * parseInt(nilai.num2);
    tampilHasil(hasil);
}

// operasi pembagian
function operasiBagi() {
    var nilai = ambilNilai();
    var hasil = parseInt(nilai.num1) / parseInt(nilai.num2);
    tampilHasil(hasil);
}

// bersihkan hasil dan input
function bersihkan() {
    var hasil = '';
    document.getElementById('angka1').value = '';
    document.getElementById('angka2').value = '';
    tampilHasil(hasil);
}

tambah.addEventListener('click', operasiTambah);
kurang.addEventListener('click', operasiKurang);
kali.addEventListener('click', operasiKali);
bagi.addEventListener('click', operasiBagi);
clear.addEventListener('click', bersihkan);