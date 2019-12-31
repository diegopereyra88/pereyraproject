import React from "react";
import { useSpring, animated } from "react-spring";
function App() {
  const props = useSpring({ x: 100, from: { x: 0 } });
  return (
    <animated.svg strokeDashoffset={props.x}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </animated.svg>
  );
}
export default App;
