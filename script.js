function setMood(mood) {
    const moodImage = document.getElementById('moodImage');
    const fireElement = document.querySelector('.fire');
    switch(mood) {
      case 'Terrible':
        moodImage.src = 'img/terrible.png';
        document.documentElement.style.setProperty('--flame-color', '#ef5a00');
        document.documentElement.style.setProperty('--flame-intensity', '1.5');
        break;
      case 'Bad':
        moodImage.src = 'img/bad.png';
        document.documentElement.style.setProperty('--flame-color', '#ef5a00');
        document.documentElement.style.setProperty('--flame-intensity', '1.2');
        break;
      case 'Normal':
        moodImage.src = 'img/normal.png';
        fireElement.style.display = 'none';
        break;
      case 'Good':
        moodImage.src = 'img/good.png';
        document.documentElement.style.setProperty('--flame-color', '#007bff');
        document.documentElement.style.setProperty('--flame-intensity', '1');
        break;
      case 'Excellent':
        moodImage.src = 'img/excellent.png';
        document.documentElement.style.setProperty('--flame-color', '#007bff');
        document.documentElement.style.setProperty('--flame-intensity', '1.5');
        break;
    }
  }
  
  setMood('Bad'); // Set the initial mood here
  