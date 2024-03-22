import { create } from "zustand";

// https://chat.openai.com/c/f57bab36-8dce-4700-bdd8-0fd2e3465c37

const useAuthStore = create((set) => ({
	user: JSON.parse(localStorage.getItem("user-info")),
	login: (user) => set({ user }),
	logout: () => set({ user: null }),
	setUser: (user) => set({ user }),
}));

export default useAuthStore;