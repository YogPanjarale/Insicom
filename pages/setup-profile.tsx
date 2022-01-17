import dynamic from 'next/dynamic'
import RandomQuote from '@components/RandomQuote'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/pages/SetUpProfile'),
  { ssr: false ,loading: () =><RandomQuote/> }
)

function DefaultPage() {
  return <DynamicComponentWithNoSSR />
}

export default DefaultPage