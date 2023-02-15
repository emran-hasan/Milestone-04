const lyrics = 'Amr sonar bangla. Ami Tomay Valobashi. Chirodin tomar akash tomar batash';

const text =lyrics.split('');
const text2 =lyrics.split(' ');
const text3 =lyrics.split('.');

console.log(text, text2,text3);

const katakti = lyrics.slice(1,20);
console.log(katakti);
const katakti2 = lyrics.substring(1,20);
console.log(katakti2);

const atString = lyrics.prototype.at(5);
console.log(atString);