import { Box, Flex, Image, Input, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

import React from 'react'
import { useNavigate } from "react-router-dom";

const Authform = () => {
    const navigate=useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [inputs,setInputs]=useState({
        email:'',
        password:'',
        confirmpassword:'',
    });
    const handleAuth=()=>{
        if(!inputs.email || !inputs.password){
            alert("Enter all details");
            return;
        }

        navigate("/");
    }

    return (
        <>
            <Box borderRadius={40} padding={5} >
                <VStack spacing={4}>

                {/* {isLogin ? <Login /> : <Signup />} */}


                    {!isLogin ? <Text fontFamily="sans-serif" pb={"1rem"} fontSize="2rem">Sign up to Socials</Text> :
                        <Text fontFamily="sans-serif" pb={"1rem"} fontSize="2rem">Login to Socials</Text>}


                    <Input placeholder="Enter your Email" fontSize={14} type="email" value={inputs.email}
                    onChange={(e) => setInputs({...inputs,email:e.target.value})}
                    />
                    <Input placeholder="Password" fontSize={14} type="email" value={inputs.password}
                    onChange={(e) => setInputs({...inputs,password:e.target.value})}
                    
                    />

                    {!isLogin ? <Input placeholder="Confirm Password"value={inputs.confirmpassword}
                    onChange={(e) => setInputs({...inputs,confirmpassword:e.target.value})} fontSize={14} type="email" /> : null}



                    {/* {isLogin ? <Login /> : <Signup />} */}

                    {/* ---------------- OR -------------- */}
                    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text mx={1} color={"white"}>
                            OR
                        </Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>

                    <Button
                        w={"full"}
                        colorScheme='blue'
                        size={"sm"}
                        fontSize={14}
                        onClick={handleAuth}
                    >
                        {isLogin ? "Login" : "Sign UP"}
                    </Button>

                    {/* Dont Have an acocunt Sign up */}
                    <Flex alignItems={"center"} justifyContent={"center"}>
                        <Box mx={2} fontSize={14}>
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                        </Box>
                        <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                            {isLogin ? "Sign up" : "Log in"}
                        </Box>
                    </Flex>

                    {/* <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} /> */}
                </VStack>
            </Box>


        </>
    )
}

export default Authform