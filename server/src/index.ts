import app from './app';
// setup function for our express application
app.listen(3333, '0.0.0.0', () => {
  console.log('Server is running');
});

// async function main() {
//   // lets read our application configuration
//   const { db, host, port } = config();
//
//   // use the configuration to connect the database
//   await connect(db);
//
//   // use the configuration to start listening
//   app.listen(port, host, () => console.log('server is running'));
// }

// start the application
// main().catch(console.log);
