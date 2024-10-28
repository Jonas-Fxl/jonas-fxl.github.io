document.addEventListener("DOMContentLoaded", () => {
    const days = document.querySelectorAll(".day");
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close");
  
    // Load stories into calendar days
    days.forEach(day => {
      const dayNumber = day.dataset.day;
  
      // Check if the day can be unlocked
      const today = new Date();
      if (today.getDate() >= dayNumber && today.getMonth() === 11) {
        day.classList.add("unlocked");
      } else {
        day.classList.add("unlocked");
      }
    });
  
    // Close modal
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal on outside click
    window.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
  