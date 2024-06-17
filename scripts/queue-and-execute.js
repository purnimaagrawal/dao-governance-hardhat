const { network, ethers } =  require("hardhat") 

const { DESCRIPTION,
    FUNC,
    FUNC_ARGS,
 } = require("../helper")

 async function queueAndExecute(
  functionToCall,
  args,
  proposalDescription
) {

  const encodedFunctionCall = token.interface.encodeFunctionData(
    functionToCall,
    args
  );

  const descriptionHash =  ethers.utils.id(proposalDescription);

  const governor = await ethers.getContractAt("MyGovernor",governorAdress);
  const token = await ethers.getContractAt("MyToken",tokenAdress)
  const queueTx = await governor.queue(
    [token.address],
    [0],
    [encodedFunctionCall],
    descriptionHash
  );
  queueTx.wait(1);

  console.log("Proposal queued....");

  console.log("Executing....");
  const executeTx = await governor.execute(
    [token.address],
    [0],
    [encodedFunctionCall],
    descriptionHash
  );
  executeTx.wait(1);

  console.log("Executed....");
}

queueAndExecute(FUNC, [FUNC_ARGS], DESCRIPTION)
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });