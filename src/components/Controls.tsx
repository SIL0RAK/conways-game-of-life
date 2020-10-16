import React from 'react';
import { useMatrixContext } from './MatricContext';
import { MatrixSize } from '../config';

const Controlls: React.FC = () => {
    const { 
        speed,
        matrix,
        running,
        setSpeed,
        setMatrix,
        setRunning,
    } = useMatrixContext();

    const handleSpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => (
        setSpeed(Number(event.target.value))
    );

    const changeMatrixDimensions = (x: number, y: number) => {
        setMatrix(Array(y).fill(Array(x).fill(false)))
    }

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        
        if (!Number.isNaN(value)) {
            changeMatrixDimensions(matrix[0].length, value)
        }
    }

    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);

        if (!Number.isNaN(value)) {
            changeMatrixDimensions(value, matrix.length);
        }
    }

    return (
        <div className="controlls">
            <div>
                {`speed: ${speed}`}
                <input
                    min={50}
                    max={1500}
                    type="range"
                    value={speed}
                    onChange={handleSpeedChange}
                />
            </div>
            <button
                className="start-button"
                onClick={() => setRunning(!running)}
            >
                {running ? 'Stop' : 'Start'}
            </button>
            <div className="dimensions">
                <label>Width:</label>
                <input
                    value={matrix[0].length}
                    type="number"
                    min={5}
                    max={MatrixSize.MaxWidth}
                    onChange={handleWidthChange}
                />

                <label>Height:</label>
                <input
                    value={matrix.length}
                    type="number"
                    min={5}
                    max={MatrixSize.MaxHeight}
                    onChange={handleHeightChange}
                />
            </div>
        </div>
    )
};

export default Controlls;