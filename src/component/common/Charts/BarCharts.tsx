import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, LabelList } from "recharts";

interface BarData {
	dataKey: string;
	fill: string;
	emoji: string;
}

interface BarChartsProps {
	data: any;
	xAxisDataKey: string;
	barData: BarData[];
	width: number;
	height: number;
}

export default function BarCharts({ data, xAxisDataKey, barData, width, height }: BarChartsProps) {
	return (
		<ResponsiveContainer width="100%" height={height}>
			<BarChart width={width} height={height} data={data}>
				<defs>
					<linearGradient id="bar-gradient" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#87D6BC" />
						<stop offset="100%" stopColor="#0DA484" />
					</linearGradient>
				</defs>
				<XAxis
					dataKey={xAxisDataKey}
					tick={{ fontSize: 14, fill: "#126b56", fontWeight: "bold" }}
					axisLine={false}
					tickLine={false}
				/>
				<YAxis hide />
				<Tooltip cursor={{ fill: "transparent" }} />
				{barData.map((barKey, index) => (
					<Bar
						key={barKey.dataKey}
						dataKey={barKey.dataKey}
						fill="url(#bar-gradient)"
						barSize={30}
						radius={[10, 10, 0, 0]}
					>
						<LabelList
							dataKey={barKey.dataKey}
							position="top"
							style={{ fill: "#126b56", fontSize: "14px", fontWeight: "bold" }}
							formatter={(value: number) => `${value}/60`}
						/>
						<LabelList
							dataKey={barKey.dataKey}
							position="top"
							content={({ x, y, width }) => {
								if (typeof x === "number" && typeof width === "number" && typeof y === "number") {
									return (
										<text
											x={x + width / 2}
											y={y - 33}
											textAnchor="middle"
											dominantBaseline="middle"
											fontSize="24px"
										>
											{barKey.emoji}
										</text>
									);
								}
								return null;
							}}
						/>
					</Bar>
				))}
			</BarChart>
		</ResponsiveContainer>
	);
}
