import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { Alert } from "@chakra-ui/react";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";


const useSignUp = () => {

	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
	] = useCreateUserWithEmailAndPassword(auth);

	const showToast = useShowToast();

	const loginUser = useAuthStore(state => state.login)
	// const logoutUser = useAuthStore(state => state.logout)

	const signup = async (inputs) => {
		if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullName) {
			showToast("Error", "Please fill all the fields", "error");
			return;
		}

		// const usersRef = collection(firestore, "users");

		// const q = query(usersRef, where("username", "==", inputs.username));
		// const querySnapshot = await getDocs(q);

		// if (!querySnapshot.empty) {
		// 	Alert("Error", "Username already exists", "error");
		// 	return;
		// }

		try {
			const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
			if (!newUser && error) {
				showToast("Error", error.message, "error");
				return;
			}
			if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email: inputs.email,
					username: inputs.username,
					fullName: inputs.fullName,
					bio: "",
					profilePicURL: "",
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				loginUser(userDoc);
			}
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	return { loading, error, signup };
}

export default useSignUp