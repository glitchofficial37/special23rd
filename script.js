function openLetter() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");
  document.getElementById("bgMusic").play();
  startHeroAnimation();
}

/* ❤️ HEARTS */
function createHeart() {
  const container = document.getElementById("hearts-container");
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.innerText = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  container.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 300);

/* HERO */
function startHeroAnimation() {
  const dateBox = document.getElementById("dateBox");
  const annivBox = document.getElementById("annivBox");
  const btn = document.getElementById("nextBtn");

  dateBox.classList.remove("hidden");
  dateBox.classList.add("fade-in");

  setTimeout(() => {
    annivBox.classList.remove("hidden");
    annivBox.classList.add("fade-in");
  }, 2500);

  setTimeout(() => {
    btn.classList.remove("hidden");
    btn.classList.add("pop");
  }, 4500);
}

/* LETTER */
function goToLetter() {
  document.getElementById("heroSection").style.display = "none";
  document.getElementById("letterSection").classList.remove("hidden");
  startLetter();
}

/* FINAL */
function goToFinal() {
  document.getElementById("letterSection").style.display = "none";

  const final = document.getElementById("finalSection");
  const text = document.getElementById("proposalText");
  const buttons = document.getElementById("buttons");

  final.classList.remove("hidden");

  setTimeout(() => {
    text.classList.remove("hidden");
    text.classList.add("fade-in");
  }, 500);

  setTimeout(() => {
    buttons.classList.remove("hidden");
    buttons.classList.add("pop");
  }, 1800);
}

/* LETTER CONTENT */
const lines = [
  "Hey Srija ❤️",
  "",
  "Happy 1st anniversary to us.",
  "",
  "One year with you… and honestly,",
  "it still feels special every single day.",
  "",
  "From random talks to small moments,",
  "everything with you just feels right.",
  "",
  "You’ve made my life better in ways",
  "I didn’t even expect.",
  "",
  "I really appreciate you,",
  "for being there and for being you.",
  "",
  "I’m really lucky to have you.",
  "",
  "I love you ❤️"
];

let lineIndex = 0;
let charIndex = 0;

function startLetter() {
  typeLine();
}

function typeLine() {
  if (lineIndex >= lines.length) {
    const btn = document.getElementById("letterBtn");
    btn.classList.remove("hidden");
    btn.classList.add("pop");
    return;
  }

  const letter = document.getElementById("letter");
  const currentLine = lines[lineIndex];

  if (charIndex < currentLine.length) {
    letter.innerHTML += currentLine.charAt(charIndex);
    charIndex++;
    setTimeout(typeLine, 45);
  } else {
    letter.innerHTML += "\n";
    lineIndex++;
    charIndex = 0;
    setTimeout(typeLine, 700);
  }
}

/* CONFETTI */
function createConfetti() {
  const colors = ["#ff4d6d", "#ffd166", "#06d6a0", "#118ab2", "#ef476f"];

  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.classList.add("confetti");

    c.style.left = Math.random() * 100 + "vw";
    c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

/* YES */
function yesClicked() {
  document.getElementById("buttons").style.display = "none";

  const msg = document.getElementById("finalLove");
  msg.classList.remove("hidden");
  msg.classList.add("fade-in");

  createConfetti();
}

/* NO BUTTON */
document.addEventListener("mousemove", (e) => {
  const btn = document.getElementById("noBtn");
  if (!btn) return;

  const rect = btn.getBoundingClientRect();
  const distance = Math.hypot(
    e.clientX - (rect.left + rect.width / 2),
    e.clientY - (rect.top + rect.height / 2)
  );

  if (distance < 120) {
    const x = (Math.random() - 0.5) * 500;
    const y = (Math.random() - 0.5) * 500;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  }
});

/* NO CLICK */
document.addEventListener("click", (e) => {
  if (e.target.id === "noBtn") {
    e.target.innerText = "Yes ❤️";
    e.target.style.transform = "none";

    setTimeout(() => {
      yesClicked();
    }, 300);
  }
});