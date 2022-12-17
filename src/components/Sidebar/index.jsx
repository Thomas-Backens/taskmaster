import React from "react";
import "./styles.css";

export default function Sidebar() {
  return (
    <div className="sidebarRoot">
      <div className="sidebarBackground">
        <div className="sidebarButtons">
          <button className="sidebarButton">Home</button>
          <button className="sidebarButton">Tasks</button>
          <button className="sidebarButton">Help</button>
        </div>
        <div>
          <button className="sidebarButton sidebarLowerButton">Close</button>
        </div>
      </div>
    </div>
  );
}
