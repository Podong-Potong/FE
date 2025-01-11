import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { NamedLazy } from "../utils/NamedLazy";
import { Layout } from "../component/common/Layouts/Layouts";
import { Challenge } from "../pages/Challenge";
import GlobalStyles from "../styles/globalStyle";

// 동적으로 로드할 페이지
const Main = NamedLazy(() => import("../pages/Main"), "Main");
const CalendarPage = NamedLazy(() => import("../pages/CalendarPage"), "CalendarPage");
const Reward = NamedLazy(() => import("../pages/Reward"), "Reward");
const MyPage = NamedLazy(() => import("../pages/MyPage"), "MyPage");
const Goal = NamedLazy(() => import("../pages/Goal"), "Goal");
const CalendarCategory = NamedLazy(() => import("../pages/CalendarCategory"), "CalendarCategory");
const StartChallenge = NamedLazy(() => import("../pages/StartChallenge"), "StartChallenge");
const WriteSpendHabit = NamedLazy(() => import("../pages/WriteSpendHabit"), "WriteSpendHabit");

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Main />
					</Suspense>
				)
			},
			{
				path: "/calendar",
				children: [
					{
						path: "",
						element: (
							<Suspense fallback={<div>Loading...</div>}>
								<GlobalStyles />
								<CalendarPage />
							</Suspense>
						)
					},
					{
						path: "goal",
						element: (
							<Suspense fallback={<div>Loading...</div>}>
								<Goal />
							</Suspense>
						)
					},
					{
						path: "category",
						element: (
							<Suspense fallback={<div>Loading...</div>}>
								<CalendarCategory />
							</Suspense>
						)
					}
				]
			},
			{
				path: "/reward",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Reward />
					</Suspense>
				)
			},
			{
				path: "/mypage",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<MyPage />
					</Suspense>
				)
			},
			{
				path: "/challenge",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Challenge />
					</Suspense>
				)
			},
			{
				path: "/startChallenge",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<StartChallenge />
					</Suspense>
				)
			},
			{
				path: "/writeSpendHabit",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<WriteSpendHabit />
					</Suspense>
				)
			}
		]
	}
]);
