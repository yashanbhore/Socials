import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import ProfileHeader from '../../components/Profile/ProfileHeader'
import ProfileTabs from '../../components/Profile/ProfileTabs'
import ProfilePost from '../../components/Profile/ProfilePost'
import ProfilePosts from '../../components/Profile/ProfilePosts'

const ProfilePage = () => {
  return (
        <Container maxW={"container.lg"} py={5}>
            
            <Flex>
                <ProfileHeader/>
            </Flex>

            <Flex direction={'column'}>
                <ProfileTabs/>
                <ProfilePosts/>
            </Flex>

        </Container>
    )
}

export default ProfilePage