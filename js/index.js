function openDoor(day) {
    const house = document.querySelector(`.village .house:nth-child(${day})`);
    if (!house.classList.contains("open")) {
        house.classList.add("open");
        alert(`Hinweis für den ${day}. Dezember: Dein heutiger Hinweis ist...`);
    }
}