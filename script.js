"use strict";

/* =========================================================
   நைனா பிறந்தநாள் இணையதளம்
   JavaScript
   ========================================================= */


/* =========================================================
   HTML ELEMENTS
   ========================================================= */

const loadingScreen = document.getElementById("loading-screen");
const welcomePage = document.getElementById("welcome-page");
const mainContent = document.getElementById("main-content");

const openBtn = document.getElementById("openBtn");
const bgMusic = document.getElementById("bgMusic");
const cakeBtn = document.getElementById("cakeBtn");


/* =========================================================
   ஆரம்ப நிலை
   ========================================================= */

if (mainContent) {
    mainContent.style.display = "none";
}


/* =========================================================
   LOADING SCREEN
   ========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (loadingScreen) {

            loadingScreen.style.opacity = "0";
            loadingScreen.style.transition = "1s";

            setTimeout(() => {
                loadingScreen.style.display = "none";
            }, 1000);

        }

    }, 3000);

});


/* =========================================================
   WEBSITE OPEN BUTTON
   ========================================================= */

if (openBtn) {

    openBtn.addEventListener("click", () => {

        if (welcomePage) {

            welcomePage.style.opacity = "0";
            welcomePage.style.transition = "1s";

            setTimeout(() => {

                welcomePage.style.display = "none";

                if (mainContent) {

                    mainContent.style.display = "block";
                    mainContent.classList.add("fade-in");

                }

            }, 1000);

        }

        startMusic();

    });

}


/* =========================================================
   இசையை தொடங்குதல்
   ========================================================= */

function startMusic() {

    if (!bgMusic) return;

    bgMusic.volume = 0.5;

    bgMusic.play().catch(() => {

        console.log("இசையை தானாக இயக்க முடியவில்லை.");

    });

}


/* =========================================================
   இசை மெதுவாக தொடங்குதல்
   ========================================================= */

function fadeMusic() {

    if (!bgMusic) return;

    let volume = 0;

    bgMusic.volume = 0;

    bgMusic.play().catch(() => {});

    const fade = setInterval(() => {

        if (volume < 0.5) {

            volume += 0.05;
            bgMusic.volume = volume;

        } else {

            clearInterval(fade);

        }

    }, 300);

}


/* =========================================================
   மென்மையான SCROLL
   ========================================================= */

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".stat-card, .feature-card, .wish-card, " +
    ".gallery-grid img, .message-box, .quote-box, " +
    ".naina-content-card, .long-message-card, " +
    ".promise-card, .birthday-letter, .wish-list-card"
);


function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("fade-in");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================================================
   BUTTON EFFECT
   ========================================================= */

const primaryButtons =
    document.querySelectorAll(".btn-primary");


primaryButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});


/* =========================================================
   பிறந்தநாள் கேக் BUTTON
   ========================================================= */

if (cakeBtn) {

    cakeBtn.addEventListener("click", () => {

        alert(
            "🎉 இனிய பிறந்தநாள் நல்வாழ்த்துக்கள் நைனா! ❤️"
        );

    });

}


/* =========================================================
   பின்னணி PARALLAX EFFECT
   ========================================================= */

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    const video =
        document.getElementById("bgVideo");

    if (video) {

        video.style.transform =
            `translateY(${scroll * 0.2}px)`;

    }

});


/* =========================================================
   BROWSER TITLE EFFECT
   ========================================================= */

const titles = [

    "🎂 இனிய பிறந்தநாள் நைனா ❤️",

    "❤️ எங்கள் அன்பு நைனா ❤️",

    "🌟 எங்கள் வாழ்க்கையின் ஹீரோ ❤️",

    "🙏 எல்லாவற்றிற்கும் நன்றி நைனா ❤️",

    "🎉 இனிய பிறந்தநாள் நல்வாழ்த்துக்கள் ❤️"

];

let titleIndex = 0;


setInterval(() => {

    document.title = titles[titleIndex];

    titleIndex++;

    if (titleIndex >= titles.length) {

        titleIndex = 0;

    }

}, 2500);


/* =========================================================
   மிதக்கும் இதயங்கள்
   ========================================================= */

