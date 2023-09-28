import { Chain } from '../../constants'
import { getAddressLink, getTransactionLink } from '../../helpers/chainExplorerLink'

const maalscanUrl = 'https://maalscan.io'
const testMaalscanUrl = 'https://testnet.maalscan.io'

export const MaalMainnet: Chain = {
  chainId: 786,
  chainName: 'MaalChain Mainnet',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0x6a2BC99Fe00CA51F8E0469441261e0404026Bc3E',
  multicall2Address: '0xD729Ffd50f22Ff3Ce960288AF8baCa24AE7F1ce4',
  nativeCurrency: {
    name: 'MaalChain Mainnet',
    symbol: 'MAAL',
    decimals: 18,
  },
  blockExplorerUrl: maalscanUrl,
  getExplorerAddressLink: getAddressLink(maalscanUrl),
  getExplorerTransactionLink: getTransactionLink(maalscanUrl),
}

export const MaalTestnet: Chain = {
  chainId: 880,
  chainName: 'MaalChain Testnet',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0x180754d69580d238799869dd957Dc52D45c91B57',
  multicall2Address: '0xB27aBE2eaC236270fd63E7931b77B801C6c10944',
  nativeCurrency: {
    name: 'MaalChain Testnet',
    symbol: 'MAAL',
    decimals: 18,
  },
  blockExplorerUrl: testMaalscanUrl,
  getExplorerAddressLink: getAddressLink(testMaalscanUrl),
  getExplorerTransactionLink: getTransactionLink(testMaalscanUrl),
}

export default {
  MaalMainnet,
  MaalTestnet,
}
