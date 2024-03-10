import React, { useEffect, useRef } from "react";

const drawAndAnimateMultipleSines = (canvas, sineWaveConfigs) => {
  const canvasContext = canvas.getContext("2d");
  canvasContext.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

  sineWaveConfigs.forEach((sineWaveConfig) => {
    drawAndAnimateSine(canvas, canvasContext, sineWaveConfig);
  });

  requestAnimationFrame(() =>
    drawAndAnimateMultipleSines(canvas, sineWaveConfigs)
  ); // Request the next frame of the animation
};
const drawAndAnimateSine = (canvas, canvasContext, sineWaveConfig) => {
  let {
    amplitude = 5,
    frequency = 0.01,
    verticalLineOffset = 1.5,
    phaseShift = 0.02,
    lineWidth = 2,
    color = "#007bff",
    phase = 0,
  } = sineWaveConfig;

  // Draw multiple waves with different vertical offsets
  for (
    let yOffset = 0;
    yOffset < canvas.height;
    yOffset += amplitude * verticalLineOffset
  ) {
    drawSine(canvas, canvasContext, {
      amplitude,
      frequency,
      yOffset,
      lineWidth,
      color,
      phase,
    });
  }

  sineWaveConfig.phase += phaseShift; // Increment the phase for animation, modify the original object to retain phase across frames
};

function drawSine(
  canvas,
  canvasContext,
  {
    amplitude = 5, // Height of the wave's peak, reduced for better visual effect
    frequency = 0.01, // Cycles per pixel
    yOffset = 0, // Vertical distance between each line, multiplied by amplitude
    lineWidth = 2,
    color = "#007bff",
    phase = 0,
  }
) {
  canvasContext.beginPath();
  canvasContext.moveTo(0, yOffset); // Start each wave at a different vertical position
  canvasContext.strokeStyle = color;
  canvasContext.lineWidth = lineWidth;

  for (let x = 0; x < canvas.width; x++) {
    const y = amplitude * Math.sin(frequency * x + phase) + yOffset;
    canvasContext.lineTo(x, y);
  }

  canvasContext.stroke();
}

const Guilloche = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext("2d");

    // Set canvas to full viewport size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const defaultSineWaveConfig = {
      amplitude: 10,
      frequency: 0.1,
      verticalLineOffset: 2,
      phaseShift: 0.2,
      lineWidth: 2,
      color: "#007bff",
      phase: 0,
    };
    drawAndAnimateMultipleSines(canvas, [
      defaultSineWaveConfig,
      {
        ...defaultSineWaveConfig,
        color: "red",
        phase: Math.PI,
      },
    ]);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
      className="-z-30"
    />
  );
};

export default Guilloche;
