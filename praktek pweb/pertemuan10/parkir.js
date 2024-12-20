// Menghitung biaya parkir
function hitungBiayaParkir() {
    let jamMasuk = document.getElementById('jam_masuk').value
    let jamKeluar = document.getElementById('jam_keluar').value   
    let lamaParkir = jamKeluar - jamMasuk
    console.log(lamaParkir, jamKeluar, jamMasuk)

    // Biaya 2 jam pertama
    let hitungBiayaParkir = 2000
    lamaParkir -= 2

    // Hitung sisa jam
    if (lamaParkir > 0) {
        hitungBiayaParkir = biayaParkir + (lamaParkir * 1000)
    }

    console.log(hitungBiayaParkir)
    // Tampilkan hasil ke dalam HTML
    document.getElementById('biaya_parkir').innerHTML = hitungBiayaParkir
}