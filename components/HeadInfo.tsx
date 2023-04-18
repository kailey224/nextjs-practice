import Head from 'next/head'

export default function HeadInfo({title}: any) {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </>
    )
  }

