import * as fs from 'fs';

export class FileStream{
  constructor(text) {
    this.text = text
  }

  get toString() {
    return this.text;
  }
}

export class ReadStream {
  constructor(readable){
    this.readable = readable
  }

  async logChunks() {
    for await (const chunk of this.readable) {
      console.log(chunk);
      return chunk;
    }
  }
}

// clean console
console.clear();

// Byte
const readable_byte = fs.createReadStream('./data.txt');

// Utf-8
const readable_utf8 = fs.createReadStream('./data.txt',{encoding: 'utf8'});

const chunk = await new ReadStream(readable_utf8).logChunks();
new ReadStream(readable_byte).logChunks();

const f = new FileStream(chunk)
console.log(f.toString)




