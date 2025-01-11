export default function useFormatMoney() {
	const formatMoney = (money: string) => {
		if (!money || typeof money !== "string") return;
		return money.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	return { formatMoney };
}
