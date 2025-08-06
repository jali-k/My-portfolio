import React, { useEffect, useState } from 'react';

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      className="fixed w-3 h-3 bg-primary-500 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out"
      style={{
        left: position.x - 6,
        top: position.y - 6,
        transform: 'translate(0, 0)',
      }}
    />
  );
};

export default CursorFollower;

