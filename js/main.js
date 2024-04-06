const toggleSwitch = document.getElementById('toggleSwitch');
const container = document.querySelector('.container');
const searchbar = document.querySelector('.search-bar');

toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        container.classList.add('dark-mode');
    } else {
        container.classList.remove('dark-mode');
    }
});
