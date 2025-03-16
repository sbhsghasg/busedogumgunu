const cake = document.getElementById("cake");
const message = document.getElementById("message");
const song = document.getElementById("song");

// Kek üzerine 17 mum ekliyoruz
for (let i = 0; i < 17; i++) {
    let candle = document.createElement("div");
    candle.className = "candle";
    candle.style.left = `${20 + i * 15}px`;  // 17 mum eklemek için yer ayarlama

    let flame = document.createElement("div");
    flame.className = "flame";
    candle.appendChild(flame);
    candle.onclick = function () {
        flame.style.display = flame.style.display === "none" ? "block" : "none";
    };

    cake.appendChild(candle);
}

// Mumları üfleme fonksiyonu
function blowCandles() {
    document.querySelectorAll(".flame").forEach(f => f.style.display = "none");
    message.innerText = "Dilek tut Buse! 🎉";
    playBlowSound();  // Üfleme sesi
    spawnConfetti();   // Konfeti düşür
}

// Balonları ekliyoruz, sade şekilde
const balloonPositions = [
    { top: "50%", left: "40%" }, // Ortada
    { top: "50%", left: "50%" }, // Ortada
    { top: "50%", left: "60%" }  // Ortada
];

balloonPositions.forEach(position => {
    let balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.left = position.left;
    balloon.style.top = position.top;

    let string = document.createElement("div");
    string.className = "balloon-string";
    balloon.appendChild(string);
    document.body.appendChild(balloon);
});

// Arka planda yıldızlar ekliyoruz
for (let i = 0; i < 30; i++) {
    let star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    document.body.appendChild(star);
}

// Konfeti animasyonu ekliyoruz
function spawnConfetti() {
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        document.body.appendChild(confetti);
    }
}

// Üfleme sesi ekliyoruz
function playBlowSound() {
    const blowSound = new Audio('https://www.soundjay.com/button/beep-07.wav');
    blowSound.play();
}
