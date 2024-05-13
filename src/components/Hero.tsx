import React, { useState } from 'react';
import { SuiWallet, generateMnemonic } from '@mysten/sui.js';

// Updated HeroProps interface
interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, onButtonClick }) => {
  const [wallet, setWallet] = useState<typeof SuiWallet | null>(null);

  const createWallet = () => {
    const mnemonic = generateMnemonic();
    const newWallet = SuiWallet.fromMnemonic(mnemonic, 'testnet');
    setWallet(newWallet);
    console.log("Wallet created with address:", newWallet.address);
    return mnemonic;
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={imageUrl} alt="Hero Image" />
      <button onClick={() => { onButtonClick(); createWallet(); }}>Create Wallet</button>
      {wallet && <p>Wallet Address: {wallet.address}</p>}
    </div>
  );
};

export default Hero;
