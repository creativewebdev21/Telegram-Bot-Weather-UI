import React from 'react'
import Head from "next/head"

function SeoHead(props: any) {
  const { description, image, title } = props
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={image} />
      <meta name="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="Weather Telegram Bot" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href={image} />
      <link rel="apple-touch-icon" href={image} />
    </Head>
  )
}

export default SeoHead
