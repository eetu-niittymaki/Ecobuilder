import { useState } from "react";

export default function PinButton(props) {
  const propId = props.Id;

  return (
    <div className="PinButton">
      <p>{propId}</p>
    </div>
  );
}
