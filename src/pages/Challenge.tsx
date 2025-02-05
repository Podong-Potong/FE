import styled from "styled-components";
import PieChallenge from "../component/Challenge/PieChallenge";
import BarChallenge from "../component/Challenge/BarChallenge";
import ChallengeHistory from "../component/Challenge/ChallengeHistory";
import { NavigationBar } from "../component/common/Layouts/NavigationBar";

export function Challenge() {
	return (
		<Container>
			<PieChallenge />
			<BarChallenge />
			<ChallengeHistory />
			<NavigationBar />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	padding: 0.5rem;
	gap: 0.5rem;
`;
