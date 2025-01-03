const title = document.querySelector('.title');
const text = 'gua ada sesuatu,\nmo liat ga ni?'.split(''); // Menggunakan \\n untuk menandai baris baru

for (let index = 0; index < text.length; index++) {
  if (text[index] === '\n') {
    title.innerHTML += '<br>'; // Tambahkan elemen <br> untuk memisahkan baris
  } else if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`; // Tutup tag <span> dengan benar
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'></span>`; // Tambahkan spasi yang lebih besar
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});
