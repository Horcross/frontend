(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[523],{9210:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/deploy",function(){return n(37430)}])},37430:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(85893),s=n(11163),i=n(69077);function r(e){return(0,a.jsxs)("div",{className:"relative col-span-3 rounded-xl",children:[(0,a.jsx)("div",{className:"overflow-hidden rounded-xl",children:(0,a.jsx)("a",{href:e.openseaURL,target:"_blank",rel:"noreferrer",children:(0,a.jsx)("img",{className:"hover:scale-105 transition-all duration-500 aspect-square rounded-xl object-cover cursor-pointer",src:e.imageURL,alt:"111"})})}),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-between mt-8",children:[(0,a.jsx)("a",{href:e.openseaURL,target:"_blank",rel:"noreferrer",children:(0,a.jsx)("span",{className:"mr-4 text-2xl font-bold tracking-wide",children:e.name})}),(0,a.jsx)("a",{href:e.openseaURL,target:"_blank",rel:"noreferrer",children:(0,a.jsx)("img",{src:"opensea.svg",className:"mb-2 h-9 w-9"})})]})]})}var d=n(59205),l=JSON.parse('[{"inputs":[{"internalType":"address payable","name":"gatewayAddress","type":"address"},{"internalType":"string","name":"feePayerAddress","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"InitializationFailed","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"address","name":"implementation","type":"address"},{"indexed":false,"internalType":"uint256","name":"chainId","type":"uint256"},{"indexed":false,"internalType":"address","name":"tokenContract","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"salt","type":"uint256"}],"name":"AccountCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"requestAddress","type":"address"}],"name":"ReceivedData","type":"event"},{"inputs":[{"internalType":"address[2]","name":"impl","type":"address[2]"},{"internalType":"uint256[3]","name":"data","type":"uint256[3]"},{"internalType":"bytes","name":"bytecodeHash","type":"bytes"}],"name":"abiPacketAccount","outputs":[{"internalType":"bytes","name":"packet","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"implementation","type":"address"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"}],"name":"account","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"acountCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"implementation","type":"address"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"tokenContract","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"salt","type":"uint256"},{"internalType":"bytes","name":"initData","type":"bytes"}],"name":"createAccount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"gatewayContract","outputs":[{"internalType":"contract IGateway","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint64","name":"destGasLimit","type":"uint64"},{"internalType":"uint64","name":"destGasPrice","type":"uint64"},{"internalType":"uint64","name":"ackGasLimit","type":"uint64"},{"internalType":"uint64","name":"ackGasPrice","type":"uint64"},{"internalType":"uint128","name":"relayerFees","type":"uint128"},{"internalType":"uint8","name":"ackType","type":"uint8"},{"internalType":"bool","name":"isReadCall","type":"bool"},{"internalType":"bytes","name":"asmAddress","type":"bytes"}],"name":"getRequestMetadata","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"bytes","name":"execData","type":"bytes"}],"name":"iAck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"requestAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"destChainId","type":"string"},{"internalType":"string","name":"destinationContractAddress","type":"string"},{"internalType":"bytes","name":"requestMetadata","type":"bytes"},{"internalType":"bytes","name":"packet","type":"bytes"}],"name":"sendReadRequest","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"feePayerAddress","type":"string"}],"name":"setDappMetadata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"gateway","type":"address"}],"name":"setGateway","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),p=n(67294);async function u(e,t){let n=new d.m(e),a=await n.core.getCode(t);return a}var o=n(3738);function y(e){let{chain:t}=(0,i.LN)(),n={},s="",r="",y=0;(null==t?void 0:t.name)==="Goerli"?(n={apiKey:"eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc",network:d.N.ETH_GOERLI},r=o.sV.Goerli,y=o.a_.Goerli,s="https://goerli.etherscan.io/address/"):(null==t?void 0:t.name)==="Polygon Mumbai"&&(n={apiKey:"eCsOnpQMtwmvGMOjQ2XKcuCCSI1rYtCc",network:d.N.MATIC_MUMBAI},r=o.sV.Mumbai,y=o.a_.Mumbai,s="https://mumbai.polygonscan.com/address/");let[c,m]=(0,p.useState)(!1);(0,p.useEffect)(()=>{u(n,x).then(e=>{"0x"===e?m(!1):m(!0)})});let{config:b}=(0,i.PJ)({address:r,abi:l,chainId:y,functionName:"createAccount(address,uint256,address,uint256,uint256,bytes)",args:[r,80001,e.contractAddress,Number(e.tokenId),10,"0x"],enabled:!0}),{write:f}=(0,i.GG)(b),{data:x}=(0,i.do)({address:r,abi:l,chainId:y,functionName:"account(address,uint256,address,uint256,uint256)",args:[r,80001,e.contractAddress,Number(e.tokenId),10]});return(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("a",{href:s+x,target:"_blank",rel:"noreferrer",children:(0,a.jsxs)("div",{className:"flex cursor-pointer items-center gap-2 rounded-full bg-[#f2f2f2] p-1 px-2 text-[#8e8e8e] transition hover:scale-105 hover:bg-black/10",children:[(0,a.jsx)("span",{className:"text-xs font-bold tracking-wide lg:text-base",children:"string"!=typeof x?" ":x.slice(0,6)+"..."+x.slice(x.length-4,x.length)}),(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2.5",stroke:"currentColor",className:"h-5 w-5",children:(0,a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"})})]})}),(0,a.jsx)("div",{className:"flex",children:c?(0,a.jsx)("button",{className:"hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block",children:"use Account"}):(0,a.jsx)("button",{onClick:()=>{null==f||f()},className:"hidden rounded-lg bg-gradient-to-r from-[#6C55F9] to-[#9D55F9] px-4 py-2 font-hl text-white transition hover:scale-105 hover:hue-rotate-15 lg:block",children:"Deploy Account"})})]})}function c(){let{chain:e}=(0,i.LN)(),t=(0,s.useRouter)(),n="";return(null==e?void 0:e.name)==="Goerli"?n="https://testnets.opensea.io/assets/goerli/"+t.query.contractAddress+"/"+t.query.tokenId:(null==e?void 0:e.name)==="Polygon Mumbai"&&(n="https://testnets.opensea.io/assets/mumbai/"+t.query.contractAddress+"/"+t.query.tokenId),(0,a.jsx)("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:(0,a.jsxs)("div",{className:"grid-cols-6 gap-x-8 pt-24 pb-12 sm:px-4 md:grid lg:px-0",children:[(0,a.jsx)(r,{imageURL:t.query.imageURL,name:t.query.name,openseaURL:n}),(0,a.jsxs)("div",{className:"col-span-3 rounded-xl bg-white p-6",children:[(0,a.jsx)(y,{contractAddress:t.query.contractAddress,tokenId:t.query.tokenId}),(0,a.jsxs)("div",{className:"flex gap-x-4",children:[(0,a.jsx)("p",{className:"w-fit py-4 text-left font-mono text-xl uppercase text-gray-400 lg:whitespace-nowrap",children:"address"}),(0,a.jsxs)("div",{className:"hidden w-full grid-cols-1 grid-rows-2 divide-y divide-[#8c8c8c]/30 lg:grid",children:[(0,a.jsx)("div",{className:"w-full"}),(0,a.jsx)("div",{className:"w-full"})]})]})]})]})})}},3738:function(e,t,n){"use strict";n.d(t,{a_:function(){return s},pJ:function(){return a},sV:function(){return i}});let a={Mumbai:"0xca3Ccd71b2A2f8A37D2e746a829496053B937721",Goerli:"0x7BFc0b2a0bF455f0D40831274Dec5487A814d243"},s={Mumbai:80001,Goerli:5},i={Mumbai:"0xed8C508FbC6bD8bE3dC56fd638acbd9489CCf3e0",Goerli:"0xB04a3ab6b57e859B6FA4255F52f07f4c7453A861"}}},function(e){e.O(0,[41,359,774,888,179],function(){return e(e.s=9210)}),_N_E=e.O()}]);