function initElements() {
    const startScreen = document.querySelector('.game-start');
    const gameScreen = document.querySelector('.game-area');

    return {
        startScreen,
        gameScreen,
        createWizard(wizardState) {
            const wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');

            wizardElement.style.width = wizardState.width + 'px';
            wizardElement.style.height = wizardState.height + 'px';

            wizardElement.style.top = wizardState.posY + 'px';
            wizardElement.style.left = wizardState.posX + 'px';

            elements.gameScreen.appendChild(wizardElement);
        }
    }
}