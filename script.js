const scriptURL =
    "https://script.google.com/macros/s/AKfycbzCg_rfrvqJwTnBWQ9fKhCC52ByKZWqT-E9TOVW-diVkvm-xOUHwLG360OulvVN8qj56A/exec";

  const cabangLokasi = {
    "BEKASI":{lat:-6.277346,lon:106.933951,radius:150},
    "BOGOR - Yasmin":{lat:-6.5645506,lon:106.7748755,radius:150},
    "BOGOR - Kantor":{lat:-6.560408,lon:106.8131229,radius:150},
    "DEMAK":{lat:-6.8894941,lon:110.6447851,radius:150},
    "JEPARA":{lat:-6.7338924,lon:110.7229574,radius:150},
    "SMRG - Bougenville":{lat:-7.0465869,lon:110.4653751,radius:150},
    "SMRG - Pendurungan":{lat:-7.0112536,lon:110.4651645,radius:150},
    "SMRG - Ruko Semawis":{lat:-7.0220646,lon:110.4630692,radius:150},
    "TASIKMALAYA":{lat:-7.3431557,lon:108.2180272,radius:150},
    "SBY-Perum IKIP":{lat:-7.332909,lon:112.7850645,radius:150},
    "SBY - Wiyung":{lat:-7.3125965,lon:112.673306,radius:150},
    "SBY-Tandes":{lat:-7.2629692,lon:112.6618263,radius:150},
    "SBY-KGM":{lat:-7.2387052,lon:112.7721875,radius:150},
    "SBY-Bendul":{lat:-7.3089252,lon:112.7474308,radius:150},
    "SBY - Wiguna":{lat:-7.3358711,lon:112.8021607,radius:150},
    "SBY - Manukan":{lat:-7.2614663,lon:112.6705062,radius:150},
    "BKL - Telang":{lat:-7.125634,lon:112.7184356,radius:150},
    "BKL - Mlajeh":{lat:-7.0481213,lon:112.7263524,radius:150},
    "SDA - Puri":{lat:-7.394242,lon:112.7330506,radius:150},
    "BOJONEGORO":{lat:-7.1520133,lon:111.8762335,radius:150},
    "BOJONEGORO - Pattimura":{lat:-7.1628039,lon:111.8720759,radius:150},
    "KDR - Mrican":{lat:-7.7760995,lon:111.9981194,radius:150},
    "BKL - Teuku Umar":{lat:-7.0408165,lon:112.7381819,radius:150},
    "TBN-Delima":{lat:-6.885049,lon:112.0379831,radius:150}
    //Tambahkan cabang lainnya sesuai kebutuhan
    };

    //Fungsi reusable untuk populate dropdown
