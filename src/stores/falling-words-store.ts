import { createStore } from "zustand/vanilla";

type ToggleState = {
	isOn: boolean;
	toggle: () => void;
};

export const toggleStore = createStore<ToggleState>()((set, get) => ({
	isOn: false,
	toggle: () => set({ isOn: !get().isOn }),
}));
