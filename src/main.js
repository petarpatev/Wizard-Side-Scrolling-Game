let elements = initElements();
let state = initState();

elements.startScreen.addEventListener('click', onGameStart);

function onGameStart() {
    elements.startScreen.classList.add('hide');
    elements.gameScreen.classList.remove('hide');

    //start game
    start(state, elements);

    //create wizard
    const wizard = elements.createWizard();
}