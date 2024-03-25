import { create } from "zustand";

const useUserProfileStore = create((set) => ({
	userProfile: null,
	setUserProfile: (userProfile) => set({ userProfile }),

	// this is used to update the number of posts in the profile page
	addPost: (post) =>
		set((state) => ({
			userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] },
		})),

// [...state.userProfile.posts]-It ensures that all the existing posts are included in the new array.

	deletePost: (postId) =>
		set((state) => ({
			userProfile: {
				...state.userProfile,
				posts: state.userProfile.posts.filter((id) => id !== postId),
			},
		})),
}));

export default useUserProfileStore;