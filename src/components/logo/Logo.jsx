import { useEffect } from 'react';

function Logo() {
    const MAX = 50;
    let canvas, ctx;
    let count = 0;
    let points = [];

    useEffect(() => {
        const orb = () => {
            canvas = document.getElementsByTagName("canvas")[0];
            ctx = canvas.getContext("2d");
            canvas.width = canvas.height = 100; // Adjusted canvas size
            ctx.fillRect(0, 0, 100, 100); // Adjusted fillRect size

            var r = 0;
            for (let a = 0; a < MAX; a++) {
                points.push([Math.cos(r), Math.sin(r), 0]);
                r += (Math.PI * 2) / MAX;
            }

            for (let a = 0; a < MAX; a++) {
                points.push([0, points[a][0], points[a][1]]);
            }

            for (let a = 0; a < MAX; a++) {
                points.push([points[a][1], 0, points[a][0]]);
            }

            rus();
        };

        const rus = () => {
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "rgba(0,0,0,0.03)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "lighter";
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas each frame

            var tim = count / 7;

            for (var e = 0; e < 3; e++) {
                tim *= 1.7;
                var s = 1 - e / 3;
                a = tim / 59;
                var yp = Math.cos(a);
                var yp2 = Math.sin(a);
                a = tim / 23;
                var xp = Math.cos(a);
                var xp2 = Math.sin(a);
                var p2 = [];
                for (var a = 0; a < points.length; a++) {
                    var x = points[a][0];
                    var y = points[a][1];
                    var z = points[a][2];

                    var y1 = y * yp + z * yp2;
                    var z1 = y * yp2 - z * yp;
                    var x1 = x * xp + z1 * xp2;

                    z = x * xp2 - z1 * xp;
                    z1 = Math.pow(2, z * s);
                    x = x1 * z1;
                    y = y1 * z1;
                    p2.push([x, y, z]);
                }

                s *= 34; // Adjust size as needed

                for (var d = 0; d < 3; d++) {
                    for (let a = 0; a < MAX; a++) {
                        const b = p2[d * MAX + a];
                        const c = p2[((a + 1) % MAX) + d * MAX];
                        ctx.beginPath();
                        ctx.strokeStyle = "hsla(" + (((a / MAX) * 240) | 0) + ", 60%, 60%, 0.9)";

                        ctx.lineWidth = Math.pow(6, b[2]);
                        ctx.lineTo(b[0] * s + 50, b[1] * s + 50); // Adjusted line coordinates
                        ctx.lineTo(c[0] * s + 50, c[1] * s + 50); // Adjusted line coordinates
                        ctx.stroke();
                    }
                }
            }
            count++;
            requestAnimationFrame(rus);
        };
        orb();
    }, []);

    return (
        <canvas width={100} height={100}></canvas> // Adjusted canvas size
    );
}

export default Logo;
