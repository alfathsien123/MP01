function timeDetailed() {
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

  // 0 - 59
  const seconds = time.getSeconds();

  const hari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu   ",
  ];

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

  return {
    hari: hari[day],
    tanggal: date,
    bulan: bulan[month],
    tahun: year,
    jam: hours,
    menit: minutes,
    detik: seconds,
  };
}

const timeNow = timeDetailed();
let { hari, tanggal, bulan, tahun, jam, menit, detik } = timeNow;
if (menit < 10) {
  menit = `0${menit}`;
}
if (detik < 10) {
  detik = `0${detik}`;
}
console.log(`Hari ini hari ${hari}, ${tanggal} ${bulan} ${tahun}`);
console.log(`Pukul ${jam}:${menit}:${detik}`);