const heartContainer =
    document.getElementById("hearts");


function createHeart() {

    if (!heartContainer) return;

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (8 + Math.random() * 6) + "s";

    heart.style.opacity =
        Math.random();

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 14000);

}


setInterval(createHeart, 450);


/* =========================================================
   பலூன்கள்
   ========================================================= */

const balloonContainer =
    document.getElementById("balloons");


const balloonColors = [

    "#ff4b91",
    "#ffcc70",
    "#6ee7ff",
    "#7c3aed",
    "#ffffff"

];


function createBalloon() {

    if (!balloonContainer) return;

    const balloon =
        document.createElement("div");

    balloon.className = "balloon";

    balloon.style.left =
        Math.random() * 100 + "%";

    balloon.style.background =
        balloonColors[
            Math.floor(
                Math.random() *
                balloonColors.length
            )
        ];

    balloon.style.animationDuration =
        (10 + Math.random() * 6) + "s";

    balloon.style.transform =
        `scale(${0.8 + Math.random()})`;

    balloonContainer.appendChild(balloon);

    setTimeout(() => {

        balloon.remove();

    }, 17000);

}


setInterval(createBalloon, 1200);


/* =========================================================
   பூக்கள்
   ========================================================= */

const flowerContainer =
    document.getElementById("flowers");


const flowers = [

    "🌸",
    "🌺",
    "🌼",
    "💮",
    "🌷"

];


function createFlower() {

    if (!flowerContainer) return;

    const flower =
        document.createElement("div");

    flower.className = "flower";

    flower.innerHTML =
        flowers[
            Math.floor(
                Math.random() *
                flowers.length
            )
        ];

    flower.style.left =
        Math.random() * 100 + "%";

    flower.style.fontSize =
        (20 + Math.random() * 25) + "px";

    flower.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    flowerContainer.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 17000);

}


setInterval(createFlower, 900);


/* =========================================================
   நட்சத்திரங்கள்
   ========================================================= */

const starsContainer =
    document.getElementById("stars");


function generateStars() {

    if (!starsContainer) return;

    for (let i = 0; i < 120; i++) {

        const star =
            document.createElement("span");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.animationDelay =
            Math.random() * 4 + "s";

        star.style.animationDuration =
            (1 + Math.random() * 3) + "s";

        starsContainer.appendChild(star);

    }

}


generateStars();


/* =========================================================
   பின்னணி EFFECT
   ========================================================= */

setInterval(() => {

    document.body.style.backgroundPosition =

        `${Math.random() * 20}px ` +
        `${Math.random() * 20}px`;

}, 4000);


/* =========================================================
   நைனாவின் புகைப்படம் மிதக்கும் EFFECT
   ========================================================= */

const heroImage =
    document.querySelector(".hero-image");


if (heroImage) {

    let angle = 0;

    setInterval(() => {

        angle += 0.01;

        heroImage.style.transform =
            `translateY(${Math.sin(angle) * 12}px)`;

    }, 20);

}


/* =========================================================
   புகைப்பட HOVER EFFECT
   ========================================================= */

document
    .querySelectorAll(".gallery-grid img")
    .forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.filter =
                "brightness(1.15)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.filter =
                "brightness(1)";

        });

    });


/* =========================================================
   FEATURE CARD EFFECT
   ========================================================= */

document
    .querySelectorAll(".feature-card")
    .forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-12px) scale(1.03)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0)";

        });

    });


/* =========================================================
   இதய வெடிப்பு EFFECT
   ========================================================= */

function heartBurst() {

    for (let i = 0; i < 12; i++) {

        setTimeout(
            createHeart,
            i * 120
        );

    }

}


setInterval(heartBurst, 12000);


/* =========================================================
   FIREWORKS
   ========================================================= */

const canvas =
    document.getElementById("fireworks");

const ctx =
    canvas
        ? canvas.getContext("2d")
        : null;


