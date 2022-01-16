import QuotePage from '@components/QuotePage'
import {Page } from '@components/Page'
import dynamic from 'next/dynamic'
import { getQuote } from '@lib/getQuote'
import RandomQuote from '@components/RandomQuote'

const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/pages/SetUpProfile'),
  { ssr: false ,loading: () =><RandomQuote/> }
)

function DefaultPage() {
  return <DynamicComponentWithNoSSR />
}

export default DefaultPage