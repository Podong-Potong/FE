import StartChallengeBox from "../component/Main/StartChallenge.tsx/StartChallengeBox";
import Column from "../component/common/Layouts/Column";
import { NavigationBar } from "../component/common/Layouts/NavigationBar";
import Typography from "../component/common/Typography/Typography";

export function StartChallenge() {
	return (
		<>
			<Typography typoSize="H5" color="neutral100">
				{"이수정님에게 추천드리는\n통장 살찌우기 챌린지"}
			</Typography>
			<Column gap={12} style={{ marginTop: "17px" }}>
				<StartChallengeBox />
			</Column>
			<NavigationBar />
		</>
	);
}
