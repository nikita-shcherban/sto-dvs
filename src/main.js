import lottie from 'lottie-web';

// Ждем, пока браузер полностью построит HTML-дерево (DOM)
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('lottie-container');

  // Проверяем, нашел ли JS наш блок в HTML
  if (container) {
    lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/RedCar.json', // Путь к файлу в папке public
    });
    console.log('Lottie успешно запущен!');
  } else {
    console.error('Ошибка: Блок #lottie-container не найден в HTML!');
  }
});
