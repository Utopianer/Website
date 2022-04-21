import NFTPage from 'components/nfts'
import React from 'react'
import { NFTType, PoapType } from 'types'

const nfts = (props: { nfts: NFTType[]; poaps: PoapType[] }) => {
  return <NFTPage {...props} />
}

export default nfts

export async function getStaticProps() {
  const maticNftsResponse = await fetch(
    `${process.env.NFTS_DATA as string}&network=matic`
  )
  const ethNftsResponse = await fetch(
    `${process.env.NFTS_DATA as string}&network=ethereum`
  )
  const poapsResponse = await fetch(process.env.POAP_DATA as string)
  const maticNfts = await maticNftsResponse.json()
  const ethNfts = await ethNftsResponse.json()
  const poaps = await poapsResponse.json()
  return {
    props: {
      nfts: [...ethNfts.results, ...maticNfts.results],
      poaps
    },
    revalidate: 86400
  }
}
