import NFTPage from 'components/nfts'
import React from 'react'
import { KudosType, NFTType, PoapType } from 'types'

const nfts = (props: {
  nfts: NFTType[]
  poaps: PoapType[]
  kudos: KudosType[]
}) => {
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
  const kudosResponse = await fetch(process.env.KUDOS_DATA as string)
  const maticNfts = await maticNftsResponse.json()
  const ethNfts = await ethNftsResponse.json()
  const poaps = await poapsResponse.json()
  const kudos = await kudosResponse.json()
  return {
    props: {
      nfts: [...ethNfts.results, ...maticNfts.results],
      poaps,
      kudos: kudos.highlightedKudoses
    },
    revalidate: 86400
  }
}
