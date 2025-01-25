document.addEventListener('DOMContentLoaded', function() {
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const content = document.querySelector('main');
    let fontSize = 16; // Tamanho de fonte inicial em pixels
  
    increaseFontButton.addEventListener('click', function() {
      fontSize += 2;
      content.style.fontSize = fontSize + 'px';
    });
  
    decreaseFontButton.addEventListener('click', function() {
      fontSize -= 2;
      content.style.fontSize = fontSize + 'px';
    });
  });