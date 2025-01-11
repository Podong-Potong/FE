import Row from "../../../common/Layouts/Row";
import { useAtom, useAtomValue } from "jotai";
import Typography from "../../../common/Typography/Typography";
import { ReactComponent as Close } from "../../../../assets/icons/common/close.svg";
import CategoryBtn from "./CategoryBtn";
import * as S from "./style";
import useModalStore from "./useModalStore";
import { selectCategory, selectSpentType } from "./state/selectCategoryAtom";

export default function SelectCategory() {
	const { closeModal } = useModalStore();
	const [selectCategoryAtom, setSelectCategoryAtom] = useAtom(selectCategory);
	const selectBtn = useAtomValue(selectSpentType);

	const spentCategory = [
		{ icon: "📚", name: "교육 및 자기계발" },
		{ icon: "☕", name: "커피 및 디저트" },
		{ icon: "🎭", name: "뮤지컬 및 영화" },
		{ icon: "💄", name: "뷰티" },
		{ icon: "🍔", name: "패스트푸드" },
		{ icon: "💻", name: "전자기기 및 IT" },
		{ icon: "✈️", name: "여행 및 레저" },
		{ icon: "🤸‍♀️", name: "건강 및 웰니스" },
		{ icon: "🚖", name: "교통 및 이동" },
		{ icon: "👗", name: "옷 쇼핑" },
		{ icon: "🛵", name: "배달 음식" },
		{ icon: "✳️", name: "기타" },
		{ icon: "🪙", name: "저금 및 저축" }
	];

	const saveCategory = [
		{ icon: "🤑", name: "급여" },
		{ icon: "🤝", name: "상여금" },
		{ icon: "🛵", name: "아르바이트" },
		{ icon: "🛍️", name: "중고거래" },
		{ icon: "✉️", name: "용돈" },
		{ icon: "💻", name: "금융수입" },
		{ icon: "❤️‍🩹", name: "보험금" },
		{ icon: "🏫", name: "장학금" },
		{ icon: "🤳", name: "SNS" },
		{ icon: "📱", name: "앱테크" },
		{ icon: "✳️", name: "기타" }
	];

	return (
		<S.OverLay>
			<S.Modal>
				<Row horizonAlign="distribute" style={{ marginBottom: "26px" }}>
					{selectBtn === "out" ? <Typography typoSize="Body1" color="neutral100">
						{"소비 카테고리"}
					</Typography>: <Typography typoSize="Body1" color="neutral100">
						{"수입 카테고리"}
					</Typography>}
                    
					<Close
						style={{ marginRight: "25px" }}
						onClick={() => {
							closeModal();
							setSelectCategoryAtom("");
						}}
					/>
				</Row>
				<Row gap={12} style={{ flexWrap: "wrap" }}>
					{selectBtn === "out"
						? spentCategory.map((val) => (
								<CategoryBtn
									key={val.name}
									icon={val.icon}
									name={val.name}
									onClick={() => setSelectCategoryAtom(val.name)}
									isSelect={selectCategoryAtom === val.name}
								/>
						  ))
						: saveCategory.map((val) => (
								<CategoryBtn
									key={val.name}
									icon={val.icon}
									name={val.name}
									onClick={() => setSelectCategoryAtom(val.name)}
									isSelect={selectCategoryAtom === val.name}
								/>
						  ))}
				</Row>
			</S.Modal>
		</S.OverLay>
	);
}
