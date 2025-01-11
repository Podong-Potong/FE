import useFormatMoney from "../../../hook/useFormatMoney";
import Column from "../../common/Layouts/Column";
import Row from "../../common/Layouts/Row";
import Typography from "../../common/Typography/Typography";

import * as S from "./style";
export default function ConsumHistoryBox({
	goal,
	totalSpent,
	category,
	categoryIcon
}: {
	goal: number;
	totalSpent: number;
	category: string;
	categoryIcon: string;
}) {
	const calcSpentData = goal - totalSpent;
	const isOver = Math.sign(calcSpentData) < 0;
	const { formatMoney } = useFormatMoney();

	return (
		<Column style={{ width: "100%" }}>
			<S.UseData isOver={isOver}>
				<Column gap={8}>
					<Column>
						<Typography typoSize="Subtitle1" color={isOver ? "error" : "primary"}>{`목표 ${formatMoney(
							goal.toString()
						)}`}</Typography>
						<Typography typoSize="H6_B" color={isOver ? "error" : "primary"}>{`최종소비 ${formatMoney(
							totalSpent.toString()
						)}`}</Typography>
					</Column>
					<Row gap={8} verticalAlign="center">
						{categoryIcon}
						<Typography typoSize="Caption" color="neutral40">
							{category}
						</Typography>
					</Row>
				</Column>
			</S.UseData>
			<S.AnalizeData isOver={isOver}>
				{isOver ? (
					<Typography typoSize="Subtitle2" color="neutral00">{`목표 금액보다 ${formatMoney(
						Math.abs(calcSpentData).toString()
					)} 원 더 사용했어요 😵‍💫`}</Typography>
				) : (
					<Typography typoSize="Subtitle2" color="neutral00">{`목표 금액보다 ${formatMoney(
						calcSpentData.toString()
					)} 원 아꼈어요 🎉`}</Typography>
				)}
			</S.AnalizeData>
		</Column>
	);
}
