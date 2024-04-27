
  
  function setMood(mood) {
    const moodImage = document.getElementById('moodImage');
    const moodText = document.getElementById('moodText');
    const fireElement = document.querySelector('.fire');
    switch(mood) {
      case 'Terrible':
        moodImage.src = 'img/terrible.png';
        moodText.textContent = 'TERRIBLE';
        document.documentElement.style.setProperty('--flame-color', '#ef5a00');
        document.documentElement.style.setProperty('--flame-intensity', '1.5');
        break;
      case 'Bad':
        moodImage.src = 'img/bad.png';
        moodText.textContent = 'BAD';
        document.documentElement.style.setProperty('--flame-color', '#ef5a00');
        document.documentElement.style.setProperty('--flame-intensity', '1.2');
        break;
      case 'Normal':
        moodImage.src = 'img/normal.png';
        moodText.textContent = 'NORMAL';
        fireElement.style.display = 'none';
        break;
      case 'Good':
        moodImage.src = 'img/good.png';
        moodText.textContent = 'GOOD';
        document.documentElement.style.setProperty('--flame-color', '#007bff');
        document.documentElement.style.setProperty('--flame-intensity', '1');
        break;
      case 'Excellent':
        moodImage.src = 'img/excelent.png';
        moodText.textContent = 'EXCELLENT';
        document.documentElement.style.setProperty('--flame-color', '#007bff');
        document.documentElement.style.setProperty('--flame-intensity', '1.5');
        break;
    }
  }
  
  setMood('Excellent'); // Set the initial mood here