import React from "react";

export default function Break(props) {
  return (
    <div class="break">
      <div id="break-label">Break Length</div>
      <div className="controls">
        <button id="break-decrement" onClick={props.breakLengthDecrease}>
          <i class="fa-solid fa-arrow-down fa-lg"></i>
        </button>
        <div id="break-length">{props.breakLength}</div>
        <button id="break-increment" onClick={props.breakLengthIncrease}>
          <i class="fa-solid fa-arrow-up fa-lg"></i>
        </button>
      </div>
    </div>
  );
}
