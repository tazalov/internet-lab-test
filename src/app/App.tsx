import { Faq } from '@/entities/Faq'
import { HowItWork } from '@/entities/HowItWork'
import { MainBlock } from '@/entities/MainBlock'
import { Statistic } from '@/entities/Statistic'
import { SendUserData } from '@/features/SendUserData'
import { MainLayout } from '@/widgets/MainLayout'
import { Reviews } from '@/widgets/Reviews'

function App() {
  return (
    <MainLayout>
      <MainBlock />
      <HowItWork />
      <Reviews />
      <Faq />
      <Statistic />
      <SendUserData />
    </MainLayout>
  )
}

export default App
