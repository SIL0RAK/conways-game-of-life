import React, { memo } from 'react';

interface IBrick {
  x: number;
  y: number;
  value: boolean;
  onClick: (x: number, y: number, value: boolean) => void;
}

const Brick: React.FC<IBrick> = ({ x, y, value, onClick }) => {
  return (
    <div
      onClick={() => onClick(x, y, !value)}
      className={`brick ${value ? "alive" : ""}`}
    />
  );
};

export default memo(Brick);
