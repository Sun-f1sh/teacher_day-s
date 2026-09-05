/* ============================================================
   TEACHERS' DAY WEBSITE
   Personalized Teacher Messages
   Made with ❤️ by Nirvit
============================================================ */


/* ============================================================
   GET HTML ELEMENTS
============================================================ */

const openingScreen = document.getElementById("screen-opening");
const nameScreen = document.getElementById("screen-name");
const greetingScreen = document.getElementById("screen-greeting");

const beginBtn = document.getElementById("beginBtn");
const replayBtn = document.getElementById("replayBtn");

const nameForm = document.getElementById("nameForm");
const teacherNameInput = document.getElementById("teacherName");

const greetingName = document.getElementById("greetingName");
const greetingBody = document.getElementById("greetingBody");

const nameError = document.getElementById("nameError");

const petalField = document.getElementById("petalField");

const musicToggle = document.getElementById("musicToggle");


/* ============================================================
   PERSONALIZED TEACHER MESSAGES
============================================================ */

const teacherMessages = {
    /* --------------------------------------------------------
       NIRMALA MA'AM
    -------------------------------------------------------- */

    nirmala: `
        <p>
            Happy Teachers’ Day, Nirmala Ma’am! 🌷✨
        </p>

        <p>
            President of IIC, Dean of the Research & Development
            Cell, AI Club Coordinator, E-Cell Coordinator, NSS
            Faculty… and somehow still one of the most approachable
            and friendly people in college! 😄
        </p>

        <p>
            Despite being the HOD of the AI & ML Department and
            handling so many responsibilities, you’ve always made
            it incredibly easy for us to walk in, talk to you,
            share ideas, ask for advice, or sometimes just have a
            good conversation.
        </p>

        <p>
            What makes it even more special are those post-college-
            hour chats and all the times you’ve generously let us
            use your cabin for our committee work. That little
            space has somehow become one of our favourite places
            to plan, discuss, create, and occasionally panic before
            deadlines! 😂
        </p>

        <p>
            Thank you for trusting us, encouraging our ideas, and
            always making us feel heard. Your support has played a
            much bigger role in our college journey than you
            probably realise.
        </p>

        <p>
            Wishing you a very Happy Teachers’ Day, Ma’am! ❤️
        </p>

        <p>
            Thank you for being not just a mentor, but someone we
            can genuinely look up to and talk to. 🌸
        </p>
    `,
   
  nalini: `
    <p>
        Happy Teachers’ Day, Nalini Miss! ❤️🌷
    </p>

    <p>
        Some teachers teach you a subject, but some become a part
        of your life long after the classroom is gone. You are one
        of those teachers for me.
    </p>

    <p>
        You were my Hindi teacher in 10th, but what I remember most
        isn’t just the lessons from the books—it’s the care,
        guidance, and support you’ve continued to give me even till
        today. The fact that you still look out for me and ask
        about how I’m doing means more than I can probably put into
        words.
    </p>

    <p>
        10th may have ended years ago, but the connection and the
        lessons you gave me never really did. I’m genuinely
        grateful that I got to have a teacher like you at such an
        important time in my life.
    </p>

    <p>
        Thank you for always being there, Miss. You’ll always hold
        a very special place in my journey. ❤️
    </p>

    <p>
        Wishing you a very Happy Teachers’ Day! 🌸✨
    </p>
`,

  saumya: `
    <p>
        Happy Teachers’ Day, Saumya Ma’am! 🌷
    </p>

    <p>
        Thank you for being more than just a project mentor.
        Your guidance, patience, and constant encouragement have
        helped us not only improve our project, but also learn how
        to approach problems with more confidence and clarity.
    </p>

    <p>
        The way you pushed us to think, improve, and believe in our
        ideas is something we’ll genuinely remember. Thank you for
        always being there to guide us whenever we needed it. 💫
    </p>

    <p>
        Wishing you a very Happy Teachers’ Day, Ma’am! ❤️
    </p>
`,

  /* Rita Ma'am */
  rita: `
        <p>
            Thank you for always being there in my TSEC journey.
        </p>

        <p>
            From Sem 1, teaching BEEE and solving complex circuit
            questions, to Sem 2, where we designed logic circuits,
            and finally Sem 3, where we are studying about
            computers — each semester is a blast with you.
        </p>

        <p>
            Thank you always for giving me full marks in assignment
            submissions 😊
        </p>
    `,


  /* Aparna Ma'am */
  aparna: `
        <p>
            From teaching us complex numbers and the basics,
            to changing things up with pure integrals in the
            second semester, and now integrals again — it's like
            we're on a roller coaster ride! 😄
        </p>

        <p>
            Thank you for always teaching us each and every topic
            thoroughly and making sure we truly understand what
            we're learning.
        </p>
    `,
  vignesh: `
    <p>
        Happy Teachers’ Day, Vignesh Shah Sir! 🌟
    </p>

    <p>
        From the mind-bending world of Quantum Physics in Sem 1
        to the practical world of Measurement & Sensors in Sem 2,
        you’ve made physics more than just a subject. Your way of
        explaining concepts has made many of them genuinely
        memorable and changed the way we look at the science behind
        the technology around us.
    </p>

    <p>
        Thank you for making even the toughest concepts feel
        understandable and interesting. Your teaching will
        definitely stay with us beyond the classroom. 🙌
    </p>

    <p>
        Wishing you a very Happy Teachers’ Day, Sir! ✨
    </p>
`,

  /* Nilam Ma'am */
  nilam: `
        <p>
            Dear DLLE Coordinator Ma'am,
        </p>

        <p>
            DLLE was and is the first ever club/committee I've
            joined, and it has given me so many opportunities,
            experiences, and memories that I will always cherish.
        </p>

        <p>
            Working with you since my first semester has always
            been a wonderful experience. Thank you for always
            guiding me, supporting me, and giving me the opportunity
            to learn and grow through DLLE.
        </p>

        <p>
            I'm truly grateful for everything you've done for me
            and for making my journey with DLLE so memorable. ❤️
        </p>
    `
};


