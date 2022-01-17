import RandomQuote from '@components/RandomQuote'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/pages/logout'),
  { ssr: false ,
    loading: () =><RandomQuote/> 
}

)

function Page() {
  return <DynamicComponentWithNoSSR />
}

export default Page