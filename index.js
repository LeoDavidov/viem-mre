import {createPublicClient, getContract, webSocket} from "viem";
import {base} from "viem/chains";

const publicClient = createPublicClient({
    chain: base,
    transport: webSocket('ws_url')
})

const wethContract = getContract({
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    abi: [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "name": "balance",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "type": "function"
        }
    ],
    client: publicClient,
})

const balance = await wethContract.read.balanceOf(['0x2d2f0abd526e87ca05eb19558d3d5fa8460266da4d35ef19d616d2e6ef16bfb0']);
