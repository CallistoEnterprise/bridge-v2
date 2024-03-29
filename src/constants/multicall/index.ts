import MULTICALL_ABI from './abi.json'

declare enum ChainId {
  CLOTEST = 20729,
  CLOMAIN = 820,
  BSCTEST = 97,
  BSCMAIN = 56,
  KOVAN = 42,
  ETHMAIN = 1,
}

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.CLOTEST]: '0xDd2742Ba146A57F1F6e8F47235024ba1bd0cf568',
  [ChainId.CLOMAIN]: '0x8bA3D23241c7044bE703afAF2A728FdBc16f5F6f',
  [ChainId.BSCTEST]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A',
  [ChainId.BSCMAIN]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.ETHMAIN]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
