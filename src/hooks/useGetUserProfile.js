import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/userProfileStore";

const useGetUserProfile = (username) => {
	const [isLoading, setIsLoading] = useState(true);
	const showToast = useShowToast();
	const { userProfile, setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			try {
				const q = query(collection(firestore, "users"), where("username", "==", username));
				const querySnapshot = await getDocs(q);

				if (querySnapshot.empty) return setUserProfile(null);

				let userDoc;

				// {
				// 	"uid": "svh9ZXXCqQShQLGnV41KKLB8gEJ2",
				// 	"followers": [],
				// 	"username": "Aditya",
				// 	"createdAt": 1711106893040,
				// 	"fullName": "Aditya Anbhoer",
				// 	"bio": "",
				// 	"following": [],
				// 	"email": "Aditya@gmail.com",
				// 	"profilePicURL": "",
				// 	"posts": []
				// }

				// to itrate this 
				querySnapshot.forEach((doc) => {
					userDoc = doc.data();
				});

				setUserProfile(userDoc);
				console.log(userDoc);
			} catch (error) {
				showToast("Error", error.message, "error");
			} finally {
				setIsLoading(false); //The loading state is set to false using setIsLoading to indicate that data fetching is complete.
			}
		};

		getUserProfile();
	}, [setUserProfile, username, showToast]); 
	//The useEffect hook is utilized to perform side effects, such as fetching data. In this case, the effect is triggered when the username, setUserProfile, or showToast dependencies change

	return { isLoading, userProfile };
};

export default useGetUserProfile;