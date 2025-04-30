// Halaman login
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username === "MieAyamEnak" && password === "mamahakutakut") {
        window.location.href = "game.html";      
      } else {
        alert("Username atau password salah!");
      }
    });
  }
  
  // Halaman game
  if (window.location.pathname.includes("game.html")) {
    const questions = [
      { q: "Kenapa ayam nyebrang jalan?", a: "karena mau nyebrang" },
      { q: "Apa bedanya gajah dan semangka?", a: "gak bisa dimakan" },
      { q: "Kenapa air mata asin?", a: "karena gak manis" }
    ];
  
    let current = 0;
    let score = 0;
    let timeLeft = 30;
  
    function startGame() {
      document.getElementById("question").innerText = questions[current].q;
      const timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Waktu: ${timeLeft}`;
        if (timeLeft <= 0) {
          clearInterval(timer);
          document.getElementById("result").innerText = `Waktu habis! Skor kamu: ${score}`;
          document.querySelector("button").disabled = true;
        }
      }, 1000);
    }
  
    window.submitAnswer = function () {
      const userAnswer = document.getElementById("answer").value.toLowerCase().trim();
      if (userAnswer === questions[current].a.toLowerCase()) {
        score++;
        alert("Benar!");
      } else {
        alert("Salah!");
      }
      current++;
      document.getElementById("answer").value = "";
      if (current < questions.length) {
        document.getElementById("question").innerText = questions[current].q;
      } else {
        document.getElementById("result").innerText = `Game selesai! Skor kamu: ${score}`;
        document.querySelector("button").disabled = true;
      }
    };
  
    window.onload = startGame;
  }
  