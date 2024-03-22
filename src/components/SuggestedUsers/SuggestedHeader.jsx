import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

{/* AuthUser not working when i login  */}


const SuggestedHeader = () => {
	const {handleLogout,isLoggingOut}=useLogout();
	const authUser=useAuthStore((state)=>state.user);
	if (!authUser) return null;

	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} pb={5} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Link to={`${authUser.username}`} >
				<Avatar  size={"md"} alt="Bankai"  borderRadius={200} borderColor={"white"} src={authUser.profilePicURL}/>
				</Link>
				<Link to={`${authUser.username}`} >

					<Text fontSize={12} fontWeight={"bold"}>
						{authUser.username}       
					</Text>
				</Link>
			</Flex>
			<Button
				size={"xs"}
				background={"transparent"}
				_hover={{"background":"transparent"}}
				fontSize={14}
				fontWeight={"medium"}
				color={"blue.400"}
 				cursor={"pointer"}
				 isLoading={isLoggingOut}
				onClick={handleLogout}
			>
				Log out
			</Button>
		</Flex>
	);
};

export default SuggestedHeader;