if (canvas && ctx) {

    function resizeCanvas() {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );


    const particles = [];


    class Particle {

        constructor(x, y) {

            this.x = x;
            this.y = y;

            this.radius =
                Math.random() * 3 + 2;

            this.speedX =
                (Math.random() - 0.5) * 8;

            this.speedY =
                (Math.random() - 0.5) * 8;

            this.alpha = 1;

            this.color =
                `hsl(${Math.random() * 360},100%,60%)`;

        }


        update() {

            this.x += this.speedX;

            this.y += this.speedY;

            this.speedY += 0.05;

            this.alpha -= 0.015;

        }


        draw() {

            ctx.save();

            ctx.globalAlpha =
                this.alpha;

            ctx.beginPath();

            ctx.arc(

                this.x,
                this.y,
                this.radius,
                0,
                Math.PI * 2

            );

            ctx.fillStyle =
                this.color;

            ctx.fill();

            ctx.restore();

        }

    }


    function createFirework(x, y) {

        for (let i = 0; i < 90; i++) {

            particles.push(
                new Particle(x, y)
            );

        }

    }


    function animateFireworks() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        for (
            let i = particles.length - 1;
            i >= 0;
            i--
        ) {

            particles[i].update();

            particles[i].draw();


            if (particles[i].alpha <= 0) {

                particles.splice(i, 1);

            }

        }


        requestAnimationFrame(
            animateFireworks
        );

    }


    animateFireworks();


    setInterval(() => {

        createFirework(

            Math.random() *
            canvas.width,

            Math.random() *
            canvas.height *
            0.6

        );

    }, 1800);

}


/* =========================================================
   கேக் கொண்டாட்டம்
   ========================================================= */

if (cakeBtn) {

    cakeBtn.addEventListener("click", () => {

        for (let i = 0; i < 5; i++) {

            setTimeout(() => {

                if (canvas) {

                    createFirework(

                        Math.random() *
                        canvas.width,

                        Math.random() *
                        canvas.height *
                        0.5

                    );

                }

            }, i * 400);

        }


        heartBurst();

        confetti();

        showCelebrationMessage();

    });

}


/* =========================================================
   கொண்டாட்ட செய்தி
   ========================================================= */

function showCelebrationMessage() {

    const box =
        document.createElement("div");


    box.innerHTML =
        "🎉 இனிய பிறந்தநாள் நைனா ❤️";


    box.style.position = "fixed";

    box.style.top = "50%";

    box.style.left = "50%";

    box.style.transform =
        "translate(-50%,-50%)";

    box.style.padding =
        "25px 45px";

    box.style.background =
        "rgba(0,0,0,.8)";

    box.style.color = "#fff";

    box.style.fontSize = "32px";

    box.style.borderRadius = "15px";

    box.style.zIndex = "99999";

    box.style.backdropFilter =
        "blur(15px)";


    document.body.appendChild(box);


    setTimeout(() => {

        box.remove();

    }, 3000);

}


/* =========================================================
   CONFETTI
   ========================================================= */

function confetti() {

    for (let i = 0; i < 120; i++) {

        const conf =
            document.createElement("div");


        conf.style.position = "fixed";

        conf.style.width = "8px";

        conf.style.height = "14px";

        conf.style.left =
            Math.random() * 100 + "%";

        conf.style.top = "-20px";

        conf.style.background =
            `hsl(${Math.random() * 360},100%,60%)`;

        conf.style.zIndex = "9999";

        conf.style.transition =
            "4s linear";


        document.body.appendChild(conf);


        setTimeout(() => {

            conf.style.top = "110%";

            conf.style.transform =
                `rotate(${Math.random() * 720}deg)`;

        }, 50);


        setTimeout(() => {

            conf.remove();

        }, 4200);

    }

}


/* =========================================================
   புகைப்பட LIGHTBOX
   ========================================================= */

document
    .querySelectorAll("#gallery img")
    .forEach(img => {

        img.addEventListener("click", () => {

            const overlay =
                document.createElement("div");


            overlay.style.position =
                "fixed";

            overlay.style.inset = "0";

            overlay.style.background =
                "rgba(0,0,0,.9)";

            overlay.style.display =
                "flex";

            overlay.style.justifyContent =
                "center";

            overlay.style.alignItems =
                "center";

            overlay.style.zIndex =
                "99999";


            const image =
                document.createElement("img");


            image.src = img.src;

            image.style.maxWidth =
                "90%";

            image.style.maxHeight =
                "90%";

            image.style.borderRadius =
                "20px";


            overlay.appendChild(image);


            overlay.onclick = () => {

                overlay.remove();

            };


            document.body.appendChild(
                overlay
            );

        });

    });


