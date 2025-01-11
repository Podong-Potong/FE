import { useNavigate, useLocation } from "react-router-dom";

import Typography from "../Typography/Typography";
import { MenuItem, MenuList } from "./NavigationBarStyle";

// 아이콘리스트
import { ReactComponent as Home } from "../../../assets/icons/navigate/ci_house-01.svg";
import { ReactComponent as HomeFill } from "../../../assets/icons/navigate/ci_house_fill-01.svg";
import { ReactComponent as Calendar } from "../../../assets/icons/navigate/ci_calendar-week.svg";
import { ReactComponent as CalendarFill } from "../../../assets/icons/navigate/ci_calendar-week_fill.svg";
import { ReactComponent as Luck } from "../../../assets/icons/navigate/lucide_clover.svg";
import { ReactComponent as LuckFill } from "../../../assets/icons/navigate/lucide_clover_fill.svg";
import { ReactComponent as MyPage } from "../../../assets/icons/navigate/ci_user-02.svg";
import { ReactComponent as MyPageFill } from "../../../assets/icons/navigate/ci_user-02_fill.svg";
import { useState } from "react";
import Column from "./Column";

export const NavigationBar = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [activeMenu, setActiveMenu] = useState(location.pathname);
	const menus = [
		{ name: "홈", path: "/", icon: activeMenu === "/" ? HomeFill : Home },
		{ name: "소비 달력", path: "/calendar", icon: activeMenu === "/calendar" ? CalendarFill : Calendar },
		{ name: "리워드", path: "/reward", icon: activeMenu === "/reward" ? LuckFill : Luck },
		{ name: "마이페이지", path: "/mypage", icon: activeMenu === "/mypage" ? MyPageFill : MyPage }
	];

	return (
		<Column horizonAlign="center" verticalAlign="center">
			<MenuList>
				{menus.map((menu, idx) => {
					const isActive = activeMenu === menu.path;
					return (
						<MenuItem
							key={idx}
							active={isActive}
							onClick={() => {
								navigate(menu.path);
								setActiveMenu(menu.path);
							}}
						>
							<menu.icon />
							<Typography color={isActive ? "primary60": "neutral60"} typoSize="Body1">
								{menu.name}
							</Typography>
						</MenuItem>
					);
				})}
			</MenuList>
		</Column>
	);
};
