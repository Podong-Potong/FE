import { create } from "zustand";

interface ModalState {
	isOpenModal: boolean;
	openModal: () => void;
	closeModal: () => void;
}

// Zustand 스토어 생성
const useModalStore = create<ModalState>((set) => ({
	isOpenModal: false,
	openModal: () => set({ isOpenModal: true }),
	closeModal: () => set({ isOpenModal: false })
}));

export default useModalStore;
