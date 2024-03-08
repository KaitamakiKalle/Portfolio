// script.js
document.addEventListener('DOMContentLoaded', function () {
  const codeBlock = document.getElementById('codeBlock');
  const dropbtn = document.querySelector('.dropbtn');

  // Toggle code block visibility when button is clicked
  dropbtn.addEventListener('click', function () {
    codeBlock.style.display =
      codeBlock.style.display === 'block' ? 'none' : 'block';
  });
});
