import { PinataSDK } from "pinata-web3";

const pinata = new PinataSDK({
  pinataJwt: process.env.PINATA_JWT,
  pinataGateway: "red-cautious-crayfish-986.mypinata.cloud",
});

const upload = pinata.upload.json({
  name: "Bearathon",
  description: "A Bear NFT hackathon",
  image: "https://red-cautious-crayfish-986.mypinata.cloud/ipfs/bafybeifbj4rpgvedaqbfzgcs5nczibjwsaogjfwu7ncc4xtxyumxe4l4ha/photo_1_2025-02-09_11-02-17.jpg"
})
