import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import NotificationProvider from '@/providers/NotificationProvider'
import PaddedContainerProvider from '@/providers/PaddedContainerProvider'

const AppLayout = () => {
  return (
    <>
      <Navigation>
      </Navigation>
      <NotificationProvider>
        <PaddedContainerProvider>
          <Content></Content>
        </PaddedContainerProvider>
      </NotificationProvider>
      <Footer />
    </>
  )
}

export default AppLayout
