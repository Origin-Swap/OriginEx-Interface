import { ChainId } from '@pancakeswap/sdk'
import FarmsBscPriceHelper from './56'
import FarmsBscTestnetPriceHelper from './97'
import FarmsCmpPriceHelper from './256256'
import FarmsCmpTestnetPriceHelper from './59140'
import FarmsEthereumPriceHelper from './1'
import FarmsGoerliPriceHelper from './5'

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BSC:
      return FarmsBscPriceHelper
    case ChainId.BSC_TESTNET:
      return FarmsBscTestnetPriceHelper
    case ChainId.CMP:
      return FarmsCmpPriceHelper
    case ChainId.VANAR_TESTNET:
      return FarmsCmpTestnetPriceHelper
    case ChainId.ETHEREUM:
      return FarmsEthereumPriceHelper
    case ChainId.GOERLI:
      return FarmsGoerliPriceHelper
    default:
      return []
  }
}
