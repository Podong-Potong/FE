import Row from "../../../common/Layouts/Row";
import { useAtom, useAtomValue } from "jotai";
import Typography from "../../../common/Typography/Typography";
import { ReactComponent as Close } from "../../../../assets/icons/common/close.svg";
import CategoryBtn from "./CategoryBtn";
import * as S from "./style";
import useModalStore from "./useModalStore";
import { isOpenModal, selectCategory, selectSpentType } from "./state/selectCategoryAtom";
import { CategoryType, SaveCategoryType } from "../../../../type/category";

export default function SelectCategory() {
	const [isOpenModalState, setIsOpenModalState] = useAtom(isOpenModal);
	const [selectCategoryAtom, setSelectCategoryAtom] = useAtom(selectCategory);
	const selectBtn = useAtomValue(selectSpentType);

	const handleApplyFilter = () => {
		setIsOpenModalState(false);
	};
	return (
		<S.OverLay>
			<S.Modal>
				<Row horizonAlign="distribute" style={{ marginBottom: "26px" }}>
					{selectBtn === "out" ? (
						<Typography typoSize="Body1" color="neutral100">
							{"소비 카테고리"}
						</Typography>
					) : (
						<Typography typoSize="Body1" color="neutral100">
							{"수입 카테고리"}
						</Typography>
					)}

					<Close
						onClick={() => {
							setIsOpenModalState(false);
							setSelectCategoryAtom("");
						}}
					/>
				</Row>
				<Row gap={12} style={{ flexWrap: "wrap" }}>
					{selectBtn === "out"
						? CategoryType.map((val) => (
								<CategoryBtn
									key={val.name}
									name={val.name}
									onClick={() => {
										setSelectCategoryAtom(val.name);
										setIsOpenModalState(true);
									}}
									isSelect={selectCategoryAtom === val.name}
								/>
						  ))
						: SaveCategoryType.map((val) => (
								<CategoryBtn
									key={val.name}
									name={val.name}
									onClick={() => setSelectCategoryAtom(val.name)}
									isSelect={selectCategoryAtom === val.name}
								/>
						  ))}
				</Row>
				<S.ApplyFilter onClick={() => handleApplyFilter()}>
					<Typography typoSize="Button" color="primary">
						{"필터 적용하기"}
					</Typography>
				</S.ApplyFilter>
			</S.Modal>
		</S.OverLay>
	);
}
