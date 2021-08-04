const SHA256 = require("crypto-js/SHA256");

//Block class
class Block {
  constructor(data) {
    (this.hash = ""),
      (this.height = 0),
      (this.body = data),
      (this.time = 0),
      (this.previousblockhash = "");
  }
}

//blockchain class

class Blockchain {
  constructor() {
    this.chain = [];
    this.addBlock(new Block("First block in the chain - Genesis Block"));
  }

  addBlock(newBlock) {
    if (this.chain.length > 0) {
      newBlock.previousblockhash = this.chain[this.chain.length - 1].hash;
    }
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    this.chain.push(newBlock);
  }
}
