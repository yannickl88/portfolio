declare type Path = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

const spacing = 150;

function color(z: number): string {
  return `rgba(89, 61, 163, ${z})`;
}

function dist(x1: number, y1: number, x2: number, y2: number): number {
  return (
    1 -
    Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) / (spacing * 1.05)
  );
}

function generatePoint(x: number, y: number): Path {
  // [[50, 50, 30, 50, 1, 0, 3000]]
  return [
    x,
    y,
    Math.random() * 10,
    Math.random() * 30,
    Math.random() * 30,
    Math.random() * 10,
    Math.random() * 10,
    750 + Math.random() * 500,
  ];
}

function calcPoint(point: Path, timestamp: number): [number, number, number] {
  const [x, y, z, dx, dy, ox, oy, speed] = point;
  return [
    x * spacing + dx * Math.sin(ox + timestamp / speed) - spacing / 2,
    y * spacing + dy * Math.sin(oy + timestamp / speed) - spacing / 2,
    Math.sin(z + timestamp / speed),
  ];
}

function generateRow(size: number, y: number): Path[] {
  const row = Array(size);

  for (let i = 0; i < row.length; i++) {
    row[i] = generatePoint(i, y);
  }

  return row;
}

export function animateBackground(canvas: HTMLCanvasElement) {
  let animationFrame: number;
  let paths: Path[][] = [];

  function checkGridSize(width: number, height: number): void {
    const columns = Math.ceil(width / spacing) + 1;
    const rows = Math.ceil(height / spacing) + 2;

    if (paths.length > 0) {
      for (let i = 0; i < paths.length; i++) {
        while (paths[i].length < columns) {
          paths[i].push(generatePoint(paths[i].length, i));
        }
        while (paths[i].length > columns) {
          paths[i].pop();
        }
      }
    }

    while (paths.length < rows) {
      paths.push(generateRow(columns, paths.length));
    }
    while (paths.length > rows) {
      paths.pop();
    }
  }

  function tick(timestamp: number) {
    const { width, height } = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    ctx.canvas.width = width;
    ctx.canvas.height = height;

    checkGridSize(width, height);

    for (let row of paths) {
      for (let point of row) {
        const [x, y] = point;
        const [pointX, pointY, pointZ] = calcPoint(point, timestamp);

        ctx.fillStyle = color(pointZ / 2);
        ctx.fillRect(pointX - 2, pointY - 2, 4, 4);

        if (x > 0) {
          const [point2X, point2Y] = calcPoint(paths[y][x - 1], timestamp);

          ctx.strokeStyle = color(dist(pointX, pointY, point2X, point2Y));
          ctx.beginPath();
          ctx.moveTo(pointX, pointY);
          ctx.lineTo(point2X, point2Y);
          ctx.stroke();
        }
        if (y > 0) {
          const [point2X, point2Y] = calcPoint(paths[y - 1][x], timestamp);

          ctx.strokeStyle = color(dist(pointX, pointY, point2X, point2Y));
          ctx.beginPath();
          ctx.moveTo(pointX, pointY);
          ctx.lineTo(point2X, point2Y);
          ctx.stroke();
        }
      }
    }

    animationFrame = requestAnimationFrame(tick);
  }

  // Ensure the grid
  const { width, height } = canvas.getBoundingClientRect();
  checkGridSize(width, height);

  // Start the animation
  animationFrame = requestAnimationFrame(tick);

  return {
    stop: () => cancelAnimationFrame(animationFrame),
  };
}
