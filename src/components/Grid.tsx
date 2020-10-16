import React from 'react';
import Brick from './Brick';
import { useMatrixContext } from './MatricContext';

const Grid: React.FC = () => {
  const { matrix, updateMatrix } = useMatrixContext();

  return (
    <div>
      {matrix.map((row, y) => (
        <div className="flex" key={y}>
          {row.map((item, x) => (
            <Brick
              x={x}
              y={y}
              key={`${x}-${y}`}
              value={item}
              onClick={updateMatrix}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