function populateDropdown(id,options){
  const select = document.getElementById(id);
  if (!select) return;

  //Kosongkan dulu isi dropdown
  select.innerHTML = "";

  //Isi ulang dengan opsi baru
  select.innerHTML = '<option value="">Pilih</option>' + options.map(opt =>`<option>${opt}</option>`).join('');

  //Hindari autofill aneh
  select.setAttribute("autocomplete","off");
}
  const guruPerCabang = {
    "SBY-Tandes":["Ittaqy Azizah","Sayyidah Amirah","Ulva Muzayanah",
      "Siti Khotijah","Ririen Vibriandhiny Astiti"],
    "SBY-Bendul":["Yantis Takhiyah","Ummy Kultsum Rahmatullahi Alaina",
      "Mas Hikmatul Azimah"],
    "SBY-Perum IKIP":["Alya Rosyada","Eva Nur Diana","Zannah","Ufiya Zahrotul Aisy",
      "Ririn Agustin","Jihan Shofia Hayati","Rizka Salsabila","Maisaroh Rahmawati",
      "Arini Fauzayati","Aprinda Diningrum","Afriza Ayu Cholidia","Ainaul ilmiyah",
      "Nabila Ridhatullah","Imamatul Hidayah","Salwa Maulidah","Roudatul Jannah",
      "Masula Shihah Afiyah","Allam Abdullah"],
    "SBY-KGM":["Widyati Noer Faizah"],
    "SBY - Wiyung":["Aisyah Salsabila"],
    "SBY - Wiguna":["Sri Kartika"],
    "BOJONEGORO":["Kartika Ratna Pratiwi, S.KM.","Musahab. S.HI",
      "Fina Faikotur Rohmah","Lailik Rahma Safira, S. Gz","Nur Habibur Rohmah, SH",
      "Fitriana Nur Rohmatin,S.Pd","Yeni Evi Septiana","Tri Widya Yanti, S. Pd",
      "Ummu Fadhilatus Sania","Tiara Maharani Putri","Nadzirotul Fauziah",
      "Mohammad Kholis, S.Pd","Siti Nabalatul Ulumah, S.E","Vita Novia Indhiani, S.Pd",
      "Nur Lutfiya, S.Pd","Kurnia Putri Rukmanasari, S.Sos","Moch. Arifuddin, S.Pd.",
      "Humai rosyaida","Achmad soleh, S.Pd.","Fitria Fabrianti,. S.E",
      "Siti Lailatul Izzah","Maulida Nor Aulia","Faricha Muabbad",
      "Moch. Luqmanul Hakim, S.H.","Ranti Safitri, S.E","Dwi Titi Setiorini",
      "Safina Al Mukarromah","Aisyah","Syafa Tirsyah Rahma Insani",
      "Hidayat Ichwanuddin Hasan"],
    "BOJONEGORO - Pattimura":["Kartika Ratna Pratiwi, S.KM.","Aisyah","Siti Nabalatul Ulumah, S.E"],
    "TBN-Delima": ["Defi Fitayanti","Disa Nurpita Sari","Sholikhatul Nia Indrayani","Lilis Handayani","Farida","Agus","Ajeng Ragita Ayu Asmara","Fitria Agustin Widyastuti","Zumrotul Mutmainnah","Surwantika Dwi Jayanti","Dwi Nur Anisa","Umar Zuhdi","Achmad Fatoni","Laila Mufida","Filawati","Istiqomah","Maulana Rohman","Qurotul Ainiah","Pandu Tribuana Surono Putera","Arijal Haq Assa Syidada","Dewi Munjiyat"],
    "SDA - Puri": ["Aizzah Alfiyah"],
    "BKL - Mlajeh": ["Mufliha","Jazila Haura Annafila"],
    "BKL - Telang": ["Noer Azizah"]
  };

    const dataDropdown = {
      cabang:["BEKASI","BOGOR - Yasmin","BOGOR - Kantor","DEMAK","JEPARA","SMRG - Bougenville","SMRG - Pendurungan","SMRG - Ruko Semawis","TANGSEL","TASIKMALAYA","SBY-Perum IKIP","SBY - Wiyung","SBY-Tandes","SBY-KGM","SBY-Bendul","SBY - Wiguna","SBY - Manukan","BKL - Telang","BKL - Mlajeh","GRESIK","SDA - Puri","BOJONEGORO","BOJONEGORO - Pattimura","KDR - Mrican","MADIUN - Taman Asri","TBN-Delima"],
      rombel:["Senin, Rabu, Jumat","Senin, Rabu, Sabtu","Selasa, Kamis, Sabtu","Selasa, Kamis, Jumat", "Senin, Selasa, Rabu, Kamis, Jumat"],
      kegiatan:["Ujian Tahfidz","Munaqosah","Koordinasi Rutin","Tahsin Klasikal"]};

function renderRadioWaktu(containerId, name) {
  const waktuList = ["Siang", "Sore", "Malam"];
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = waktuList.map(w =>
    `<label><input type="radio" name="${name}" value="${w}"> ${w}</label>`
  ).join(" ");
}

