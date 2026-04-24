let isPlaying = false;

/* ❤️ hearts */
function createHeart() {
  const h = document.createElement("div");
  h.className = "heart";
  h.innerText = "❤";

  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = (12 + Math.random() * 18) + "px";
  h.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.getElementById("hearts-container").appendChild(h);
  setTimeout(() => h.remove(), 8000);
}
setInterval(createHeart, 300);

/* music */
function toggleMusic() {
  const m = document.getElementById("bgMusic");
  const b = document.getElementById("musicToggle");

  if (isPlaying) {
    m.pause();
    b.innerText = "🔇";
  } else {
    m.play();
    b.innerText = "🔊";
  }
  isPlaying = !isPlaying;
}

/* intro */
function openLetter() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");

  const m = document.getElementById("bgMusic");
  m.play();
  isPlaying = true;
  document.getElementById("musicToggle").innerText = "🔊";

  startHeroAnimation();
}

/* hero */
function startHeroAnimation() {
  const d = document.getElementById("dateBox");
  const a = document.getElementById("annivBox");
  const b = document.getElementById("nextBtn");

  d.classList.remove("hidden");
  d.classList.add("fade-in");

  setTimeout(() => {
    a.classList.remove("hidden");
    a.classList.add("fade-in");
  }, 2500);

  setTimeout(() => {
    b.classList.remove("hidden");
    b.classList.add("pop");
  }, 4500);
}

/* navigation */
function goToLetter() {
  document.getElementById("heroSection").style.display = "none";
  document.getElementById("letterSection").classList.remove("hidden");
  startLetter();
}

function goToFinal() {
  document.getElementById("letterSection").style.display = "none";

  const f = document.getElementById("finalSection");
  const t = document.getElementById("proposalText");
  const btns = document.getElementById("buttons");

  f.classList.remove("hidden");

  setTimeout(() => t.classList.remove("hidden"), 500);
  setTimeout(() => btns.classList.remove("hidden"), 1500);
}

/* letter */
const lines = [
  "Hey Srija ❤️",
  "",
  "Happy 1st anniversary to us.",
  "",
  "One year with you… and honestly,",
  "it still feels special every day.",
  "",
  "You’ve made everything better.",
  "",
  "I’m really lucky to have you.",
  "",
  "I love you ❤️"
];

let i = 0, j = 0;

function startLetter() { type(); }

function type() {
  if (i >= lines.length) {
    document.getElementById("letterBtn").classList.remove("hidden");
    return;
  }

  const l = lines[i];
  if (j < l.length) {
    document.getElementById("letter").innerHTML += l[j++];
    setTimeout(type, 40);
  } else {
    document.getElementById("letter").innerHTML += "\n";
    i++; j = 0;
    setTimeout(type, 500);
  }
}

/* proposal */
function yesClicked() {
  document.getElementById("buttons").style.display = "none";
  document.getElementById("finalLove").classList.remove("hidden");
  confetti();
}

function confetti() {
  for (let k = 0; k < 100; k++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* no button */
document.addEventListener("mousemove", (e) => {
  const b = document.getElementById("noBtn");
  if (!b) return;

  const r = b.getBoundingClientRect();
  const d = Math.hypot(e.clientX - r.left, e.clientY - r.top);

  if (d < 100) {
    b.style.transform = `translate(${(Math.random()-0.5)*400}px, ${(Math.random()-0.5)*400}px)`;
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id === "noBtn") {
    e.target.innerText = "Yes ❤️";
    setTimeout(yesClicked, 300);
  }
});