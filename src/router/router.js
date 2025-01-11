import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { NamedLazy } from "../utils/NamedLazy";
import { Layout } from "../component/common/Layouts/Layouts";
import { Challenge } from "../pages/Challenge";
import { Header } from "../component/common/Layouts/Header";
import { ReactComponent as LeftIcon } from "../assets/icons/ci_chevron-left.svg";

// 동적으로 로드할 페이지
const Main = NamedLazy(() => import("../pages/Main"), "Main");
const CalendarPage = NamedLazy(() => import("../pages/CalendarPage"), "CalendarPage");
const Reward = NamedLazy(() => import("../pages/Reward"), "Reward");
const MyPage = NamedLazy(() => import("../pages/MyPage"), "MyPage");
const Goal = NamedLazy(() => import("../pages/Goal"), "Goal");
const CalendarCategory = NamedLazy(() => import("../pages/CalendarCategory"), "CalendarCategory");
const StartChallenge = NamedLazy(() => import("../pages/StartChallenge"), "StartChallenge");

export const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "/",
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Header
							leftIcon={<div style={{ width: "36px", height: "36px", background: "#D9D9D9" }}></div>}
						/>
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
								<Header leftIcon={<LeftIcon />} />
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
								<Header leftIcon={<LeftIcon />} />
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
						<Header leftIcon={<LeftIcon />} />
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
			}
		]
	}
]);
