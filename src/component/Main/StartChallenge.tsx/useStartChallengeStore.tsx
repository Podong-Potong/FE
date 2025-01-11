import { create } from "zustand";

type ChallengeState = {
	[type: string]: {
		day?: string[];
		money?: string;
		increaseMoney?: string[];
	};
};

type isCheckedState = {
	[type: string]: {};
};

type State = {
	challengeStates: ChallengeState;
	isInput: isCheckedState;
	toggleDay: (type: string, day: string) => void;
	inputMoney: (type: string, money: string) => void;
	increaseMoney: (type: string, increase: string) => void;
	// checkInputState: (type: string) => void;
};

export const useStartChallengeStore = create<State>((set, get) => ({
	challengeStates: {},
	isInput: {},

	toggleDay: (type, day) =>
		set((state) => {
			const currentDays = state.challengeStates[type]?.day || [];
			const currentMoney = state.challengeStates[type]?.money || "";
			const updatedDays = currentDays.includes(day)
				? currentDays.filter((d) => d !== day)
				: [...currentDays, day];

			return {
				challengeStates: {
					...state.challengeStates,
					[type]: {
						...state.challengeStates[type],
						day: updatedDays,
						money: currentMoney
					}
				}
			};
		}),

	inputMoney: (type, money) =>
		set((state) => {
			const originIncrease = state.challengeStates[type]?.increaseMoney || [];
			const originDay = state.challengeStates[type]?.day || [];
			return {
				challengeStates: {
					...state.challengeStates,
					[type]: {
						money: money,
						increaseMoney: originIncrease,
						day: originDay
					}
				}
			};
		}),

	increaseMoney: (type, increase) =>
		set((state) => {
			const currentIncreaseMoney = state.challengeStates[type]?.increaseMoney || [];

			const updatedIncrease = currentIncreaseMoney.includes(increase)
				? currentIncreaseMoney.filter((d) => d !== increase)
				: [...currentIncreaseMoney, increase];

			return {
				challengeStates: {
					...state.challengeStates,
					[type]: {
						...state.challengeStates[type],
						increaseMoney: updatedIncrease
					}
				}
			};
		})
	// checkInputState: (type) => {
	// 	set((state) => {
	// 		const currentState = state.challengeStates[type];
	// 		let isChecked = false;

	// 		// 타입별로 다른 조건을 적용
	// 		if (type === "money") {
	// 			isChecked = !!currentState?.money;
	// 		} else if (type === "save") {
	// 			// isChecked = !!currentState?.money &&currentState?.increaseMoney.length > 0;
	// 			isChecked = !!currentState?.money;
	// 		} else if (type === "increaseMoney") {
	// 			isChecked = !!currentState?.increaseMoney && currentState.increaseMoney.length > 0;
	// 		}

	// 		return {
	// 			isCheckedState: {
	// 				[type]: isChecked
	// 			}
	// 		};
	// 	});
	// }
}));
