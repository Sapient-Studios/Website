import React from 'react';
import Sketch from 'react-p5';

const CurvedLinesWithGradient = () => {
  let t = 0; // time variable for animation
  const timeIncrement = 0.005; // controls speed of animation
  const frequency = 0.005; // controls frequency of sine wave
  const amplitude = 100; // amplitude of the wave
  const numberOfLines = 10; // number of lines to draw
  const lineSpacing = 50; // space between each line
  const phaseShift = 0.51; // phase shift between each line

  const setup = (p5, canvasParentRef) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    p5.createCanvas(width, height).parent(canvasParentRef);
    p5.noFill();
  };

  const draw = (p5) => {
    p5.clear();

    p5.strokeWeight(1);
    const ctx = p5.drawingContext;
    let gradient = ctx.createLinearGradient(0, 0, p5.height * 1.8, 0); // Adjust gradient for height
    gradient.addColorStop(0, '#1BF4F9');
    gradient.addColorStop(1, '#002BDC');
    ctx.strokeStyle = gradient;

    // Draw multiple lines with offsets
    for (let j = 0; j < numberOfLines; j++) {
      p5.beginShape();
      for (let y = 0; y < p5.height; y += 20) { // Loop through the height
        let x = p5.width / 2 + p5.sin(y * frequency + t + j * phaseShift) * amplitude; // Calculate x based on sine function
        x += (j - numberOfLines / 2) * lineSpacing; // Center lines and space out each line horizontally
        p5.curveVertex(x, y);
      }
      p5.endShape();
    }

    t += timeIncrement; // Increment time
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default CurvedLinesWithGradient;
