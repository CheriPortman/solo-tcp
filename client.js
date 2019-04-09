const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

const client = net.createConnection(9990, 'localHost', () => {
  console.log('I am connected');
  // client.write('hello I am a client');

  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });
});


client.on('data', data => {
  console.log(`\n${data.toString()}`);
  rl.prompt();
});