window.addEventListener("DOMContentLoaded", () => {
  // Tambahkan translate="no" ke semua elemen input, select, textarea, dst
  const elements = document.querySelectorAll('input, select, textarea, form, radio, button, label');
  elements.forEach(el => {
    el.setAttribute('translate', 'no');
  });

  // Lanjutkan logika dropdown & lokasi
  populateDropdown("ijinCabang", dataDropdown.cabang);
  populateDropdown("badalCabang", dataDropdown.cabang);
  populateDropdown("absenCabang", dataDropdown.cabang);
  populateDropdown("kegiatanCabang", dataDropdown.cabang);
  populateDropdown("adminCabang", dataDropdown.cabang);

  populateDropdown("badalRombel", dataDropdown.rombel);
  populateDropdown("absenRombel", dataDropdown.rombel);

  renderRadioWaktu("absenRadioWaktu", "absenWaktu");
  renderRadioWaktu("badalRadioWaktu", "badalWaktu");

  populateDropdown("kegiatan", dataDropdown.kegiatan);

  document.getElementById("badalCabang").addEventListener("change", () => {
    const cabang = document.getElementById("badalCabang").value;
    const guruList = guruPerCabang[cabang] || [];
    populateDropdown("badalGuru", guruList);
    getLocation("Badal");
  });

  document.getElementById("absenCabang").addEventListener("change", () => {
    getLocation("Absen");
  });

  document.getElementById("kegiatanCabang").addEventListener("change", () => {
    getLocation("Kegiatan");
  });

  document.getElementById("adminCabang").addEventListener("change", () => {
    getLocation("Admin");
  });
});

    
function updateLokasiStatus(view,msg){
  const statusId={
    Absen:"lokasiStatusAbsen",
    Badal:"lokasiStatusBadal",
    Kegiatan:"lokasiStatusKegiatan",
    Admin:"lokasiStatusAdmin"
  }[view];
  const statusEl = document.getElementById(statusId);
  if (statusEl) statusEl.innerText= msg;}

function showLoading(button,text="⏳ Mengirim..."){
  button.disabled = true;
  button.innerText =text;
  button.classList.add("loading");}
  
function hideLoading(button,text="Submit"){
  button.disabled = false,
  button.innerText = text,
  button.classList.remove("loading")}

function navigateTo(viewId){
  document.querySelectorAll(".view").forEach(view=>view.classList.add("hidden"));
  document.getElementById(viewId).classList.remove("hidden");
  

  if (viewId === "absenView") {
    const nama = localStorage.getItem("nama") || "";
    document.getElementById("absenNama").value = nama;
    getLocation("Absen");
  }
  if (viewId === "ijinView") {
    const nama = localStorage.getItem("nama") || "";
    document.getElementById("ijinNama").value = nama;
  }
  if (viewId === "badalView") {
    const nama = localStorage.getItem("nama") || "";
    document.getElementById("badalNama").value = nama;
    getLocation("Badal"); // Tambahan ini perlu
  }
  if (viewId === "kegiatanView") {
    const nama = localStorage.getItem("nama") || "";
    document.getElementById("kegiatanNama").value = nama;
    getLocation("Kegiatan"); // Tambahan ini perlu
  }
  if (viewId === "adminView") {
    const nama = localStorage.getItem("nama") || "";
    document.getElementById("adminNama").value = nama;
    getLocation("Admin"); // Tambahan ini perlu
    startLiveClock(); // Mulai jam hidup
  }
}

function startLiveClock() {
  const waktuInput = document.getElementById("adminWaktu");
  if (!waktuInput) return;

  setInterval(() => {
    const now = new Date();
    const jam = now.getHours().toString().padStart(2, '0');
    const menit = now.getMinutes().toString().padStart(2, '0');
    const detik = now.getSeconds().toString().padStart(2, '0');
    waktuInput.value = `${jam}:${menit}:${detik}`;
  }, 1000);
}


function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({ action: "login", username, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem("nama", data.nama);
        localStorage.setItem("role", data.role); // Simpan role
        
        // Navigasi ke menu utama
        navigateTo("menuView");

        // Tampilkan menu sesuai role
        if (data.role === "guru") {
          document.getElementById("menuGuru").classList.remove("hidden");
        } else if (data.role === "admin") {
          document.getElementById("menuAdmin").classList.remove("hidden");
        } else if (data.role === "admin+guru") {
          document.getElementById("menuGuru").classList.remove("hidden");
          document.getElementById("menuAdmin").classList.remove("hidden");
        }
      } else {
        document.getElementById("loginMsg").innerText = "❌ Login gagal.";
      }
    })
    .catch(() => {
      document.getElementById("loginMsg").innerText = "❌ Koneksi gagal.";
    });
}

function logout(){
  localStorage.clear();
  navigateTo("loginView");}

function updateLokasiStatus(view,msg){
  const statusEl = 
  document.getElementById(`lokasiStatus${view}`);
  if (statusEl) statusEl.innerText = msg;}