/* ============================================================
   DEFAULT MESSAGE
============================================================ */

const defaultMessage = `
    <p>
        Thank you for your patience, guidance, and the knowledge
        you've shared with us.
    </p>

    <p>
        The lessons you teach don't end when the class does —
        they stay with us long after.
    </p>
`;


/* ============================================================
   SWITCH BETWEEN SCREENS
============================================================ */

function showScreen(screenToShow) {

  const screens = [
    openingScreen,
    nameScreen,
    greetingScreen
  ];

  screens.forEach(screen => {

    if (screen === screenToShow) {

      screen.hidden = false;

      requestAnimationFrame(() => {
        screen.classList.add("is-active");
      });

    } else {

      screen.classList.remove("is-active");

      setTimeout(() => {

        if (!screen.classList.contains("is-active")) {
          screen.hidden = true;
        }

      }, 500);
    }
  });
}


/* ============================================================
   BEGIN BUTTON
============================================================ */

if (beginBtn) {

  beginBtn.addEventListener("click", () => {

    showScreen(nameScreen);

    setTimeout(() => {

      if (teacherNameInput) {
        teacherNameInput.focus();
      }

    }, 500);

  });

}


/* ============================================================
   NAME FORM
============================================================ */

if (nameForm) {

  nameForm.addEventListener("submit", event => {

    event.preventDefault();

    const enteredName = teacherNameInput.value.trim();


    /* --------------------------------------------------------
       VALIDATE NAME
    -------------------------------------------------------- */

    if (enteredName === "") {

      nameError.hidden = false;

      teacherNameInput.classList.add("input-error");

      teacherNameInput.focus();

      return;
    }


    /* --------------------------------------------------------
       REMOVE ERROR
    -------------------------------------------------------- */

    nameError.hidden = true;

    teacherNameInput.classList.remove("input-error");


    /* --------------------------------------------------------
       NORMALIZE NAME
    -------------------------------------------------------- */

    const normalizedName = enteredName
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();


    /* --------------------------------------------------------
       FIND PERSONALIZED MESSAGE
    -------------------------------------------------------- */

    let selectedMessage = defaultMessage;
     
    /* --------------------------------------------------------
   FIND PERSONALIZED MESSAGE
-------------------------------------------------------- */

let selectedMessage = defaultMessage;

if (
  normalizedName === "rita" ||
  normalizedName === "rita ma'am" ||
  normalizedName === "rita mam"
) {

  selectedMessage = teacherMessages.rita;

} else if (
  normalizedName === "aparna" ||
  normalizedName === "aparna ma'am" ||
  normalizedName === "aparna mam"
) {

  selectedMessage = teacherMessages.aparna;

} else if (
  normalizedName === "nilam" ||
  normalizedName === "nilam ma'am" ||
  normalizedName === "nilam mam"
) {

  selectedMessage = teacherMessages.nilam;

} else if (
  normalizedName === "vignesh" ||
  normalizedName === "vignesh shah" ||
  normalizedName === "vignesh sir" ||
  normalizedName === "vignesh shah sir"
) {

  selectedMessage = teacherMessages.vignesh;

} else if (
  normalizedName === "saumya" ||
  normalizedName === "saumya ma'am" ||
  normalizedName === "saumya mam" ||
  normalizedName === "dr. saumya" ||
  normalizedName === "dr saumya"
) {

  selectedMessage = teacherMessages.saumya;

} else if (
  normalizedName === "nalini" ||
  normalizedName === "nalini ma'am" ||
  normalizedName === "nalini mam" ||
  normalizedName === "nalini miss"
) {

  selectedMessage = teacherMessages.nalini;

} else if (
  normalizedName === "nirmala" ||
  normalizedName === "nirmala ma'am" ||
  normalizedName === "nirmala mam" ||
  normalizedName === "dr. nirmala" ||
  normalizedName === "dr nirmala"
) {

  selectedMessage = teacherMessages.nirmala;

}

    /* --------------------------------------------------------
       SHOW TEACHER NAME
    -------------------------------------------------------- */

    greetingName.textContent = enteredName;


    /* --------------------------------------------------------
       PUT MESSAGE INTO PAGE
    -------------------------------------------------------- */

    greetingBody.innerHTML = selectedMessage;


    /* --------------------------------------------------------
       SHOW GREETING SCREEN
    -------------------------------------------------------- */

    showScreen(greetingScreen);


    /* --------------------------------------------------------
       GREETING ANIMATION
    -------------------------------------------------------- */

    greetingScreen.classList.remove("greeting-visible");

    setTimeout(() => {

      greetingScreen.classList.add("greeting-visible");

    }, 100);

  });

}


