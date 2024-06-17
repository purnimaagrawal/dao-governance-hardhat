async function main() {
    // Grab the contract factory 
    const MyGovernor = await ethers.getContractFactory("MyGovernor");
 
    // Start deployment, returning a promise that resolves to a contract object
    const myGovernor = await MyGovernor.deploy("0x1f3274d9AF98a0cbB898586b09d6616363006cCd"); // Instance of the contract taking token contract address as input
    console.log("Contract deployed to address:", myGovernor.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });