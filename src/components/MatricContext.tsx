import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import mutateMatrix from '../utils/mutateMatrix';
import live from '../utils/live';
import { MatrixSize, Speed } from '../config';

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
  speed: Speed.Default,
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
  matrixWidth = MatrixSize.DefaultWidth,
  matrixHeigt = MatrixSize.DefaultHeight,
  children
}) => {
  const [speed, setSpeed] = useState(Speed.Default);
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