function getLocation(view="Absen"){
  const cabangIdMap = {
    Absen:"absenCabang",
    Badal:"badalCabang",
    Kegiatan:"kegiatanCabang",
    Admin:"adminCabang"
  }
  const cabangId = cabangIdMap[view];
  const cabangEl = 
  document.getElementById(cabangId);
  const cabang = cabangEl?.value;
  const lokasi = cabangLokasi[cabang];
  
  if(!cabang||!lokasi){
    updateLokasiStatus(view,"❌ Cabang belum dipilih atau tidak dikenali.");
    console.warn("Cabang tidak valid:",cabang);
    return;}
  updateLokasiStatus(view,"📡 Mengambil lokasi...");
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos=>{
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        document.getElementById("latitude").value=lat;
        document.getElementById("longitude").value=lon;
        const jarak = calculateDistance(lokasi.lat,lokasi.lon,lat,lon);
        document.getElementById("jarak").value=jarak.toFixed(2);
        updateLokasiStatus(view,`📍 Lokasi diperbarui (${Math.round(jarak)} m dari cabang ${cabang})`)
      },
      err =>{
        updateLokasiStatus(view,"❌ Tidak dapat mengakses lokasi.")});
      } else {
        updateLokasiStatus(view,"❌ Browser tidak mendukung GPS.")}
      }

