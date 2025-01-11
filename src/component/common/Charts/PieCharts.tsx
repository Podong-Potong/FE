import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";
import styled from "styled-components";
import Row from "../Layouts/Row";

interface PieChartsProps {
	progress: number;
	width: number;
	height: number;
}

export default function PieCharts({ progress, width, height }: PieChartsProps) {
	const data = [
		{ name: "미달성률", value: 100 - progress },
		{ name: "달성률", value: progress }
	];

	return (
		<OuterCircle size={width}>
			<Container width={width} height={height}>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<defs>
							<linearGradient id="gradient-fill" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="23.22%" stopColor="#87D6BC" />
								<stop offset="73.77%" stopColor="#0DA484" />
							</linearGradient>
						</defs>
						<Pie
							data={data}
							dataKey="value"
							cx="50%"
							cy="50%"
							innerRadius="80%"
							outerRadius="100%"
							startAngle={90}
							endAngle={-270}
							cornerRadius={50}
							paddingAngle={-10}
						>
							<Cell key={`cell-0`} fill="#E1E3E0" />
							<Cell key={`cell-1`} fill="url(#gradient-fill)" />
						</Pie>
					</PieChart>
				</ResponsiveContainer>
				<TextContainer>
					<Row verticalAlign="center" gap={5}>
						<Progress>{`${progress}%`}</Progress>
						<ProgressText>달성</ProgressText>
					</Row>
				</TextContainer>
			</Container>
		</OuterCircle>
	);
}

const OuterCircle = styled.div<{ size: number }>`
	width: ${(props) => `${props.size}px`};
	height: ${(props) => `${props.size}px`};
	padding: 0.5rem;
	border-radius: 50%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Container = styled.div<{ width: number; height: number }>`
	position: relative;
	width: ${(props) => `${props.width}px`};
	height: ${(props) => `${props.height}px`};
`;

const TextContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	font-size: 1.5em;
`;

const Progress = styled.p`
	color: #126b56;
	font-size: 1.3rem;
	font-weight: bold;
`;

const ProgressText = styled.p`
	font-size: 1rem;
	white-space: nowrap;
`;
