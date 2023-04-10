import React, { useRef, useEffect } from 'react';

interface WaterPoolBallProps {
	value: number;
}

const WaterPoolBall = (props: WaterPoolBallProps) => {
	const canvasRef = useRef(null);

	useEffect(() => {
		let canvas = canvasRef.current as any;
		if (!canvas) return;
		let ctx = canvas.getContext('2d');

		let M = Math;
		let Sin = M.sin;
		let Cos = M.cos;
		let PI = M.PI;

		let oW = (canvas.width = 300);
		let oH = (canvas.height = 300);

		// 線寬
		let lineWidth = 2;

		// 半徑
		let r = oW / 2;
		let cR = r - 8 * lineWidth;

		ctx.beginPath();

		ctx.lineWidth = lineWidth;

		// 水波動畫初始參數
		let axisLength = 2 * r - 16 * lineWidth; //Sin 圖形長度
		let unit = axisLength / 8; // 波浪寬
		let range = 0.2; // 浪幅
		let nowrange = range;
		let xoffset = 8 * lineWidth; // x 軸偏移量
		let data = ~~props.value / 100; // 數值百分比
		let sp = 0; // 週期偏移量
		let nowdata: any = 0;
		let waveupsp = 0.002; // 水波上漲數度

		// 圖形動畫初始參數
		let arcStack: any = []; // 園線
		let bR = r - 8 * lineWidth;
		let soffset = -(PI / 2); // 園動畫的起始位置
		let circleLock = true; // 起始動畫

		// 獲取園動畫軌跡點
		for (var i = soffset; i < soffset + 2 * PI; i += 1 / (8 * PI)) {
			arcStack.push([r + bR * Cos(i), r + bR * Sin(i)]);
		}

		let cStartPoint = arcStack.shift() as number[]; // 園起始點

		ctx.strokeStyle = '#1c86d1';
		ctx.moveTo(cStartPoint[0], cStartPoint[1]);

		render(); // 開始渲染

		function drawSine() {
			ctx.beginPath();
			ctx.save();
			let Stack = []; // 紀錄起始點和終點座標
			for (let i = xoffset; i <= xoffset + axisLength; i += 20 / axisLength) {
				let x = sp + (xoffset + i) / unit;
				let y = Sin(x) * nowrange;

				let dx = i;

				let dy = 2 * cR * (1 - nowdata) + (r - cR) - unit * y;

				ctx.lineTo(dx, dy);
				Stack.push([dx, dy]);
			}

			ctx.lineTo(xoffset + axisLength, oW);
			ctx.lineTo(xoffset, oW);
			ctx.fillStyle = '#1c86d1';
			ctx.fill();
			ctx.restore();
		}

		function drawText() {
			ctx.globalCompositeOperation = 'source-over';

			var size = 0.4 * cR;
			ctx.font = 'bold ' + size + 'px Microsoft Yahei';

			let txt = (nowdata.toFixed(2) * 100).toFixed(0) + '%';

			var fonty = r + size / 2;
			var fontx = r - size * 0.8;

			if (txt === '100%') {
				fontx = r - size * 1.2;
			}
			ctx.fillStyle = 'rgba(06, 85, 128, 0.8)';
			ctx.fillText(txt, fontx, fonty);
		}

		function render() {
			ctx.clearRect(0, 0, oW, oH);
			if (circleLock) {
				circleLock = false;
				ctx.lineTo(cStartPoint[0], cStartPoint[1]);
				arcStack = null;

				ctx.globalCompositeOperation = 'destination-over';
				ctx.beginPath();
				ctx.lineWidth = lineWidth;
				ctx.arc(r, r, bR, 0, 2 * PI, 1);

				ctx.beginPath();
				ctx.save();
				ctx.arc(r, r, r - 16 * lineWidth, 0, 2 * PI, 1);
				ctx.restore();
				ctx.clip();

				ctx.fillStyle = '#1c86d1';
			} else {
				// 波浪動畫
				// 控制波幅
				if (data >= 0.85) {
					if (nowrange > range / 4) {
						var t = range * 0.01;
						nowrange -= t;
					}
				} else if (data <= 0.1) {
					if (nowrange < range * 1.5) {
						var t = range * 0.01;
						nowrange += t;
					}
				} else {
					if (nowrange <= range) {
						var t = range * 0.01;
						nowrange += t;
					}

					if (nowrange >= range) {
						var t = range * 0.01;
						nowrange -= t;
					}
				}

				if (data - nowdata > 0) {
					nowdata += waveupsp;
				}

				if (data - nowdata < 0) {
					nowdata -= waveupsp;
				}

				sp += 0.07;
				drawSine();
				drawText();
			}
			requestAnimationFrame(render);
		}
	}, [props.value]);
	return <canvas ref={canvasRef}></canvas>;
};

export default WaterPoolBall;
