const client = require('./client');

const listTablePromise = (params) => {
  return new Promise((resolve, reject) => {
    client.listTable(params, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
};

async function run() {
  try {
    const data = await listTablePromise({});
    console.log('Data:', data);
    throw new Error('test');
  } catch (err) {
    console.log('error:', err);
    console.log('Exit your application!');
    process.exit(1);
  }
}

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

run();