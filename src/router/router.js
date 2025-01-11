import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { NamedLazy } from "../utils/NamedLazy";
import { Layout } from "../component/common/Layouts/Layouts";
import { Challenge } from "../pages/Challenge";

// 동적으로 로드할 페이지
const Main = NamedLazy(() => import("../pages/Main"), "Main");
const Calendar = NamedLazy(() => import("../pages/Calendar"), "Calendar");
const Reward = NamedLazy(() => import("../pages/Reward"), "Reward");
const MyPage = NamedLazy(() => import("../pages/MyPage"), "MyPage");

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
				element: (
					<Suspense fallback={<div>Loading...</div>}>
						<Calendar />
					</Suspense>
				)
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
			}
		]
	}
]);

// {
// 	path: "calendar",
// 	element: (
// 		<Suspense fallback={<div>Loading...</div>}>
// 			<Calendar />
// 		</Suspense>
// 	)
// }
