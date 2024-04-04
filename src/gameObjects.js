function initElements() {
    const startScreen = document.querySelector('.game-start');
    const gameScreen = document.querySelector('.game-area');
    const scoreScreen = document.querySelector('.game-score');
    const gameOverScreen = document.querySelector('.game-over');

    return {
        startScreen,
        gameScreen,
        scoreScreen,
        gameOverScreen,
        createWizard(wizardState) {
            const wizardElement = document.createElement('div');
            wizardElement.classList.add('wizard');

            wizardElement.style.width = wizardState.width + 'px';
            wizardElement.style.height = wizardState.height + 'px';

            wizardElement.style.top = wizardState.posY + 'px';
            wizardElement.style.left = wizardState.posX + 'px';

            this.wizardElement = wizardElement;

            elements.gameScreen.appendChild(wizardElement);
        }
    }
}