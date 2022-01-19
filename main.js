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
        return SHA256(this.index + this.date + this.data);
    } // corrección fecha
}

block = new Block(0, 'primo');  // generará el bloque de nombre primo
console.log(JSON.stringify(block,null,2));

// Objeto recoge nuestra Blockchain
class BlockChain {
    //
} 