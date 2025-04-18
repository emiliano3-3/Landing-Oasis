
// Confetti Animation (simplified loop)
setInterval(() => {
    const confetti = document.createElement('div');
    confetti.textContent = '🎊';
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = 0;
    confetti.style.fontSize = '20px';
    confetti.style.animation = 'fall 3s linear';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
}, 400);

const style = document.createElement('style');
style.textContent = `
@keyframes fall {
    to { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style);
