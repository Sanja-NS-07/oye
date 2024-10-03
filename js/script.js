document.querySelector('.start-btn').addEventListener('click', () => {
    window.scrollTo({
      top: document.querySelector('.message').offsetTop,
      behavior: 'smooth'
    });
  });
  
  document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const answer1 = document.getElementById('question1').value;
    const answer2 = document.getElementById('question2').value;
  
    if (answer1.toLowerCase() === 'correct place' && answer2.toLowerCase() === 'correct moment') {
      alert('You nailed it!');
    } else {
      alert('Close, but there’s always more to love about our journey!');
    }
  });
  