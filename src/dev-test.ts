import { Block } from "./block";

// const block = new Block(1, "lastHash", "hash", "data");
// console.log(block.toString());

// console.log(Block.genesis().toString());

const fooBlock = Block.mineBlock(Block.genesis(), "foo");
console.log(fooBlock.toString());