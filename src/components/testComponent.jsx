import { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';

const DraggableComponent = () => {
  const [isOverGreen, setIsOverGreen] = useState(false);
  const [position, setPosition] = useState({ x: 75, y: 75 }); // Начальная позиция в середине красного прямоугольника
  const [isResetting, setIsResetting] = useState(false);
  const initialPosition = useRef({ x: 75, y: 75 });
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleStop = (e, data) => {
    const greenRect = document
      .getElementById('green-rectangle')
      .getBoundingClientRect();
    const circleRect = document
      .getElementById('draggable-circle')
      .getBoundingClientRect();

    if (
      circleRect.left >= greenRect.left &&
      circleRect.right <= greenRect.right &&
      circleRect.top >= greenRect.top &&
      circleRect.bottom <= greenRect.bottom
    ) {
      setIsOverGreen(true);
    } else {
      setIsOverGreen(false);
    }

    setPosition({ x: data.x, y: data.y });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsResetting(true);
      setPosition(initialPosition.current);
      setIsOverGreen(false);
      setTimeout(() => setIsResetting(false), 300); // Время анимации совпадает с transition
    }, 5000);
  };

  const handleStart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '50px',
      }}
    >
      <div
        id="green-rectangle"
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'green',
        }}
      ></div>
      <div
        id="red-rectangle"
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'red',
          position: 'relative',
        }}
      >
        <Draggable
          position={isResetting ? initialPosition.current : position}
          onStart={handleStart}
          onStop={handleStop}
        >
          <div
            id="draggable-circle"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: isOverGreen ? 'blue' : 'yellow',
              position: 'absolute',
              cursor: 'grab',
              transition: 'all 0.3s ease', // Плавная анимация возвращения
              top: 0,
              left: 0,
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          ></div>
        </Draggable>
      </div>
    </div>
  );
};

export default DraggableComponent;
