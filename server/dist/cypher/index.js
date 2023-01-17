import { createCipheriv, createDecipheriv, randomFillSync, scryptSync } from 'node:crypto';
const ALG = 'aes-192-cbc';
const KEY_LEN = 24;
const INPUT_ENC = 'utf8';
const OUTPUT_ENC = 'hex';
const uint2hex = (u) => Buffer.from(u).toString(OUTPUT_ENC);
const hex2uint = (h) => Uint8Array.from(Buffer.from(h, OUTPUT_ENC));
export class Cypher {
    constructor(password, salt) {
        this.key = scryptSync(password, salt, KEY_LEN);
    }
    enc(data) {
        const iv = randomFillSync(new Uint8Array(16));
        const cipher = createCipheriv(ALG, this.key, iv);
        const encrypted = cipher.update(data, INPUT_ENC, OUTPUT_ENC) + cipher.final(OUTPUT_ENC);
        return `${encrypted}.${uint2hex(iv)}`;
    }
    dec(data) {
        const [encrypted, iv] = data.split('.');
        const decipher = createDecipheriv(ALG, this.key, hex2uint(iv));
        return decipher.update(encrypted, OUTPUT_ENC, INPUT_ENC) + decipher.final(INPUT_ENC);
    }
}
export const cypher = new Cypher('game', 'salt');
