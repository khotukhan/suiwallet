// sui-js.d.ts
declare module '@mysten/sui.js' {
    export class SuiWallet {
      static fromMnemonic(mnemonic: string, network: string): SuiWallet;
      address: string;
      // Add other methods and properties you need here
    }
  
    export function generateMnemonic(): string;
  }
  