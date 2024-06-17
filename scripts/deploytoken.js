async function main() {
    // Grab the contract factory 
    const MyToken = await ethers.getContractFactory("MyToken");
    //:TODO: this needs to be fixed. For now used Remix IDE to deploy this contract
    const initialSuply = 1000000000000000000000
    // Start deployment, returning a promise that resolves to a contract object
    const myToken = await MyToken.deploy(initialSuply); // Instance of the contract 
    console.log("Contract deployed to address:", myToken.address);
  }
  
  main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });