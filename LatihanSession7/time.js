const time = new Date();

const year = time.getFullYear();

/// 0 - 11 (Jan - Des)
const month = time.getMonth();

// 1 - 31
const date = time.getDate();

// 0 - 6 (sun - sat)
const day = time.getDay();

// 0 - 23
const hours = time.getHours();

// 0 - 59
const minutes = time.getMinutes();

// jawaban
const bulan = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

console.log(`Hari ini bulan ke-${month + 1} : ${bulan[month]}, tahun ${year}`);
