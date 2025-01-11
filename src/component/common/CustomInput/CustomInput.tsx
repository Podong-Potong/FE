import styled from "styled-components";
import Typography from "../Typography/Typography";
import Row from "../Layouts/Row";
import useFormatMoney from "../../../hook/useFormatMoney";
import { useState } from "react";
import { atom, useAtom } from "jotai";

export const inputMoney = atom(0);
export default function CustomInput() {
	const [money, setMoney] = useAtom(inputMoney);

	return (
		<InputMoneyWrap horizonAlign="distribute" onClick={(ev) => ev.stopPropagation()}>
			<Input
				type="text"
				inputMode="numeric"
				pattern="[0-9]*"
				onInput={(e) => {
					e.currentTarget.value.replace(/[^0-9]/g, "");
				}}
				maxLength={9}
				onChange={(e) => setMoney(Number(e.target.value.replace(",", "")))}
				value={money.toLocaleString("ko-KR")}
			/>
			<Typography typoSize="H6_B" color="neutral100">
				{"원"}
			</Typography>
		</InputMoneyWrap>
	);
}

export const InputMoneyWrap = styled(Row)`
	border-bottom: 2px solid ${({ theme }) => theme.neutral60};
	width: 80%;
	margin-top: 4px;
`;
export const Input = styled.input`
	width: 100%;
	border: 0;
	outline: none;
	font-size: 20px;
	font-weight: 700;
	line-height: 25px;
	padding: 8px 0px;

	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
