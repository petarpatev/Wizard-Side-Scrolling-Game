function start(state, elements) {
    elements.createWizard(state.player);
    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}

function gameAction(state, elements) {

    const wizardElement = document.querySelector('.wizard');

    //apply gravitation
    let isInAir = (state.player.posY + state.player.height) < elements.gameScreen.offsetHeight;
    if (isInAir) {
        state.player.posY += state.game.speed;
    }

    //movement logic
    if (state.keys.ArrowUp) {
        state.player.posY = Math.max(state.player.posY - state.game.speed * state.game.speedMultiplier, 0);
    }

    if (state.keys.ArrowDown) {
        state.player.posY = Math.min(state.player.posY + state.game.speed * state.game.speedMultiplier, elements.gameScreen.offsetHeight - state.player.height);
    }

    if (state.keys.ArrowLeft) {
        state.player.posX = Math.max(state.player.posX - state.game.speed * state.game.speedMultiplier, 0);
    }

    if (state.keys.ArrowRight) {
        state.player.posX = Math.min(state.player.posX + state.game.speed * state.game.speedMultiplier, elements.gameScreen.offsetWidth - state.player.width);
    }

    //apply new coordinates to wizard element
    wizardElement.style.top = state.player.posY + 'px';
    wizardElement.style.left = state.player.posX + 'px';

    //score logic
    state.game.score++;
    elements.scoreScreen.textContent = `${state.game.score} pts`;

    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}