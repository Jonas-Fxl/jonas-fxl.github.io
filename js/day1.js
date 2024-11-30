document.getElementById('weiterlesen-btn').addEventListener('click', function() {
    document.getElementById('weiterlesen-content').classList.toggle('hidden');
    if (this.innerText === 'Beweise anzeigen') {
        this.innerText = 'Beweise schließen';
    } else {
        this.innerText = 'Beweise anzeigen';
    }
});
