const { expect } = require('chai');

// Example snake movement logic for testing
function moveSnake(snake, direction) {
    const head = { ...snake[0] };
    switch (direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }
    return [head, ...snake.slice(0, -1)];
}

describe('Snake Movement Logic', () => {
    it('should move snake up', () => {
        const snake = [{ x: 2, y: 2 }, { x: 2, y: 3 }];
        const newSnake = moveSnake(snake, 'up');
        expect(newSnake[0]).to.deep.equal({ x: 2, y: 1 });
    });

    it('should move snake down', () => {
        const snake = [{ x: 2, y: 2 }, { x: 2, y: 1 }];
        const newSnake = moveSnake(snake, 'down');
        expect(newSnake[0]).to.deep.equal({ x: 2, y: 3 });
    });

    it('should move snake left', () => {
        const snake = [{ x: 2, y: 2 }, { x: 3, y: 2 }];
        const newSnake = moveSnake(snake, 'left');
        expect(newSnake[0]).to.deep.equal({ x: 1, y: 2 });
    });

    it('should move snake right', () => {
        const snake = [{ x: 2, y: 2 }, { x: 1, y: 2 }];
        const newSnake = moveSnake(snake, 'right');
        expect(newSnake[0]).to.deep.equal({ x: 3, y: 2 });
    });

    it('should keep snake length the same after move', () => {
        const snake = [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }];
        const newSnake = moveSnake(snake, 'up');
        expect(newSnake.length).to.equal(snake.length);
    });

    it('should move all segments forward', () => {
        const snake = [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }];
        const newSnake = moveSnake(snake, 'up');
        expect(newSnake[1]).to.deep.equal({ x: 2, y: 2 });
        expect(newSnake[2]).to.deep.equal({ x: 2, y: 3 });
    });

    it('should not mutate the original snake array', () => {
        const snake = [{ x: 2, y: 2 }, { x: 2, y: 3 }];
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        moveSnake(snake, 'up');
        expect(snake).to.deep.equal(snakeCopy);
    });
});

// We recommend installing an extension to run mocha tests.