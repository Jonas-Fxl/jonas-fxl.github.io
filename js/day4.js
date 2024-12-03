document.getElementById('unlock-button').addEventListener('click', function() {
    const userCombination = document.getElementById('combination').value;
    const correctCombination = '1508';

    if (userCombination === correctCombination) {
        document.getElementById('box-content').classList.remove('hidden');
        document.getElementById('fourth-victim').classList.remove('hidden');
        document.getElementById('the-all-big').classList.remove('hidden');
        document.getElementById('unlock-button').style.display = 'none';
        document.getElementById('combination').style.display = 'none';
    } else {
        alert('Falsche Kombination. Versuche es erneut!');
    }
});