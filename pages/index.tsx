import dynamic from 'next/dynamic'
import SplashScreen from '@components/Splash'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/pages/index'),
  { ssr: false ,loading: () => <SplashScreen/>}
)

function DefaultPage() {
  return <DynamicComponentWithNoSSR />
}

export default DefaultPage