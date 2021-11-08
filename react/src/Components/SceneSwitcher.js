import { useState } from "react";

export default function SceneSwitcher(props) {
  const [scene, setScene] = useState(props.scene);

  const nextScene = () => {
    if (scene === 3) {
      setScene(1);
    } else {
      setScene(scene + 1);
    }
    console.log(scene);
  };

  const prevScene = () => {
    if (scene === 1) {
      setScene(3);
    } else {
      setScene(scene - 1);
    }
    console.log(scene);
  };

  return (
    <div className="SceneSwitcher">
      <p>{scene}</p>
      <button onClick={() => nextScene()}>+</button>
      <button onClick={() => prevScene()}>-</button>
    </div>
  );
}
