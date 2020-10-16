import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import mutateMatrix from '../utils/mutateMatrix';
import live from '../utils/live';

interface IMatrixContext {
  matrix: boolean[][];
  speed: number;
  running: boolean;
  setSpeed: (speed: number) => void;
  setRunning: (running: boolean) => void;
  setMatrix: (matrix: boolean[][]) => void;
  updateMatrix: (x: number, y: number, value: boolean) => void;
}

const MatrixContext = createContext<IMatrixContext>({
  matrix: [],
  speed: 1000,
  running: false,
  setSpeed: () => {},
  setMatrix:() => {},
  setRunning: () => {},
  updateMatrix: () => {},
});

export const useMatrixContext = () => useContext(MatrixContext);

interface IMatrixContextProvider {
  matrixWidth?: number;
  matrixHeigt?: number;
}

export const MatrixContextProvider: React.FC<IMatrixContextProvider> = ({
  matrixWidth = 10,
  matrixHeigt = 10,
  children
}) => {
  const [speed, setSpeed] = useState(1000);
  const [running, setRunning] = useState(false);
  const [matrix, setMatrix] = useState(
    Array(matrixHeigt).fill(Array(matrixWidth).fill(false))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        setMatrix(live(matrix));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [matrix, speed, running]);

  const updateMatrix = useCallback(
    (x, y, value) => {
      setMatrix(mutateMatrix(matrix, y, x, value));
    },
    [matrix]
  );

  const vault = {
    speed,
    matrix,
    running,
    setSpeed,
    setMatrix,
    setRunning,
    updateMatrix
  };

  return (
    <MatrixContext.Provider value={vault}>{children}</MatrixContext.Provider>
  );
};

export default MatrixContext;
