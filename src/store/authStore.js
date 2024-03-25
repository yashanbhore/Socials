import { create } from "zustand";

// The store's initial state is set with a user key. The value of user is retrieved from the browser's localStorage

const useAuthStore = create((set) => ({
	user: JSON.parse(localStorage.getItem("user-info")),
	//use to set Login
	login: (user) => set({ user }),
	//use to logout
	logout: () => set({ user: null }),
	//uset to set the user object
	setUser: (user) => set({ user }),
}));

export default useAuthStore;

