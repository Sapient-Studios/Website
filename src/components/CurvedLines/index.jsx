import React from 'react';
import Sketch from 'react-p5';

const CurvedLinesWithGradient = () => {
  let t = 0; // time variable for animation
  const timeIncrement = 0.005; // controls speed of animation
  const frequency = 0.005; // controls frequency of sine wave
  const amplitude = 100; // reduced amplitude to prevent cutoff
  const numberOfLines = 10; // number of lines to draw
  const lineSpacing = 50; // space between each line
  const phaseShift = 0.51; // phase shift between each line

  const setup = (p5, canvasParentRef) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    p5.createCanvas(width, height).parent(canvasParentRef); // Set canvas to window dimensions
    p5.noFill();
  };

  const draw = (p5) => {
    p5.clear(); // Use clear for a transparent background

    p5.strokeWeight(1);
    const ctx = p5.drawingContext;
    let gradient = ctx.createLinearGradient(0, 0, p5.width * 1.8, 0); // Adjust gradient for width
    gradient.addColorStop(0, '#1BF4F9');
    gradient.addColorStop(1, '#002BDC');
    ctx.strokeStyle = gradient;

    // Draw multiple lines with offsets
    for (let j = 0; j < numberOfLines; j++) {
      p5.beginShape();
      for (let x = 0; x < p5.width; x += 20) { // Loop through the width
        let y = p5.height / 2 + p5.sin(x * frequency + t + j * phaseShift) * amplitude; // Adjust y with phase shift
        y += (j - numberOfLines / 2) * lineSpacing; // Center lines and space out each line vertically
        p5.curveVertex(x, y);
      }
      p5.endShape();
    }

    t += timeIncrement; // Increment time
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default CurvedLinesWithGradient;
