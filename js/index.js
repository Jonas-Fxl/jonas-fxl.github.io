// Zeigt nur Links bis zum aktuellen Datum an
const today = new Date().getDate();
for (let i = 1; i <= 24; i++) {
    const dayLink = document.querySelector(`#day${i} a`);
    if (i <= today) {
        dayLink.style.display = "block"; // Zeigt den Link an, wenn das Datum erreicht ist
    }
}
