// Small interactive features used by the portfolio website.

const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const backTopButton = document.getElementById("backTop");

// Switch between the light and dark colour themes.
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

// Open and close the navigation menu on smaller screens.
menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");

    const menuIsOpen = mainNav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", menuIsOpen);
    menuToggle.setAttribute(
        "aria-label",
        menuIsOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close the mobile menu after a navigation link is selected.
mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Preview a profile picture selected from the device.
const photoInput = document.getElementById("photoInput");
const profilePhoto = document.getElementById("profilePhoto");

photoInput.addEventListener("change", function (event) {
    const selectedPhoto = event.target.files[0];

    if (selectedPhoto) {
        profilePhoto.src = URL.createObjectURL(selectedPhoto);
    }
});

// Preview a selected PDF CV and update the download link.
const cvInput = document.getElementById("cvInput");
const cvViewer = document.getElementById("cvViewer");
const cvPreviewBox = document.getElementById("cvPreviewBox");
const noCVText = document.getElementById("noCVText");
const downloadCV = document.getElementById("downloadCV");

cvInput.addEventListener("change", function (event) {
    const selectedCV = event.target.files[0];

    if (selectedCV && selectedCV.type === "application/pdf") {
        const cvUrl = URL.createObjectURL(selectedCV);

        cvViewer.src = cvUrl;
        downloadCV.href = cvUrl;
        downloadCV.download = selectedCV.name;
        cvPreviewBox.classList.add("has-file");
        noCVText.hidden = true;
    } else if (selectedCV) {
        alert("Please choose a PDF file.");
    }
});

// Copy a mobile money number when its button is clicked.
document.querySelectorAll(".copy-number").forEach(function (button) {
    button.addEventListener("click", async function () {
        const number = button.dataset.number;

        try {
            await navigator.clipboard.writeText(number);
            alert("Number copied: " + number);
        } catch (error) {
            alert("Please copy this number manually: " + number);
        }
    });
});

// Open WhatsApp with the payment information entered in the form.
const paymentForm = document.getElementById("paymentForm");

paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const payerName = document.getElementById("payerName").value.trim();
    const payerAmount = document.getElementById("payerAmount").value.trim();
    const payerMethod = document.getElementById("payerMethod").value;

    const message = "Hi Ezekiel, my name is " + payerName +
        ". I have paid " + payerAmount + " using " + payerMethod +
        ". Please confirm my payment.";

    const whatsappUrl = "https://wa.me/231888026429?text=" +
        encodeURIComponent(message);

    window.open(whatsappUrl, "_blank", "noopener");
});

// Open WhatsApp with the visitor's contact message.
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const visitorName = document.getElementById("contactName").value.trim();
    const visitorEmail = document.getElementById("contactEmail").value.trim();
    const visitorMessage = document.getElementById("contactMessage").value.trim();

    const message = "Hello Ezekiel, my name is " + visitorName +
        ". My email is " + visitorEmail + ". " + visitorMessage;

    const whatsappUrl = "https://wa.me/231888026429?text=" +
        encodeURIComponent(message);

    window.open(whatsappUrl, "_blank", "noopener");
});

// Show the back-to-top button after the visitor scrolls down.
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backTopButton.style.display = "flex";
    } else {
        backTopButton.style.display = "none";
    }
});

backTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const words = [
    "Software Engineer",
    "Web Developer",
    "UI/UX Enthusiast",
    "Technology Innovator"
];

let wordIndex = 0;

function changeText() {
    document.querySelector("#typing").textContent =
        words[wordIndex];

    wordIndex = (wordIndex + 1) % words.length;
}

setInterval(changeText, 2000)
