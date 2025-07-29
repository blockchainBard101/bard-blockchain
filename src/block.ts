import crypto from 'crypto';

export class Block{
    private timestamp: number;
    private lastHash: string;
    private hash: string;
    private data: string;

    constructor(timestamp: number, lastHash: string, hash: string, data: string){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    toString(){
        return `Block -
        Timestamp: ${this.timestamp}
        Last Hash: ${this.lastHash.substring(0, 10)}
        Hash: ${this.hash.substring(0, 10)}
        Data: ${this.data}
        `;
    }

    static genesis(){
        return new this(0, "genesis_last_hash", "genesis_hash", "genesis_data");
    }

    static mineBlock(lastBlock: Block, data: string){
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;
        const hash = this.hash(timestamp, lastHash, data);
        return new this(timestamp, lastHash, hash, data);
    }

    static hash(timestamp: number, lastHash: string, data: string): string{
        return crypto.createHash('sha256').update(`${timestamp}${lastHash}${data}`).digest('hex');
    }
}