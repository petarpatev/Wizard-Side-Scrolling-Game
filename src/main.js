let elements = initElements();
let state = initState();
let controllers = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

elements.startScreen.addEventListener('click', onGameStart);

window.addEventListener('keydown', (e) => {
    if (controllers.includes(e.code)) {
        state.keys[e.code] = true;
    }
});

window.addEventListener('keyup', (e) => {
    if (controllers.includes(e.code)) {
        state.keys[e.code] = false;
    }
});


function onGameStart() {
    elements.startScreen.classList.add('hide');
    elements.gameScreen.classList.remove('hide');

    //start game
    start(state, elements);

    //create wizard
    const wizard = elements.createWizard();
}