/* ============================================================
   REPLAY BUTTON
============================================================ */

if (replayBtn) {

  replayBtn.addEventListener("click", () => {

    greetingScreen.classList.remove("greeting-visible");

    teacherNameInput.value = "";

    greetingName.textContent = "";

    greetingBody.innerHTML = "";

    nameError.hidden = true;

    teacherNameInput.classList.remove("input-error");

    showScreen(openingScreen);

  });

}


/* ============================================================
   ENTER KEY
============================================================ */

if (teacherNameInput) {

  teacherNameInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {

      event.preventDefault();

      nameForm.requestSubmit();

    }

  });

}


/* ============================================================
   FLOATING PETALS
============================================================ */

function createPetal() {

  if (!petalField) return;

  const petal = document.createElement("span");

  petal.classList.add("petal");


  const size = Math.random() * 8 + 6;

  const startPosition = Math.random() * 100;

  const duration = Math.random() * 8 + 7;

  const delay = Math.random() * 5;


  petal.style.width = `${size}px`;

  petal.style.height = `${size * 1.4}px`;

  petal.style.left = `${startPosition}%`;

  petal.style.animationDuration = `${duration}s`;

  petal.style.animationDelay = `${delay}s`;


  petalField.appendChild(petal);


  setTimeout(() => {

    petal.remove();

  }, (duration + delay) * 1000);

}


/* Create initial petals */

for (let i = 0; i < 12; i++) {

  createPetal();

}


/* Continue creating petals */

setInterval(createPetal, 900);


/* ============================================================
   BACKGROUND MUSIC / GENTLE TONE
============================================================ */

let audioContext = null;

let oscillator = null;

let gainNode = null;

let musicPlaying = false;


/* ============================================================
   START MUSIC
============================================================ */

function startMusic() {

  if (musicPlaying) return;


  try {

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;


    if (!AudioContext) {

      console.warn("Web Audio API is not supported.");

      return;

    }


    audioContext = new AudioContext();


    oscillator = audioContext.createOscillator();

    gainNode = audioContext.createGain();


    oscillator.type = "sine";

    oscillator.frequency.value = 261.63;


    gainNode.gain.setValueAtTime(
      0.0001,
      audioContext.currentTime
    );


    gainNode.gain.exponentialRampToValueAtTime(
      0.025,
      audioContext.currentTime + 1
    );


    oscillator.connect(gainNode);

    gainNode.connect(audioContext.destination);


    oscillator.start();


    musicPlaying = true;


    musicToggle.setAttribute(
      "aria-pressed",
      "true"
    );

  } catch (error) {

    console.error(
      "Could not start audio:",
      error
    );

  }

}


/* ============================================================
   STOP MUSIC
============================================================ */

function stopMusic() {

  if (!musicPlaying || !audioContext) {
    return;
  }


  gainNode.gain.exponentialRampToValueAtTime(
    0.0001,
    audioContext.currentTime + 0.5
  );


  setTimeout(() => {

    try {

      oscillator.stop();

    } catch (error) {

      console.log("Oscillator already stopped.");

    }


    audioContext.close();


    oscillator = null;

    gainNode = null;

    audioContext = null;

    musicPlaying = false;

  }, 600);


  musicToggle.setAttribute(
    "aria-pressed",
    "false"
  );

}


/* ============================================================
   MUSIC BUTTON
============================================================ */

if (musicToggle) {

  musicToggle.addEventListener("click", () => {

    if (musicPlaying) {

      stopMusic();

    } else {

      startMusic();

    }

  });

}


/* ============================================================
   INITIAL STATE
============================================================ */

openingScreen.hidden = false;

nameScreen.hidden = true;

greetingScreen.hidden = true;

openingScreen.classList.add("is-active");
