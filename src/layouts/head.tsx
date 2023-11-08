import Head from "next/head";

export default function HeadLayout() {
  return (
    <Head>
      {/* Meta tags */}
      <title>Hefore | Right Here,Before While</title>
      <meta
        name="description"
        content="Polygon-based NFT Marketplace - Explore the best platform for buying and selling unique digital assets, art, and collections. Join the world of NFTs with original artworks, rare collectibles, and one-of-a-kind digital treasures."
      />
      <meta name="keywords" content="Blockchain,Nft" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/logo.webp" />

      {/* Open Graph tags */}
      {/* Open Graph is a technology that allows web pages to become more rich and engaging when shared on social media platforms such as Facebook, Twitter, and LinkedIn. By adding Open Graph meta tags to your web page, you can control how your page appears when it's shared on social media, including the title, description, and image that are displayed. */}
      <meta property="og:title" content="Hefore | Right Here,Before While" />
      <meta
        property="og:description"
        content="Polygon-based NFT Marketplace - Explore the best platform for buying and selling unique digital assets, art, and collections. Join the world of NFTs with original artworks, rare collectibles, and one-of-a-kind digital treasures."
      />
      <meta property="og:image" content="" />
      <meta property="og:type" content="website" />

      {/* Twitter tags */}
      {/* Twitter meta tags are similar to Open Graph tags, but are used specifically for Twitter. They allow you to control how your web page appears when it's shared on Twitter, including the title, description, and image that are displayed. */}
      <meta name="twitter:title" content="Hefore | Right Here,Before While" />
      <meta
        name="twitter:description"
        content="Polygon-based NFT Marketplace - Explore the best platform for buying and selling unique digital assets, art, and collections. Join the world of NFTs with original artworks, rare collectibles, and one-of-a-kind digital treasures."
      />
    </Head>
  );
}
