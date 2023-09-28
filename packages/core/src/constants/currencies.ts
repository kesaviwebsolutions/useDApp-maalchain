import { NativeCurrency, Token } from '../model'
import { Mainnet, Kovan } from '../model/chain/ethereum'
import { BSC, BSCTestnet } from '../model/chain/bsc'
import { MaalMainnet, MaalTestnet } from '../model/chain/MaalChain'

export const Ether = new NativeCurrency('Ether', 'ETH', Mainnet.chainId)
export const Dai = new Token('Dai', 'DAI', Mainnet.chainId, '0x6B175474E89094C44Da98b954EedeAC495271d0F')

export const KovanEther = new NativeCurrency('Kovan Ether', 'KETH', Kovan.chainId)
export const KovanDai = new Token('Dai', 'DAI', Kovan.chainId, '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa')

export const BNB = new NativeCurrency('Binance Coin', 'BNB', BSC.chainId)
export const BUSD = new Token('Binance USD', 'BUSD', BSC.chainId, '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56')

export const TestBNB = new NativeCurrency('Test Binance Coin', 'TBNB', BSCTestnet.chainId)
export const TestBUSD = new Token(
  'Test Binance USD',
  'TBUSD',
  BSCTestnet.chainId,
  '0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47'
)

export const TestMaal = new NativeCurrency('MAAL Test Coin', 'MAAL', MaalTestnet.chainId)
export const Maal = new NativeCurrency('MAAL', 'MAAL', MaalMainnet.chainId)

export const NATIVE_CURRENCY = {
  [Mainnet.chainId]: Ether,
  [Kovan.chainId]: KovanEther,
  [BSC.chainId]: BNB,
  [BSCTestnet.chainId]: TestBNB,
  [MaalTestnet.chainId]: TestMaal,
  [MaalMainnet.chainId]: Maal,
}
