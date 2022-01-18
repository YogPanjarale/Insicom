import { MetaTags } from '@components/utils/metatags'
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => (
  <Html>
    <head>
        <title>Insicom</title>
        <link rel="icon" href="/assets/logo.svg" />
        <MetaTags title='Insicom' description="Insicom | Smarter Everyday" image_url='/assets/logo.svg' url={'https://insicom.vercel.app'}/>
        <Head/>
    </head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document