import { rinkeby, mainnet, goerli } from 'wagmi/chains'
import { Chain } from 'wagmi'

export const vanar: Chain = {
  id: 78600,
  name: 'Vanar Testnet',
  network: 'VanarChain',
  rpcUrls: {
    default: 'https://rpc-vanguard.vanarchain.com',
  },
  nativeCurrency: { name: 'Vanguard', symbol: 'VG', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'VanarScan',
      url: 'https://explorer-vanguard.vanarchain.com/',
    },
  },
}

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}

export const linea: Chain = {
  id: 59140,
  name: 'Linea Testnet',
  network: 'Linea',
  rpcUrls: {
    default: 'https://rpc.goerli.linea.build/',
  },
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'LineaScan',
      url: 'https://explorer.goerli.linea.build/',
    },
  },
}

export const zeta: Chain = {
  id: 7001,
  name: 'ZetaChain Testnet',
  network: 'ZETA TESTNET',
  rpcUrls: {
    default: 'https://api.athens2.zetachain.com/evm',
  },
  nativeCurrency: { name: 'Zetachain', symbol: 'ZETA', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'ZetaScan',
      url: 'https://explorer.zetachain.com/',
    },
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    public: 'https://bsc-dataseed1.binance.org',
    default: 'https://bsc-dataseed1.binance.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0x3dc18345e131a673e11401696a35e7927673eeea',
    blockCreated: 15921452,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: 'https://data-seed-prebsc-1-s3.binance.org:8545',
    default: 'https://data-seed-prebsc-1-s3.binance.org:8545',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0x3dc18345e131a673e11401696a35e7927673eeea',
    blockCreated: 17422483,
  },
  testnet: true,
}

export const cmpTestnet: Chain = {
  id: 512512,
  name: 'Caduceus Testnet',
  network: 'cmp_testnet',
  rpcUrls: {
    public: 'https://galaxy.block.caduceus.foundation',
    default: 'https://galaxy.block.caduceus.foundation',
  },
  blockExplorers: {
    default: { name: 'CMP_Testnet Explorer', url: 'https://galaxy.scan.caduceus.foundation' },
  },
  nativeCurrency: {
    name: 'Cadeceus',
    symbol: 'CMP',
    decimals: 18,
  },
  multicall: {
    address: '0x3dc18345e131a673e11401696a35e7927673eeea',
    blockCreated: 10275844,
  },
}

export const cmpMainnet: Chain = {
  id: 256256,
  name: 'Caduceus Mainnet',
  network: 'cmp_mainnet',
  rpcUrls: {
    public: 'https://mainnet.block.caduceus.foundation',
    default: 'https://mainnet.block.caduceus.foundation',
  },
  blockExplorers: {
    default: { name: 'CMP_MAINNET Explorer', url: 'https://mainnet.scan.caduceus.foundation' },
  },
  nativeCurrency: {
    name: 'Cadeceus',
    symbol: 'CMP',
    decimals: 18,
  },
  multicall: {
    address: '0x3dc18345e131a673e11401696a35e7927673eeea',
    blockCreated: 10275844,
  },
}

export { rinkeby, mainnet, goerli }
