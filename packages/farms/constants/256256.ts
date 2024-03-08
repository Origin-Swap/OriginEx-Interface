import { mainnetTokens } from '@pancakeswap/tokens'
import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'TW',
    lpAddress: '0x49Ca6d0e819E83471575bD4e140ab9a9f4e954d5',
    token: mainnetTokens.syrup,
    quoteToken: mainnetTokens.wcmp,
  },
  {
    pid: 1,
    lpSymbol: 'TWS-WCMP LP',
    lpAddress: '0xc1f595579c46acfb33902db3d7cff34bd6355615',
    token: mainnetTokens.tw,
    quoteToken: mainnetTokens.wcmp,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
