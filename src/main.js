let elements = initElements();
let state = initState();

elements.startScreen.addEventListener('click', (e) => {
    elements.startScreen.classList.add('hide');
    elements.gameScreen.classList.remove('hide');
})
