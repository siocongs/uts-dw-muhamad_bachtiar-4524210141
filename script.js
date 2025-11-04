function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}
// Ambil elemen input
const inputNamaPria = document.querySelector("#nama-pengantin-pria");
const inputNamaWanita = document.querySelector("#nama-pengantin-wanita");
const inputFoto = document.querySelector("#gambar-pengantin");
const inputDeskripsi = document.querySelector("#deskripsi");
const inputTanggal = document.querySelector("#tanggal");
const inputPenerima = document.querySelector("#penerima-undangan");

// Ambil elemen preview
const previewNamaPria = document.querySelector("#preview-nama-pengantin-pria");
const previewNamaWanita = document.querySelector("#preview-nama-pengantin-wanita");
const previewFoto = document.querySelector("#preview-gambar");
const previewDeskripsi = document.querySelector("#preview-deskripsi");
const previewTanggal = document.querySelector("#preview-tanggal-pernikahan");
const previewPenerima = document.querySelector("#preview-penerima-undangan");

// Preview updater
function updatePreview() {
  previewNamaPria.textContent = inputNamaPria.value || "Nama Pengantin Pria";
  previewNamaWanita.textContent = inputNamaWanita.value || "Nama Pengantin Wanita";
  previewDeskripsi.textContent = inputDeskripsi.value || "Deskripsi undangan akan muncul di sini.";
  previewTanggal.textContent = inputTanggal.value || "Tanggal Pernikahan";
  previewPenerima.textContent = inputPenerima.value || "Nama Penerima Undangan";
}

// Preview Foto
inputFoto.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    previewFoto.src = URL.createObjectURL(file);
  }
});

[inputNamaPria, inputNamaWanita, inputDeskripsi, inputTanggal, inputPenerima].forEach((el) => {
  el.addEventListener("input", updatePreview);
});