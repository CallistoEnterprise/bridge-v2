import t from '../components/Header/types';
import { Assets } from './images';

export const links = [
    {
        type: t.DROPDOWN,
        name: "Services",
        link: "/services",
    },{
        type: t.DROPDOWN,
        name: "Ecosystem",
        link: "/ecosystem",
    },{
        type: "",
        name: "Blog",
        link: "/blog",
    },{
        type: "",
        name: "Cryptocurrency",
        link: "/cryptocurrency",
    },{
        type: "",
        name: "Get an audit",
        link: "/news",
    },{
        type: t.RECT,
        name: "Whitepaper",
        link: "/whitepaper",
    }
];

export const social = [
    {
        name: "telegram",
        link: "https://t.me/CallistoNet",
    },{
        name: "twitter",
        link: "https://twitter.com/CallistoSupport",
    },{
        name: "reddit",
        link: "https://www.reddit.com/r/CallistoCrypto/",
    },{
        name: "youtube",
        link: "https://www.youtube.com/c/CallistoNetwork",
    },{
        name: "instagram",
        link: "https://www.instagram.com/callisto.network",
    },{
        name: "facebook",
        link: "https://www.facebook.com/callistonetwork",
    },{
        name: "linkedin",
        link: "https://www.linkedin.com/company/callisto-network/",
    },{
        name: "bitcoin",
        link: "https://bitcointalk.org/index.php?topic=3380156.0",
    }
];

export const resources = [
    {
        name: "FAQ",
        link: "https://callisto.network/faq/",
    },{
        name: "Timeline",
        link: "https://callisto.network/timeline/",
    },{
        name: "Airdrop",
        link: "https://callisto.network/callisto-airdrop/",
    },{
        name: "Community Guidelines",
        link: "https://callisto.network/community-guidelines/",
    }
]

export const callisto = [
    {
        name: "Partners",
        link: "https://callisto.network/partners/",
    },{
        name: "GitHub",
        link: "https://github.com/EthereumCommonwealth/Callisto-Website",
    },{
        name: "Media Kit",
        link: "https://github.com/EthereumCommonwealth/Callisto-Media-Kit",
    },{
        name: "Contact us",
        link: "https://callisto.network/contact-us/",
    },{
        name: "Want to sell your CLO coins OTC?",
        link: "https://callisto.network/contact-us/",
    }
]

