import { Button,Box, Container, Flex,  Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <Container maxW={"container.lg"} my={4}>
            <Flex w={"full"} justifyContent={{ base: "center", sm: "space-between" }} alignItems={"center"}>
                {/* <Image src='/logo.png' h={20} display={{ base: "none", sm: "block" }} cursor={"pointer"} /> */}
                <Text fontSize={30} fontFamily={"Billbong"} >
                    Socials
                </Text>
                <Flex gap={4} >
                    <Link to='/auth'>
                        <Button colorScheme={"blue"} size={"sm"}>
                            Login
                        </Button>
                    </Link>
                    <Link to='/auth'>
                        <Button variant={"outline"} size={"sm"}>
                            Signup
                        </Button>
                    </Link>
                </Flex>

            </Flex>
            <Box flex={2} h={"1px"}  bg={"blue.400"} />

        </Container>
    );
};

export default Navbar;