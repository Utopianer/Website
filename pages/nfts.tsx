import Container from 'components/Container'
import Tooltip from 'components/Tooltip'
import React from 'react'
import { NFTType, PoapType } from 'types'

const ExternalLink = ({ href, name }: { href: string; name: string }) => (
  <Tooltip placement="bottom" content={name}>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="absolute p-1 bg-gray-900 rounded-lg outline-none cursor-default bottom-2 right-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </a>
  </Tooltip>
)

const nfts = ({ nfts, poaps }: { nfts: NFTType[]; poaps: PoapType[] }) => {
  return (
    <Container title="NFTs" description="NFT collections of sasid.eth">
      <div className="grid w-full max-w-2xl grid-cols-2 gap-4 mx-auto mb-16 md:grid-cols-4">
        {nfts?.map(
          (nft, idx) =>
            nft.metadata.image_url && (
              <span key={idx} className="relative overflow-hidden">
                <ExternalLink name={nft.metadata.name} href={nft.permalink} />
                <img
                  className="h-full bg-gray-100 rounded-lg dark:bg-gray-800"
                  src={nft.metadata.image_url}
                  alt=""
                  draggable={false}
                />
              </span>
            )
        )}
        {poaps?.map((poap, idx) => (
          <span key={idx} className="relative overflow-hidden">
            <ExternalLink
              name={poap.event.name}
              href="https://app.poap.xyz/scan/0x01d79BcEaEaaDfb8fD2F2f53005289CFcF483464"
            />
            <img
              className="h-full bg-gray-100 rounded-lg dark:bg-gray-800"
              src={poap.event.image_url}
              alt=""
              draggable={false}
            />
          </span>
        ))}
      </div>
    </Container>
  )
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
    props: { nfts: [...ethNfts.results, ...maticNfts.results], poaps },
    revalidate: 86400 * 7 //  weekly
  }
}
