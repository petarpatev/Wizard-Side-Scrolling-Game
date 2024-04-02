function start(state, elements) {
    elements.createWizard(state.player);
    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}

function gameAction(state, elements) {

    if (state.keys.ArrowUp && state.player.posY > 0) {
        state.player.posY -= state.game.speed;
    }

    if (state.keys.ArrowDown && state.player.posY + state.player.height < elements.gameScreen.offsetHeight) {
        console.log(elements.wizardElement);
        console.log(elements.gameScreen.offsetHeight)
        state.player.posY += state.game.speed;
    }

    if (state.keys.ArrowLeft && state.player.posX > 0) {
        state.player.posX -= state.game.speed;
    }

    if (state.keys.ArrowRight && state.player.posX + state.player.width < elements.gameScreen.offsetWidth) {
        state.player.posX += state.game.speed;
    }

    elements.wizardElement.style.top = state.player.posY + 'px';
    elements.wizardElement.style.left = state.player.posX + 'px';

    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}