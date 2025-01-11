import styled from "styled-components";
import BarCharts from "../common/Charts/BarCharts";

export default function BarChallenge() {
	// TODO: 데이터 연동 작업 필요
	const data = [
		{ day: "월", value: 42 },
		{ day: "수", value: 12 }
	];

	const barData = [{ dataKey: "value", fill: "#87D6BC", emoji: "🥳" }];

	return (
		<>
			<Description>
				@@@님은 월요일에 챌린지를 <br /> 성공 시킨 적이 더 많아요
			</Description>
			<BarCharts data={data} xAxisDataKey="day" barData={barData} width={400} height={300} />
		</>
	);
}

const Description = styled.h1`
	font-size: 24px;
	font-weight: 700;
	line-height: 36px; /* 150% */
`;
