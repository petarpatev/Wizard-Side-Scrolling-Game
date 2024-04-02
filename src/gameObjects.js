function initElements() {
    const startScreen = document.querySelector('.game-start');
    const gameScreen = document.querySelector('.game-area');

    return {
        startScreen,
        gameScreen,
        createWizard() {
            const wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');

            wizardElement.style.width = state.player.width + 'px';
            wizardElement.style.height = state.player.height + 'px';

            wizardElement.style.top = state.player.posY + 'px';
            wizardElement.style.left = state.player.posX + 'px';

            elements.gameScreen.appendChild(wizardElement);
        }
    }
}