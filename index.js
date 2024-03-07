// this prohram called secret message
//first one declare array cantaing many string
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript']
//remove last string
secretMessage.pop();
console.log(secretMessage);
//find length of all string in secret message
console.log('length of secret message :'+''+secretMessage.length);
//add other string in array
secretMessage.push('to', 'program');
console.log(secretMessage);
//replace easily to right
secretMessage['easily']='right';
console.log(secretMessage);
//removing string by beginning array
secretMessage.shift();
console.log(secretMessage);
//add string by beginning array
secretMessage.unshift('programing');
console.log(secretMessage);
//change word get ,right, the, first ,time to know
secretMessage.splice(6,5,'know');
console.log(secretMessage)
//joining many word
console.log(secretMessage.join());
console.log('length of secret message :'+''+secretMessage.length);