import { Avatar, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
	return (
		<Flex justifyContent={"space-between"} alignItems={"center"} pb={5} w={"full"}>
			<Flex alignItems={"center"} gap={2}>
				<Avatar name='Y' size={"md"} alt="Bankai"  borderRadius={200} borderColor={"white"}/>
				<Text fontSize={12} fontWeight={"bold"}>
					Yash Anbhore
				</Text>
			</Flex>
			<Link
				as={RouterLink}
				to={"/auth"}
				fontSize={14}
				fontWeight={"medium"}
				color={"blue.400"}
				style={{ textDecoration: "none" }}
				cursor={"pointer"}
			>
				Log out
			</Link>
		</Flex>
	);
};

export default SuggestedHeader;