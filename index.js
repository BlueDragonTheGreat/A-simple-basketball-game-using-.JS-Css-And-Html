// script.js
document.addEventListener('DOMContentLoaded', () => {
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const ball = document.getElementById('ball');
    const hoop1 = document.getElementById('hoop1');
    const hoop2 = document.getElementById('hoop2');

    let player1Score = 0;
    let player2Score = 0;

    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowLeft':
                movePlayer(player1, -10, 0);
                break;
            case 'ArrowRight':
                movePlayer(player1, 10, 0);
                break;
            case 'ArrowUp':
                movePlayer(player1, 0, -10);
                break;
            case 'ArrowDown':
                movePlayer(player1, 0, 10);
                break;
            case 'a':
                movePlayer(player2, -10, 0);
                break;
            case 'd':
                movePlayer(player2, 10, 0);
                break;
            case 'w':
                movePlayer(player2, 0, -10);
                break;
            case 's':
                movePlayer(player2, 0, 10);
                break;
        }
    });

    function movePlayer(player, dx, dy) {
        const rect = player.getBoundingClientRect();
        player.style.left = rect.left + dx + 'px';
        player.style.top = rect.top + dy + 'px';
    }

    function checkScore() {
        if (isBallInHoop(ball, hoop1)) {
            player1Score++;
            resetBall();
        } else if (isBallInHoop(ball, hoop2)) {
            player2Score++;
            resetBall();
        }
    }

    function isBallInHoop(ball, hoop) {
        const ballRect = ball.getBoundingClientRect();
        const hoopRect = hoop.getBoundingClientRect();
        return (
            ballRect.left >= hoopRect.left &&
            ballRect.right <= hoopRect.right &&
            ballRect.top >= hoopRect.top &&
            ballRect.bottom <= hoopRect.bottom
        );
    }

    function resetBall() {
        ball.style.left = '50%';
        ball.style.top = '50%';
        ball.style.transform = 'translate(-50%, -50%)';
    }

    setInterval(checkScore, 100);
});
