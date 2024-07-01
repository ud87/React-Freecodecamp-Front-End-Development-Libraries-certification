import React from "react";

export default function Session() {
  return (
    <div class="session">
      <div id="session-label">Session Length</div>
      <div className="controls">
        <button id="session-decrement">
          <i class="fa-solid fa-arrow-down fa-lg"></i>
        </button>
        <div id="session-length">25</div>
        <button id="session-increment">
          <i class="fa-solid fa-arrow-up fa-lg"></i>
        </button>
      </div>
    </div>
  );
}
