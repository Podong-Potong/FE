import ConsumHistoryBox from "../component/Main/ConsumHistoryBox.tsx/ConsumHistory";
import Column from "../component/common/Layouts/Column";
import { ProgressCard } from "../component/Home/ProgressCard";
import { NavigationBar } from "../component/common/Layouts/NavigationBar";
import { useAtom } from "jotai";
import { MainDataAtom } from "./CalendarPage";
import { NoEnterBudget } from "../component/Home/NoEnterBudget";

export function Main() {
	return (
		<div style={{ width: "100%" }}>
			<Column gap={20} style={{ width: "100%" }}>
				<ProgressCard />
				<ConsumHistoryBox category="뮤지컬 및 영화" goal={300000} totalSpent={600000} categoryIcon="🎵" />
				<ConsumHistoryBox category="뮤지컬 및 영화" goal={50000} totalSpent={24000} categoryIcon="🎵" />
			</Column>
			<NavigationBar />
		</div>
	);
}
