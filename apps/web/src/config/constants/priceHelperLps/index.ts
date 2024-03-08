import { getFarmsPriceHelperLpFiles } from '@pancakeswap/farms/constants/priceHelperLps/getFarmsPriceHelperLpFiles'
import { ChainId } from '@pancakeswap/sdk'
import PoolsEthereumPriceHelper from './pools/1'
import PoolsGoerliPriceHelper from './pools/5'
import PoolsBscPriceHelper from './pools/56'
import PoolsCmpPriceHelper from './pools/256256'
import PoolsCmpTestnetPriceHelper from './pools/59140'
import PoolsBscTestnetPriceHelper from './pools/97'

export { getFarmsPriceHelperLpFiles }

export const getPoolsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BSC:
      return PoolsBscPriceHelper
    case ChainId.BSC_TESTNET:
      return PoolsBscTestnetPriceHelper
    case ChainId.CMP:
      return PoolsCmpPriceHelper
    case ChainId.VANAR_TESTNET:
      return PoolsCmpTestnetPriceHelper
    case ChainId.ETHEREUM:
      return PoolsEthereumPriceHelper
    case ChainId.GOERLI:
      return PoolsGoerliPriceHelper
    default:
      return []
  }
}
