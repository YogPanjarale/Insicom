import dynamic from 'next/dynamic'
import RandomQuote from '@components/RandomQuote'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/pages/EditProfile'),
  { ssr: false ,loading: () =><RandomQuote/> }
)

function DefaultPage() {
  return <DynamicComponentWithNoSSR />
}

export default DefaultPage