function calculateDistance(lat1,lon1,lat2,lon2){
  const R=6371e3;
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function isWaktuValid(waktu){
  const now = new Date();
  const totalMenit = 60*now.getHours()+now.getMinutes();
   if (waktu === "Siang") return totalMenit >= 780 && totalMenit <= 900;
   if (waktu === "Sore") return totalMenit >= 901 && totalMenit <= 1050;
   if (waktu === "Malam") return totalMenit >= 1051 && totalMenit <= 1200;
  return false;
}

function submitIjin(){
  console.log("📤 Submit Ijin dimulai");
  const nama = localStorage.getItem("nama");
  const cabang = 
  document.getElementById("ijinCabang").value;
  const mulai = 
  document.getElementById("ijinTanggalMulai").value;
  const akhir = 
  document.getElementById("ijinTanggalAkhir").value;
  const alasan = 
  document.getElementById("ijinAlasan").value.trim();
  const konfirmasi =
  document.getElementById("ijinKonfirmasi").value;
  const msg = document.getElementById("ijinMsg");
  const btn = document.querySelector("#ijinView button.btn-blue");
  msg.innerText = "";
  showLoading(btn);

  if (!cabang || !mulai || !alasan || konfirmasi !== "Sudah") {
    msg.innerText = "❌ Lengkapi semua isian dan konfirmasi harus 'Sudah'.";
    hideLoading(btn, "Kirim Ijin");
    return;
  }

  const now = new Date();
  const todayStr = now.toISOString().split("T")[0];
  if (mulai === todayStr && now.getHours() >= 12) {
    msg.innerText = "❌ Ijin hari ini harus diajukan sebelum jam 12 siang.";
    hideLoading(btn, "Kirim Ijin");
    return;
  }

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({
      action: "ijin",
      nama, cabang,
      tanggalMulai: mulai,
      tanggalAkhir: akhir || mulai,
      alasan, konfirmasi
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("✅ Ijin response:", data);
    if (data.success) {
      navigateTo("successView");
      document.getElementById("successMessage").innerText = "✅ Ijin Berhasil!";
    } else {
      msg.innerText = "❌ Gagal mengirim ijin.";
    }
  })
  .catch(err => {
    msg.innerText = "❌ Koneksi gagal saat kirim ijin.";
    console.error("❌ Ijin fetch error:", err);
  })
  .finally(() => {
    hideLoading(btn, "Kirim Ijin");
  });
}

function submitBadal() {
  console.log("📤 Submit Badal dimulai");
  const nama = localStorage.getItem("nama");
  const cabang = document.getElementById("badalCabang").value;
  const guru = document.getElementById("badalGuru").value;
  const rombel = document.getElementById("badalRombel").value;
  const waktu = document.querySelector('input[name="badalWaktu"]:checked')?.value || "";
  const lat = parseFloat(document.getElementById("latitude").value);
  const lon = parseFloat(document.getElementById("longitude").value);
  const jarak = parseFloat(document.getElementById("jarak").value);
  const msg = document.getElementById("badalMsg");
  const btn = document.querySelector("#badalView button.btn-orange");

  msg.innerText = "";
  showLoading(btn);

  if (!cabang || !guru || !rombel || !waktu) {
    msg.innerText = "❌ Lengkapi semua isian badal.";
    hideLoading(btn, "Kirim Badal");
    return;
  }

  if (!isWaktuValid(waktu)) {
    msg.innerText = "❌ Waktu badal hanya dapat dilakukan pada jam yang sesuai.";
    hideLoading(btn, "Kirim Badal");
    return;
  }

  if (isNaN(lat) || isNaN(lon)) {
    msg.innerText = "❌ Menunggu lokasi. Mohon aktifkan GPS dan tunggu beberapa detik.";
    hideLoading(btn, "Kirim Badal");
    return;
  }

  if (!cabangLokasi[cabang]) {
    msg.innerText = "❌ Lokasi cabang tidak ditemukan.";
    hideLoading(btn, "Kirim Badal");
    return;
  }

  if (jarak > cabangLokasi[cabang].radius) {
    msg.innerText = `❌ Lokasi terlalu jauh (${Math.round(jarak)} m).`;
    hideLoading(btn, "Kirim Badal");
    return;
  }

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({
      action: "badal",
      nama, 
      cabang, 
      guru, 
      rombel, 
      waktu,
      latitude: lat,
      longitude: lon,
      jarak: jarak.toFixed(2)
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("✅ Badal response:", data);
    if (data.success) {
      navigateTo("successView");
      document.getElementById("successMessage").innerText = "✅ Badal Berhasil!";
    } else {
      msg.innerText = "❌ Gagal mengirim badal.";
    }
  })
  .catch(err => {
    msg.innerText = "❌ Koneksi gagal saat kirim badal.";
    console.error("❌ Badal fetch error:", err);
  })
  .finally(() => {
    hideLoading(btn, "Kirim Badal");
  });
}

function submitKegiatan() {
  console.log("📤 Submit Kegiatan dimulai");
  const nama = localStorage.getItem("nama");
  const cabang = document.getElementById("kegiatanCabang").value;
  const kegiatan = document.getElementById("kegiatan").value;
  const catatan = document.getElementById("kegiatanCatatan").value;
  const lat = parseFloat(document.getElementById("latitude").value);
  const lon = parseFloat(document.getElementById("longitude").value);
  const jarak = parseFloat(document.getElementById("jarak").value);
  const msg = document.getElementById("kegiatanMsg");
  const btn = document.querySelector("#kegiatanView button.btn-orange");

  msg.innerText = "";
  showLoading(btn);

  if (!cabang || !kegiatan || !catatan) {
    msg.innerText = "❌ Lengkapi semua isian kegiatan.";
    hideLoading(btn, "Kirim Kegiatan");
    return;
  }


  if (isNaN(lat) || isNaN(lon)) {
    msg.innerText = "❌ Menunggu lokasi. Mohon aktifkan GPS dan tunggu beberapa detik.";
    hideLoading(btn, "Kirim Kegiatan");
    return;
  }

  if (!cabangLokasi[cabang]) {
    msg.innerText = "❌ Lokasi cabang tidak ditemukan.";
    hideLoading(btn, "Kirim Kegiatan");
    return;
  }

  if (jarak > cabangLokasi[cabang].radius) {
    msg.innerText = `❌ Lokasi terlalu jauh (${Math.round(jarak)} m).`;
    hideLoading(btn, "Kirim Kegiatan");
    return;
  }

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({
      action: "kegiatan",
      nama, cabang, kegiatan, catatan
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log("✅ Kegiatan response:", data);
    if (data.success) {
      navigateTo("successView");
      document.getElementById("successMessage").innerText = "✅ Kegiatan Berhasil!";
    } else {
      msg.innerText = "❌ Gagal mengirim kegiatan.";
    }
  })
  .catch(err => {
    msg.innerText = "❌ Koneksi gagal saat kirim kegiatan.";
    console.error("❌ Kegiatan fetch error:", err);
  })
  .finally(() => {
    hideLoading(btn, "Kirim Kegiatan");
  });
}

function submitAbsen() {
  const cabang = document.getElementById("absenCabang").value;
  const nama = document.getElementById("absenNama").value;
    console.log("Nama yang dikirim:", nama);
  const rombel = document.getElementById("absenRombel").value;
  const waktu = document.querySelector('input[name="absenWaktu"]:checked')?.value || "";
  const lat = parseFloat(document.getElementById("latitude").value);
  const lon = parseFloat(document.getElementById("longitude").value);
  const jarak = parseFloat(document.getElementById("jarak").value);
  const msg = document.getElementById("absenMsg");
  const btn = document.querySelector("#absenView button.btn-green");

  if (!waktu || !rombel || !cabang) {
    msg.innerText = "❌ Lengkapi semua isian absen.";
    return;
  }

  if (!isWaktuValid(waktu)) {
    msg.innerText = "❌ Mohon absen di waktu yang sesuai.";
    hideLoading(btn, "Submit Absen");
    return;
  }

  if (isNaN(lat) || isNaN(lon)) {
    msg.innerText = "❌ Menunggu lokasi. Mohon aktifkan GPS dan tunggu beberapa detik.";
    return;
  }

  if (!cabangLokasi[cabang]) {
    msg.innerText = "❌ Lokasi cabang tidak ditemukan.";
    return;
  }

  if (jarak > cabangLokasi[cabang].radius) {
    msg.innerText = `❌ Lokasi terlalu jauh (${Math.round(jarak)} m).`;
    return;
  }

  showLoading(btn, "Submit Absen");

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({
      action: "cekAbsen",
      nama,
      rombel,
      waktu
    })
  })
    .then(res => res.json())
    .then(result => {
      if (result.already) {
        msg.innerText = "⚠️ Anda sudah absen hari ini untuk rombel dan waktu ini.";
      } else {
        return fetch(scriptURL, {
          method: "POST",
          body: new URLSearchParams({
            action: "absen",
            nama,
            cabang,
            rombel,
            waktu,
            latitude: lat,
            longitude: lon,
            jarak: jarak.toFixed(2)
          })
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              navigateTo("successView");
              document.getElementById("successMessage").innerText = "✅ Absen Berhasil!";
            } else {
              msg.innerText = "❌ Gagal absen.";
            }
          });
      }
    })
    .catch(err => {
      msg.innerText = "❌ Gagal mengirim data.";
      console.error("Submit error:", err);
    })
    .finally(() => {
      hideLoading(btn, "Submit Absen");
    });
}

