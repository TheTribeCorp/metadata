const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Trump Hair Legacy";
const description = "Dive into the whimsical world of political memorabilia with 125 different 'Golden Strands of Power,' an exclusive NFT collection that captures the essence of Donald Trump's iconic hairstyle. Each NFT in this series is not just a piece of digital art; it's a token of cultural commentary, blending satire with digital ownership. Own a piece of history reimagined through the lens of modern blockchain technology. These NFTs are minted on the Ethereum network,  ensuring each piece's uniqueness and authenticity. Whether you're here for the investment, the art, or the sheer novelty, 'Golden Strands of Power' offers collectors a chance to hold a humorous yet thought-provoking slice of contemporary political iconography";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "HOT",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.hairoftrump.com",
  creators: [
    {
      address: "0x30410e8f654e8CfDE6A270e222eF168C87d7012F",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 120,
    layersOrder: [
      { name: "Hair" },

    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 1000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
