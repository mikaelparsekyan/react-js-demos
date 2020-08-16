import React from 'react';
import Box from './classes/Box'
import logo from './logo.svg';
import './App.css';

function App() {
    //The first player's sign is X.
    let playerSign = 'x';
    let matrix = getRenderedMatrix();
    return (
        <div className="main-content">
            <h1 className="player-turn-message">Player 1 turn:</h1>
            {matrix}
        </div>
    );
}

function getRenderedMatrix() {
    let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let box = new Box();
            matrix[i][j] = box.render(matrix[i][j], 'y');
        }
    }
    return (matrix);
}

export default App;