function submitAdmin() {
  const cabang = document.getElementById("adminCabang").value;
  const nama = document.getElementById("adminNama").value;
  const waktu = document.getElementById("adminWaktu").value;
  const lat = parseFloat(document.getElementById("latitude").value);
  const lon = parseFloat(document.getElementById("longitude").value);
  const jarak = parseFloat(document.getElementById("jarak").value);
  const msg = document.getElementById("adminMsg");
  const btn = document.querySelector("#adminView button.btn-green");

  if (!cabang) {
    msg.innerText = "❌ Lengkapi semua isian absen admin.";
    return;
  }

  if (isNaN(lat) || isNaN(lon)) {
    msg.innerText = "❌ Menunggu lokasi. Mohon aktifkan GPS dan tunggu beberapa detik.";
    return;
  }

  if (!cabangLokasi[cabang]) {
    msg.innerText = "❌ Lokasi cabang tidak ditemukan.";
    return;
  }

  if (jarak > cabangLokasi[cabang].radius) {
    msg.innerText = `❌ Lokasi terlalu jauh (${Math.round(jarak)} m).`;
    return;
  }

  showLoading(btn, "Submit Admin");

  fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({
      action: "cekAdmin",
      nama
    })
  })
    .then(res => res.json())
    .then(result => {
  if (result.already) {
    msg.innerText = "⚠️ Anda sudah absen hari ini.";
    return; // Stop di sini
  }

  return fetch(scriptURL, {
    method: "POST",
    body: new URLSearchParams({
      action: "admin",
      nama,
      cabang,
      waktu,
      latitude: lat,
      longitude: lon,
      jarak: jarak.toFixed(2)
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      navigateTo("successView");
      document.getElementById("successMessage").innerText = "✅ Absen Admin Berhasil!";
    } else {
      msg.innerText = "❌ Gagal absen admin.";
    }
  });
    })
    .catch(err => {
      msg.innerText = "❌ Gagal mengirim data.";
      console.error("Submit error:", err);
    })
    .finally(() => {
      hideLoading(btn, "Submit Absen");
    });
}
