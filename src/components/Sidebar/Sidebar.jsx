import { Avatar, Box, Flex,Link,Text, Tooltip} from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { CreatePostLogo, NotificationsLogo, SearchLogo, SocialsLogo, SocialsMobileLogo } from '../../assets/constant'

import {AiFillHome} from "react-icons/ai"

import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  
  const sidebarItems=[
    {
      icon:<AiFillHome size={25}/>,
      text:"Home",
      link:"/",
    },
    {
      icon:<SearchLogo/>,
      text:"Search",
      link:"/",
    },
    {
      icon:<NotificationsLogo/>,
      text:"Notification",
      link:"/",
    },
    {
      icon:<CreatePostLogo/>,
      text:"Post",
      link:"/",
    },
    // {
    //   icon:<Avatar size={"sm"} name='Yash Anbhore' src='/profilepic.png'/>,
    //   text:"Home",
    //   link:"/",
    // },
  ]

  return (
    <Box
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{ base: 2, md: 4 }}
  >
    <Flex direction={"column"} gap={10} w='full'  height={"full"}>
      <Link to={"/"} as={RouterLink} pl={2} display={{ base: "none", md: "block" }} cursor='pointer'>
        <Text fontSize={40} fontFamily={"Billbong"} >
          Socials
        </Text>
      </Link>
      <Link
        to={"/"}
        as={RouterLink}
        p={2}
        display={{ base: "block", md: "none" }}
        borderRadius={6}
        _hover={{
          bg: "whiteAlpha.200",
        }}
        w={10}
        cursor='pointer'
      >
        <Text fontSize={40} pl={0.7} fontFamily={"Billbong"} color={"white.700"} >
          S
        </Text>
      </Link>
      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        {sidebarItems.map((item, index) => (
          <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement='right'
            ml={1}
            openDelay={500}
            display={{ base: "block", md: "none" }}
          >
            <Link
              display={"flex"}
              to={item.link || null}
              as={RouterLink}
              alignItems={"center"}
              gap={4}
              _hover={{ bg: "whiteAlpha.400" }}
              borderRadius={6}
              p={2}
              w={{ base: 10, md: "full" }}
              justifyContent={{ base: "center", md: "flex-start" }}
            >
              {item.icon}
              <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
            </Link>
          </Tooltip>
        ))}
      </Flex>
      <Tooltip
        hasArrow
        label={"Logout"}
        placement='right'
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Link
          display={"flex"}
          to={"/auth"}
          as={RouterLink}
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          mt={"auto"}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <BiLogOut size={25} />
          <Box display={{ base: "none", md: "block" }}>Logout</Box>
        </Link>
      </Tooltip>
    </Flex>
  </Box>
  )
}

export default Sidebar;