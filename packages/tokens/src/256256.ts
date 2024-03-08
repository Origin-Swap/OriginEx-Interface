import { ChainId, WBNB, ERC20Token } from '@pancakeswap/sdk'

export const mainnetTokens = {
  wcmp: WBNB[ChainId.CMP],
  tw: new ERC20Token(
  ChainId.CMP,
  '0x49Ca6d0e819E83471575bD4e140ab9a9f4e954d5',
  18,
  'TWS',
  'TowerSwap Token',
  'https://towerswap.finance',
  ),
  atws: new ERC20Token(
  ChainId.CMP,
  '0x7B7CdCa2DD5F45100bb702cc442e6F6BA7C0c134',
  18,
  'ATWS',
  'Airdrop TWS',
  'https://towerswap.finance',
  ),
  syrup: new ERC20Token(ChainId.CMP, '0x04f33cC38Ff069fD21CF9C785d40192485322868', 18, 'Syrup', 'Syrup Bar Token'),
  usdt: new ERC20Token(
    ChainId.CMP,
    '0x8bFB6654C5cE007DD8E9474928c9Bf5199a09055',
    18,
    'USDT',
    'Tether USDT',
    'https://towerswap.finance',
  ),
}
