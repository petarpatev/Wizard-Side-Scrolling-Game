function start(state, elements) {
    elements.createWizard(state.player);
    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}

function gameAction(state, elements, timestamp) {

    wizardMovement(state, elements, timestamp);
    fireballMovement(state, elements);
    cloudCreation(state, elements, timestamp);
    cloudMovement(state, elements, timestamp);


    //score logic
    state.game.score++;
    elements.scoreScreen.textContent = `${state.game.score} pts`;

    window.requestAnimationFrame(gameAction.bind(null, state, elements));
}

function wizardMovement(state, elements, timestamp) {

    const wizardElement = document.querySelector('.wizard');

    //apply gravitation
    let isInAir = (state.player.posY + state.player.height) < elements.gameScreen.offsetHeight;
    if (isInAir) {
        state.player.posY += state.game.speed;
    }

    //fireballs
    if (state.keys.Space && timestamp - state.player.lastSpawnFireball > state.game.fireballSpawnInterval) {
        wizardElement.classList.add('wizard-fire');
        fireballCreation(state, elements);
        state.player.lastSpawnFireball = timestamp;
    } else {
        wizardElement.classList.remove('wizard-fire');
    }

    //wizard movement logic
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
}

function cloudCreation(state, elements, timestamp) {
    if (timestamp - state.game.lastSpawnCloud > state.game.cloudSpawnInterval + 20000 * Math.random()) {
        const cloudElement = document.createElement('div');
        cloudElement.classList.add('cloud');

        cloudElement.posX = elements.gameScreen.offsetWidth - 200;
        cloudElement.style.left = cloudElement.posX + 'px';
        cloudElement.style.top = (elements.gameScreen.offsetHeight - 200) * Math.random() + 'px';

        elements.gameScreen.appendChild(cloudElement);

        state.game.lastSpawnCloud = timestamp;
    }
}

function cloudMovement(state, elements, timestamp) {
    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.posX -= state.game.speed;
        cloud.style.left = cloud.posX + 'px';
        if (cloud.posX <= 0) {
            cloud.remove();
        }
    })
}

function fireballCreation(state, elements) {
    const fireballElement = document.createElement('div');
    fireballElement.classList.add('fireball');

    fireballElement.posX = state.player.posX + state.player.width;

    fireballElement.style.top = state.player.posY + state.player.height / 3 + 'px';
    fireballElement.style.left = fireballElement.posX + 'px';

    elements.gameScreen.appendChild(fireballElement);
}

function fireballMovement(state, elements) {
    let fireballs = document.querySelectorAll('.fireball');
    fireballs.forEach(fireball => {
        if (fireball.posX + fireball.offsetWidth <= elements.gameScreen.offsetWidth) {
            fireball.posX += state.game.speed * state.game.fireballSpeedMultiplier;
            fireball.style.left = fireball.posX + 'px';
        } else {
            fireball.remove();
        }
    })

}