export const tokenList = [
    {
        name: "CLO",
        symbol: "CLO",
        decimals: {
            CLO: 18,
            BNB: 18,
            ETH: 18,
            ETC: 18
        },
        addresses: {
            CLO: "0x0000000000000000000000000000000000000001",
            BNB: "0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53",
            ETH: "0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53",
            ETC: "0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53"
        },
        addressesTest: {
            CLO: "0x0000000000000000000000000000000000000001",
            BNB: "0xCCEA50dDA26F141Fcc41Ad7e94755936d8C57e28",
            ETH: "0xCC48d2250b55b82696978184E75811F1c0eF383F",
        },
    },{
        name: "BNB",
        symbol: "BNB",
        decimals: {
            CLO: 18,
            BNB: 18,
            ETH: 18,
            ETC: 18
        },
        addresses: {
            CLO: "0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9",
            BNB: "0x0000000000000000000000000000000000000007",
            ETH: "",
            ETC: ""
        }
    },{
        name: "ETH",
        symbol: "ETH",
        decimals: {
            CLO: 18,
            BNB: 18,
            ETH: 18,
            ETC: 18
        },
        addresses: {
            CLO: "0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796",
            BNB: "",
            ETH: "0x0000000000000000000000000000000000000006",
            ETC: ""
        }
    },{
        name: "ETC",
        symbol: "ETC",
        decimals: {
            CLO: 18,
            BNB: 18,
            ETH: 18,
            ETC: 18
        },
        addresses: {
            CLO: "0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F",
            BNB: "",
            ETH: "",
            ETC: "0x0000000000000000000000000000000000000005"
        }
    },{
        name: "USDT",
        symbol: "USDT",
        decimals: {
            CLO: 18,
            BNB: 18,
            ETH: 6,
            ETC: 18
        },
        addresses: {
            CLO: "0xbf6c50889d3a620eb42c0f188b65ade90de958c4",
            BNB: "0x55d398326f99059ff775485246999027b3197955",
            ETH: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            ETC: ""
        }
    },{
        name: "CAKE",
        symbol: "CAKE",
        decimals: {
            CLO: 18,
            BNB: 18,
            ETH: 18,
            ETC: 18
        },
        addresses: {
            CLO: "0xCC2D45F7fE1b8864a13F5D552345eB3f5a005FEd",
            BNB: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
            ETH: "",
            ETC: ""
        }
    }
]
// ETC in BSC : 0x3d6545b08693daE087E957cb1180ee38B9e3c25E
export const Networks = [
    {
        name: "Callisto Network",
        symbol: "CLO",
        devNet: "mainnet",
        img: Assets.cloLogo,
        chainId: "820",
        rpcs: ["https://clo-geth.0xinfra.com/"],
        explorer: "https://explorer.callisto.network/"
    },{
        name: "Binance Smart Chain",
        symbol: "BNB",
        devNet: "mainnet",
        img: '/images/bnb.png',
        chainId: "56",
        rpcs: ["https://bsc-dataseed.binance.org/", "https://bsc-dataseed1.defibit.io/", "https://bsc-dataseed1.ninicoin.io/"],
        explorer: "https://bscscan.com/"
    },{
        name: "Ethereum Network",
        symbol: "ETH",
        devNet: "mainnet",
        img: '/images/eth.png',
        chainId: "1",
        rpcs: ["https://mainnet.infura.io/v3/d819f1add1a34a60adab4df578e0e741"],
        explorer: "https://etherscan.io/"
    },{
        name: "Ethereum Classic",
        symbol: "ETC",
        devNet: "mainnet",
        img: '/images/etc.png',
        chainId: "61",
        rpcs: ["https://www.ethercluster.com/etc"],
        explorer: "https://blockscout.com/etc/mainnet/"
    },
]

export const addTokenList = [
    {
        symbol: "ccCLO",
        chainId: 1,
        address: "0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53",
        network: "Ethereum"
    },{
        symbol: "ccCLO",
        chainId: 56,
        address: "0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53",
        network: "BSC"
    },{
        symbol: "ccCLO",
        chainId: 61,
        address: "0xCcbf1C9E8b4f2cDF3Bfba1098b8f56f97d219D53",
        network: "ETC"
    },{
        symbol: "ccBNB",
        chainId: 820,
        address: "0xcCDe29903E621Ca12DF33BB0aD9D1ADD7261Ace9",
        network: "Callisto"
    },{
        symbol: "ccETH",
        chainId: 820,
        address: "0xcC208c32Cc6919af5d8026dAB7A3eC7A57CD1796",
        network: "Callisto"
    },{
        symbol: "ccETC",
        chainId: 820,
        address: "0xCCc766f97629a4E14b3af8C91EC54f0b5664A69F",
        network: "Callisto"
    },{
        symbol: "BUSDT",
        chainId: 820,
        address: "0xbf6c50889d3a620eb42C0F188b65aDe90De958c4",
        network: "Callisto"
    },{
        symbol: "CAKE",
        chainId: 820,
        address: "0xCC2D45F7fE1b8864a13F5D552345eB3f5a005FEd",
        network: "Callisto"
    }
]

export const migrationTokens = [
    {
        symbol: "ccBNB",
        symbol2: "BNB",
        chainId: 820,
        addresses: {
            CLO: "0xCC78D0A86B0c0a3b32DEBd773Ec815130F9527CF"
        },
        network: "Callisto"
    },{
        symbol: "ccETH",
        symbol2: "ETH",
        chainId: 820,
        addresses: {
            CLO: "0xcC00860947035a26Ffe24EcB1301ffAd3a89f910"
        },
        network: "Callisto"
    }
]
