import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterText({ options, className }) {
  return (
    <span className={className}>
      <Typewriter options={options} />
    </span>
  );
}
