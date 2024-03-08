import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const CMP_PROD_NODE = 'https://rpc.goerli.linea.build'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const cmpRpcProvider = new StaticJsonRpcProvider(CMP_PROD_NODE)

export default null
