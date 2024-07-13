const connection = new Connection(clusterApiUrl("devnet"));
  // try {
  //   address = new PublicKey("31ZdXAvhRQyzLC2L97PC6Lnf2yWgHhQUKKYoUo9MLQF5");
  //   const balance = await connection.getBalance(address) / LAMPORTS_PER_SOL;
  //   console.log(`Balance for: ${balance} SOL`);
  // } catch (error) {
  //   console.error(`Invalid address:`, error);
  // }

  // if (address) {
  //   const balance = await connection.getBalance(address) / LAMPORTS_PER_SOL;
  //   console.log(balance);
  // }

  // const keypair = Keypair.generate();
  // console.log(keypair.publicKey.toBase58() + "  ")
  // console.log(keypair.secretKey)

  const keypair = getKeypairFromEnvironment("SECRET_KEY");
  //console.log(keypair.publicKey.toBase58() + "  ")
  const publicKey = keypair.publicKey.toBase58();
  const address = new PublicKey(publicKey);
  const balance = await connection.getBalance(address) / LAMPORTS_PER_SOL;
  console.log(`Balance for: ${balance} SOL`);