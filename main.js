/* Blockchain primo - Creación de bloque */
const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(index, data, previousHash = '') {
            // Índice, datos y valor del hash anterior
        this.index = index;
        this.date = new Date(); // fecha de creación en función de tipo Date()
        this.data = data; // información de las transacciones
        this.previousHash = previousHash;
        this.hash = this.createHash(); // también generará un hash propio
        
    }

    createHash() {
        return SHA256(this.index + this.date + this.data).toString();
    } // corrección fecha
}

//block = new Block(0, 'primo');  // generará el bloque de nombre primo
//console.log(JSON.stringify(block,null,2));

// Objeto recoge nuestra Blockchain
class BlockChain {
    constructor(genesis) {
        this.chain = [this.createFirstBlock(genesis)];
    }
    createFirstBlock(genesis) {
        return new Block(0, genesis);
    }
    getLastBlock() {
        return this.chain[this.chain.length-1];
    }
    addBlock(data){
        let prevBlock =  this.getLastBlock();
        let block = new Block(prevBlock+1, data, prevBlock.hash);
        this.chain.push(block);
    }   
} 

let primoCoin = new BlockChain('genesis de primoCoin a 22 de Enero de 2022');
console.log(JSON.stringify(primoCoin.chain,null,2));