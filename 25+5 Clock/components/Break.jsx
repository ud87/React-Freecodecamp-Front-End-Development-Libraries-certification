import React from "react";

export default function Break() {
  return (
    <div class="break">
      <div id="break-label">Break Length</div>
      <div className="controls">
        <button id="break-decrement">
          <i class="fa-solid fa-arrow-down fa-lg"></i>
        </button>
        <div id="break-length">5</div>
        <button id="break-increment">
          <i class="fa-solid fa-arrow-up fa-lg"></i>
        </button>
      </div>
    </div>
  );
}
