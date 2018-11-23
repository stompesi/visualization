import {sequelize} from './lib/dbManager'
import Block from './models/block'
import Transaction from './models/transaction'

const http = require('http');
const cron = require('node-cron');

let blockNumber = 6743449;

sequelize.sync();

const options = {
	host: 'api.etherscan.io',
    path: ''
};

function httpRequestCallback(response: any){
   let body = '';

   response.on('data', (data: string) => {
      body += data;
   });
   
   response.on('end', async () => {
        const jsonObj = JSON.parse(body);
        const block = jsonObj.result;

        await Block.create({
            blockHash : block.hash,
            gasLimit : block.gasLimit,
            number : block.number,
            timestamp : block.timestamp,
            gasUsed : block.gasUsed,
            difficulty : block.difficulty,
            miner : block.miner,
            nonce : block.nonce,
            parentHash : block.parentHash,
            receiptsRoot : block.receiptsRoot,
            size : block.size,
            stateRoot : block.stateRoot,
            totalDifficulty : block.totalDifficulty,
            transactionsRoot : block.transactionsRoot,
            extraData : block.extraData,
            sha3Uncles : block.sha3Uncles
        }).then(async (results) => {
            for(let i = 0 ; i < block.transactions.length ; i ++) {
                await Transaction.create({
                    transactionHash : block.transactions[i].hash,
                    blockHash : block.transactions[i].blockHash,
                    from : block.transactions[i].from,
                    to : block.transactions[i].to,
                    input : block.transactions[i].input,
                    gas : block.transactions[i].gas,
                    gasPrice : block.transactions[i].gasPrice,
                    nonce : block.transactions[i].nonce,
                    transactionIndex : block.transactions[i].transactionIndex,
                    value : block.transactions[i].value,
                    v : block.transactions[i].v,
                    r : block.transactions[i].r,
                    s : block.transactions[i].s
                }).then((results) => {
                }).catch((err) => {
                });
            }
            console.log(parseInt(block.number, 16));

            options.path = `/api?module=proxy&action=eth_getBlockByNumber&boolean=true&tag=${blockNumber.toString(16)}`
            
            blockNumber--;
    
            const req = http.request(options, httpRequestCallback);
            req.end();s

        }).catch((err) => {
            console.log(err);
        });
   });
}


// cron.schedule('*/2 * * * * *', () => {
// 	for(let i = 0 ; i < 5 ; i++) {
//         options.path = `/api?module=proxy&action=eth_getBlockByNumber&boolean=true&tag=${blockNumber.toString(16)}`

//         blockNumber--;

//         const req = http.request(options, httpRequestCallback);
// 		req.end();
// 	}
// });