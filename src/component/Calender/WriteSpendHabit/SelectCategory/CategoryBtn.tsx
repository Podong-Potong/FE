import Row from "../../../common/Layouts/Row";
import Typography from "../../../common/Typography/Typography";
import * as S from "./style";
export default function CategoryBtn({
	icon,
	name,
	onClick,
	isSelect
}: {
	icon?: string;
	name: string;
	onClick?: () => void;
	isSelect?: boolean;
}) {
	console.log(";;test", name);
	return (
		<S.CategoryBtnWrapper onClick={onClick} isSelect={isSelect}>
			<Row gap={12} horizonAlign="center" verticalAlign="center">
				{icon && icon}
				<Typography color="neutral100" typoSize="Subtitle3">
					{name}
				</Typography>
			</Row>
		</S.CategoryBtnWrapper>
	);
}