/* =========================================================
   தானாக கொண்டாட்டம்
   ========================================================= */

setTimeout(() => {

    confetti();

    heartBurst();

}, 6000);


/* =========================================================
   இசை கட்டுப்பாடு
   ========================================================= */

const music =
    document.getElementById("bgMusic");


function toggleMusic() {

    if (!music) return;


    if (music.paused) {

        music.play().catch(() => {});

    } else {

        music.pause();

    }

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "m" ||
            event.key === "M"
        ) {

            toggleMusic();

        }

    }
);


/* =========================================================
   SCROLL PROGRESS BAR
   ========================================================= */

const progress =
    document.createElement("div");


progress.style.position =
    "fixed";

progress.style.top = "0";

progress.style.left = "0";

progress.style.height = "5px";

progress.style.width = "0%";

progress.style.background =
    "linear-gradient(to right,#ff4b91,#ffcc70)";

progress.style.zIndex =
    "99999";


document.body.appendChild(
    progress
);


window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const current =
        window.pageYOffset;

    const width =
        total > 0
            ? (current / total) * 100
            : 0;

    progress.style.width =
        width + "%";

});


/* =========================================================
   CURSOR GLOW
   ========================================================= */

const cursor =
    document.createElement("div");


cursor.style.position =
    "fixed";

cursor.style.width = "20px";

cursor.style.height = "20px";

cursor.style.borderRadius =
    "50%";

cursor.style.pointerEvents =
    "none";

cursor.style.background =
    "rgba(255,75,145,.35)";

cursor.style.backdropFilter =
    "blur(4px)";

cursor.style.zIndex =
    "99999";


document.body.appendChild(
    cursor
);


document.addEventListener(
    "mousemove",
    event => {

        cursor.style.left =
            event.clientX - 10 + "px";

        cursor.style.top =
            event.clientY - 10 + "px";

    }
);


/* =========================================================
   BACK TO TOP BUTTON
   ========================================================= */

const topBtn =
    document.createElement("button");


topBtn.innerHTML = "⬆";


topBtn.setAttribute(
    "aria-label",
    "மேலே செல்லவும்"
);


topBtn.style.position =
    "fixed";

topBtn.style.bottom =
    "30px";

topBtn.style.right =
    "30px";

topBtn.style.width =
    "55px";

topBtn.style.height =
    "55px";

topBtn.style.borderRadius =
    "50%";

topBtn.style.border =
    "none";

topBtn.style.background =
    "#ff4b91";

topBtn.style.color =
    "#fff";

topBtn.style.fontSize =
    "22px";

topBtn.style.cursor =
    "pointer";

topBtn.style.display =
    "none";

topBtn.style.zIndex =
    "9999";


document.body.appendChild(
    topBtn
);


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";

        }

    }
);


topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================================
   DOUBLE CLICK HEART EFFECT
   ========================================================= */

document.addEventListener(
    "dblclick",
    event => {

        const heart =
            document.createElement("div");


        heart.innerHTML = "❤️";


        heart.style.position =
            "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.fontSize =
            "35px";

        heart.style.zIndex =
            "99999";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "1s ease";


        document.body.appendChild(
            heart
        );


        setTimeout(() => {

            heart.style.transform =
                "translateY(-80px) scale(1.5)";

            heart.style.opacity = "0";

        }, 50);


        setTimeout(() => {

            heart.remove();

        }, 1100);

    }
);


/* =========================================================
   CONSOLE MESSAGE
   ========================================================= */

console.log(
    "❤️ நைனாவிற்காக அன்புடன் உருவாக்கப்பட்ட பிறந்தநாள் இணையதளம் ❤️"
);

console.log(
    "🎂 இனிய பிறந்தநாள் நல்வாழ்த்துக்கள் நைனா! 🎂"
);


/* =========================================================
   SCRIPT முடிந்தது
   ========================================================= */
