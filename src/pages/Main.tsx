import ConsumHistoryBox from "../component/Main/ConsumHistoryBox.tsx/ConsumHistory";
import Column from "../component/common/Layouts/Column";
import { NoProgressCard } from "../component/Home/NoProgressCard";
import { ProgressCard } from "../component/Home/ProgressCard";
import { NavigationBar } from "../component/common/Layouts/NavigationBar";

export function Main() {
	return (
		<>
			<Column gap={20}>
				{/* 조건부 렌더링으로 챌린지가 있을 때와 없을 때 두 가지 상태를 보여줍니다. */}
				{/* <NoProgressCard /> */}
				<ProgressCard />
				<ConsumHistoryBox category="뮤지컬 및 영화" goal={300000} totalSpent={600000} categoryIcon="🎵" />
				<ConsumHistoryBox category="뮤지컬 및 영화" goal={50000} totalSpent={24000} categoryIcon="🎵" />
			</Column>
			<NavigationBar />
		</>
	);
}
