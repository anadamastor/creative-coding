const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
  // dimensions: "A4",
  // devicePixelInch = 300
  // orientation: "landscape"
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.006;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const initialX = width * 0.17;
    const initialY = height * 0.17;
    let x, y;

    let sketchDraw = function () {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          x = initialX + (w + gap) * i;
          y = initialY + (h + gap) * j;
          context.strokeStyle = "white";
          context.beginPath();
          context.rect(x, y, w, h);
          context.stroke();

          const off = width * 0.029;

          if (Math.random() > 0.3) {
            // 50% OF POSSIBILITY TO MAKE THINGS HAPPEN
            context.beginPath();
            context.rect(x + off / 2, y + off / 2, w - off, h - off);
            context.stroke();
          }
        }
      }
    };
  };
};

canvasSketch(sketch, settings);
