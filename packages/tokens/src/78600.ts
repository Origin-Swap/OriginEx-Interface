import { ChainId, WBNB, ERC20Token } from '@pancakeswap/sdk'
import { BUSD_CMPTESTNET, ORIX_TESTNET } from './common'

export const testnetTokens = {
  weth: WBNB[ChainId.VANAR_TESTNET],
  line: ORIX_TESTNET,
  syrup: new ERC20Token(
    ChainId.VANAR_TESTNET,
    '0xbDda3DC688cF63C3cA7C76d2432A3b6B636c9ca0',
    18,
    'Syrup',
    'SyrupBar Token',
    'https://Lineswap.Exchange',
  ),
  usdt: new ERC20Token(
    ChainId.VANAR_TESTNET,
    '0x8D6E7213bad28E00156c7ecddEFac64Cc508CAD5',
    6,
    'USDT',
    'Testnet USD',
    'https://lineswap.exchange',
  ),
}
