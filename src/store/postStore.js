import { create } from "zustand";

const usePostStore = create((set) => ({
	posts: [],
	
	// Adds a new post to the beginning of the posts array. This ensures that the most recently created post appears first.{post,...state.posts}
	createPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),

	// Removes a post based on the given id. It filters out the post that matches the provided id.
	deletePost: (id) => set((state) => ({ posts: state.posts.filter((post) => post.id !== id) })),

	setPosts: (posts) => set({ posts }),

	
	addComment: (postId, comment) =>
		set((state) => ({
			posts: state.posts.map((post) => {
				if (post.id === postId) {
					return {
						...post,
						comments: [...post.comments, comment],
					};
				}
				return post;
			}),
		})),
}));

export default usePostStore;