import React from "react";

export function Logotype({ color = "white" }) {
  return (
    <svg
      width="155"
      height="26"
      viewBox="0 0 155 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logotype"
    >
      <path
        d="M9.55396 20.518L2 13.009L9.55396 5.5"
        stroke="#3D7FFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.536 5.5L27 13.009L19.536 20.518"
        stroke="#3D7FFF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    <text x="40" y="19" fill="white" fontFamily="Avenir" fontWeight={"900"} fontSize={"16"}>Near Social+</text>

    </svg>
  );
}
