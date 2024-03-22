import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { useLocation } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/firebase'

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user,loading,error]=useAuthState(auth);
  const canRenderSiderbar = pathname !== '/auth' &&user;
  return (
    <Flex >

      {/* Instead of adding the Sidebar component to every page, 
         we can add it only once to the PageLayout component and wrap the children with it. 
         This way, we can have a sidebar on every page except the AuthPage.
         (See App.jsx
                  <PageLayout>
                    <Routes>
                      <Route path='/' element={<HomePage/>}/>
                      <Route path='/auth' element={<AuthPage/>}/>
                    </Routes>
                </PageLayout>)
         */}


      {/* If not /auth - SideBar */}
      {canRenderSiderbar ?
        (<Box w={{ base: "70", md: "240px" }}>
          <Sidebar />
        </Box>) : null}


      {/* To see the content of page, other than sidebar   (THe right side parrt) */}
      <Box flex={1}
        // The size of Sidebar is 70,240 so the right part is 100%-70 and 100%-240
        w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout