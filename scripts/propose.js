const { ethers } =  require("hardhat")
const {
  TEAM_ADDRESS,
  AMOUNT,
  FUNC,
  PROPOSAL_DESCRIPTION,
  proposalsFile
} = require("../helper");
const fs  = require( "fs")


 async function propose(args, functionToCall, proposalDescription) {
   console.log(TEAM_ADDRESS,AMOUNT)
   
    const governorAdress = "0x5C43C3c4Fa31195603Cd884836D538562E82d923";
  const governor = await ethers.getContractAt("MyGovernor",governorAdress);
  const tokenAdress = "0x1f3274d9AF98a0cbB898586b09d6616363006cCd";
  const token = await ethers.getContractAt("MyToken",tokenAdress)
  console.log("token isntance",token);
  const encodedFunctionCall = token.interface.encodeFunctionData(functionToCall, args)
  console.log(`Proposing ${functionToCall} on ${token.address} with ${args}`)
  console.log(`Proposal Description:\n  ${proposalDescription}`)
  const proposeTx = await governor.propose(
    [tokenAdress],
    [0],
    [encodedFunctionCall],
    proposalDescription
  )
  // If working on a development chain, we will push forward till we get to the voting period.
//   if (developmentChains.includes(network.name)) {
//     await moveBlocks(VOTING_DELAY + 1)
//   } 
  console.log("proposeTx",proposeTx);
  const proposeReceipt = await proposeTx.wait(1)
  console.log("proposeReceipt",proposeReceipt)
  const proposalId = proposeReceipt.events[0].args.proposalId
  console.log(`Proposed with proposal ID:\n  ${proposalId}`)

  const proposalState = await governor.state(proposalId)
  const proposalSnapShot = await governor.proposalSnapshot(proposalId)
  const proposalDeadline = await governor.proposalDeadline(proposalId)
  // //   // The state of the proposal. 1 is not passed. 0 is passed.
  console.log(`Current Proposal State: ${proposalState}`)
//   // What block # the proposal was snapshot
  console.log(`Current Proposal Snapshot: ${proposalSnapShot}`)
//   // The block number the proposal voting expires
  console.log(`Current Proposal Deadline: ${proposalDeadline}`)


  // // save the proposalId
  // let proposals = JSON.parse(fs.readFileSync(proposalsFile, "utf8"))
  // console.log("proposals",proposals);
//   proposals[network.config.chainId!.toString()].push(proposalId.toString())
//   fs.writeFileSync(proposalsFile, JSON.stringify(proposals))


}

propose([TEAM_ADDRESS,AMOUNT], FUNC, PROPOSAL_DESCRIPTION)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

  