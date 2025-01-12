import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { ReactComponent as TriangleWarningIcon } from "../assets/icons/ci_triangle-warning.svg";
import { ReactComponent as CloverIcon } from "../assets/icons/clover.svg";
import SpendingChecker, { RecommendAtom } from "../component/Calendar/SpendingChecker";

import { Link } from "react-router-dom";
import { NavigationBar } from "../component/common/Layouts/NavigationBar";
import axios from "axios";
import { useQuery } from "react-query";
import { atom, useAtom, useAtomValue } from "jotai";

type TEMP = {
	date: string;
	statue: "success" | "failure";
};
export const SelectedDateAtom = atom<string | null>("");
export const MainDataAtom = atom<TEMP>();
export function CalendarPage() {
	const [hasFetched, setHasFetched] = useState(false);
	const [selectedDate, setSelectedDate] = useAtom(SelectedDateAtom);

	const { data, isLoading } = useQuery(
		["spendingList"],
		() =>
			axios
				.post("http://121.133.3.6:8081/api/spending/getlist", {
					year: 2025,
					month: 1
				})
				.then((response) => {
					console.log("데이터 확인:", response.data);
					return response.data;
				}),
		{
			enabled: !hasFetched,
			onSuccess: () => {
				setHasFetched(true);
			}
		}
	);
	const recommendAtom = useAtomValue(RecommendAtom);
	const aggregatedData = {} as any;
	data?.data.forEach((item: any) => {
		if (!aggregatedData[item.date]) {
			aggregatedData[item.date] = 0;
		}

		if (item.type === "EXPENSE") {
			aggregatedData[item.date] += item.amount;
		}
	});

	const transformedData = Object.entries(aggregatedData).map(([date, amount]) => ({
		date,

		status: (amount as number) < recommendAtom / 31 ? "success" : "failure"
	}));

	const totalSpend = data?.data
		?.filter((val: { type: string }) => val.type === "EXPENSE")
		.filter((val: { date: string | undefined }) => val.date === selectedDate)
		.reduce((acc: number, cur: { amount: number }) => acc + cur.amount, 0);

	const handleDateClick = (date: Date) => {
		const formattedDate = moment(date).local().format("YYYY-MM-DD");
		setSelectedDate(formattedDate);
	};

	const getDateStatus = (date: Date) => {
		const formattedDate = moment(date).format("YYYY-MM-DD"); // Date 객체를 YYYY-MM-DD로 포맷
		const found = transformedData.find((item: any) => item.date === formattedDate);
		return found ? found.status : null;
	};

	const getClassNameForTile = (date: Date) => {
		const status = getDateStatus(date);
		if (!selectedDate || selectedDate !== date.toLocaleString().split("T")[0]) return "";
		return status === "failure" ? "failure-active" : status === "success" ? "success-active" : "";
	};

	console.log(";;;st", transformedData);
	return (
		!isLoading && (
			<>
				<Container>
					<CalendarContainer>
						<Header>
							<CounterContainer>
								<StatusContainer>
									{/* {mockData.status === "failure"} */}
									<TriangleWarningIcon />
									<CountText>
										{transformedData.filter((item) => item.status === "failure").length}
									</CountText>
								</StatusContainer>
								<StatusContainer>
									<CloverIcon />
									<CountText>
										{transformedData.filter((item) => item.status === "success").length}
									</CountText>
								</StatusContainer>
							</CounterContainer>
							{/* <Link to="/calendar/goal">
								<PlusButton>월 목표 소비액</PlusButton>
							</Link> */}
						</Header>
						<StyledCalendar
							tileContent={({ date }) => {
								const status = getDateStatus(date);
								return (
									<TileContent>
										<IconContainer>
											{status === "failure" && <TriangleWarningIcon />}
											{status === "success" && <CloverIcon />}
										</IconContainer>
										<DateContainer
											isToday={moment(date).isSame(moment(), "day")}
											isSuccess={
												status === "success" ? true : status === "failure" ? false : null
											}
										>
											{moment(date).format("DD")}
										</DateContainer>
									</TileContent>
								);
							}}
							tileClassName={({ date }) => {
								const formattedDate = moment(date).format("YYYY-MM-DD");
								const status = getDateStatus(date); // 동일 포맷 사용
								return status === "failure"
									? "failure-active"
									: status === "success"
									? "success-active"
									: "";
							}}
							onClickDay={handleDateClick}
							next2Label={null}
							prev2Label={null}
							formatDay={() => ""}
						/>
					</CalendarContainer>
					<SpendingChecker totalSpend={totalSpend} mockData={data?.data} clickDate={selectedDate} />
					<NavigationBar />
				</Container>
			</>
		)
	);
}

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const CalendarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled.div`
	width: 95%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
`;

const CounterContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

const StatusContainer = styled.p`
	display: flex;
	align-items: center;
	gap: 0.45rem;
	font-size: 14px;
	font-weight: 700;
	line-height: 21px;
`;

const CountText = styled.p`
	margin-top: 0.2rem;
`;

const StyledCalendar = styled(Calendar)`
	.react-calendar__navigation {
		width: 60%;
		span {
			font-size: 20px;
			font-weight: 700;
			line-height: 25px;
		}

		.react-calendar__navigation__label {
			background: transparent !important;
		}

		.react-calendar__navigation__arrow {
			background: transparent !important;
		}

		.react-calendar__navigation__arrow:enabled:hover,
		.react-calendar__navigation__arrow:enabled:focus {
			background: transparent !important;
		}
	}

	.react-calendar__tile {
		width: 51px;
		height: 66px;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background: transparent !important;
		border-radius: 10px;

		&.failure-active {
			background-color: #ffdada !important;
		}

		&.success-active {
			background-color: #a3f2d8 !important;
		}
	}

	.react-calendar__tile:enabled:hover {
		background: transparent !important;
	}

	.react-calendar__tile--active {
		background: transparent !important;
		font-weight: 700;
	}

	.react-calendar__tile--now {
		color: black;
		font-weight: 700;
		border-radius: 50%;
		background: transparent !important;
	}
`;

const TileContent = styled.div`
	width: 3.125rem;
	height: 3.125rem;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const IconContainer = styled.div`
	position: absolute;
	top: 1px;
`;

const DateContainer = styled.div<{ isSuccess: boolean | null; isToday: boolean }>`
	position: absolute;
	bottom: 5px;
	font-size: 12px;
	color: ${(props) =>
		props.isToday
			? "#000"
			: props.isSuccess === true
			? "#0DA484"
			: props.isSuccess === false
			? "#BA1A1A"
			: "#B3B3B3"};
`;

const PlusButton = styled.button`
	padding: 0.5rem 0.75rem;
	border-radius: 12px;
	border: 2px solid #0da484;
	color: #0da484;
	font-size: 14px;
	font-weight: 400;
	letter-spacing: 0.175px;
`;
