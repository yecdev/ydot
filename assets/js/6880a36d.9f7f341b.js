"use strict";(self.webpackChunkydot=self.webpackChunkydot||[]).push([[6831],{4137:function(e,t,l){l.d(t,{Zo:function(){return c},kt:function(){return f}});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(l),f=r,h=d["".concat(i,".").concat(f)]||d[f]||u[f]||n;return l?a.createElement(h,o(o({ref:t},c),{},{components:l})):a.createElement(h,o({ref:t},c))}));function f(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,o=new Array(n);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<n;p++)o[p]=l[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},8057:function(e,t,l){l.r(t),l.d(t,{contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=l(7462),r=l(3366),n=(l(7294),l(4137)),o=["components"],s={title:"Wallets"},i="Ycash Wallets",p={type:"mdx",permalink:"/wallets",source:"@site/src/pages/wallets.md",title:"Wallets",description:"In order to use Ycash, you need a Ycash wallet, and there are many great wallets to choose from!",frontMatter:{title:"Wallets"}},c=[{value:"Shielded Wallets",id:"shielded-wallets",level:2},{value:"YWallet",id:"ywallet",level:3},{value:"YecWallet",id:"yecwallet",level:3},{value:"YecPaperWallet",id:"yecpaperwallet",level:3},{value:"Multi-Asset Wallets",id:"multi-asset-wallets",level:2},{value:"Developer Wallets",id:"developer-wallets",level:2}],u={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ycash-wallets"},"Ycash Wallets"),(0,n.kt)("p",null,"In order to use Ycash, you need a Ycash wallet, and there are many great wallets to choose from!"),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"shielded-wallets"},"Shielded Wallets"),(0,n.kt)("h3",{id:"ywallet"},"YWallet"),(0,n.kt)("p",null,"YWallet is fastest and most advanced Ycash wallet on the planet, featuring Warp Sync and shielded transactions!"),(0,n.kt)("p",null,"YWallet is now available for Android, iOS, and desktop!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://ywallet.app"},"Download YWallet"))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"yecwallet"},"YecWallet"),(0,n.kt)("p",null,"YecWallet is a full node Ycash wallet. It includes ycashd, the node software that powers the Ycash network, and will take care of configuring ycashd for you!"),(0,n.kt)("p",null,"Because it is a full node, YecWallet will download the entire Ycash blockchain via the Ycash peer-to-peer network. (Currently, the blockchain is around 21 GB.)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/ycashfoundation/yecwallet/releases"},"Download YecWallet from GitHub"))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"yecpaperwallet"},"YecPaperWallet"),(0,n.kt)("p",null,"You can also store Ycash on a piece of paper!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/ycashfoundation/yecpaperwallet/releases"},"Download YecPaperWallet from GitHub"))),(0,n.kt)("p",null,"(For small amounts of Ycash, check out the ",(0,n.kt)("a",{parentName:"p",href:"https://paper.ycash.xyz"},"web-based version of YecPaperWallet"),".)"),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"multi-asset-wallets"},"Multi-Asset Wallets"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://guarda.com"},"Guarda Wallet")," (Multi-asset wallet for iPhone, Android, desktop, and the web)."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cobo.com/"},"Cobo Wallet")," (Multi-asset mobile wallet for iPhone and Android)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://atomicwallet.io/"},"Atomic Wallet")," (Multi-asset wallet for Android and desktop)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://hebe.cc/"},"Hebe Wallet")," (Multi-asset wallet for iPhone, Android, and the web)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://bitpie.com/"},"Bitpie Wallet")," (Multi-asset mobile wallet for iPhone\nand Android)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://safepay.safecoin.org/"},"SafePay")," (Multi-asset mobile wallet for iPhone, Android, and the web)"),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"developer-wallets"},"Developer Wallets"),(0,n.kt)("p",null,"For wallets designed to support Ycash-related software development, visit the ",(0,n.kt)("a",{parentName:"p",href:"/dev"},"developer page"),"."))}d.isMDXComponent=!0}}]);