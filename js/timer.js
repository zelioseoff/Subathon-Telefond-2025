// ----- CONFIGURATION DU SUBATHON -----
const startDate = new Date("2025-12-05T18:00:00"); // Démarre le 5 déc à 18h
const endDate = new Date("2025-12-07T23:59:59");   // Se termine le 7 déc à 23h59

const timerDisplay = document.getElementById("timer-display");

function updateTimer() {
  const now = new Date();

  if (now < startDate) {
    const diff = startDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    timerDisplay.textContent = `⏳ Début dans ${d}j ${h}h ${m}m ${s}s`;
  } 
  else if (now >= startDate && now <= endDate) {
    const diff = endDate - now;
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    timerDisplay.textContent = `🔥 Temps restant : ${d}j ${h}h ${m}m ${s}s`;
  } 
  else {
    timerDisplay.textContent = "🎉 Le Subathon est terminé ! Merci à tous 💖";
  }
}

setInterval(updateTimer, 1000);
updateTimer();
