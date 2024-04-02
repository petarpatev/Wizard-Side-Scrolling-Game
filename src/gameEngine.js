function start(state, elements) {
    elements.createWizard(state.player);
    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}

function gameAction(state, elements) {

    const wizardElement = document.querySelector('.wizard');

    if (state.keys.ArrowUp) {
        state.player.posY = Math.max(state.player.posY - state.game.speed, 0);
    }

    if (state.keys.ArrowDown) {
        state.player.posY = Math.min(state.player.posY + state.game.speed, elements.gameScreen.offsetHeight - state.player.height);
    }

    if (state.keys.ArrowLeft) {
        state.player.posX = Math.max(state.player.posX - state.game.speed, 0);
    }

    if (state.keys.ArrowRight) {
        state.player.posX = Math.min(state.player.posX + state.game.speed, elements.gameScreen.offsetWidth - state.player.width);
    }

    wizardElement.style.top = state.player.posY + 'px';
    wizardElement.style.left = state.player.posX + 'px';

    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}