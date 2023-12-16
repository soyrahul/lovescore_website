function calculateLoveScore() {
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
  
    // Simple algorithm for generating a random love score (just for demonstration purposes)
    var loveScore = Math.floor(Math.random() * 101);
  
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `${name1} and ${name2}'s Love Score is: ${loveScore}%`;
  }
  