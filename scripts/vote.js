const { network, ethers } =  require("hardhat") 
const {VOTE_REASON } = require("../helper")

const index = 0;
const VOTE_NO = 0;
const VOTE_YES = 1;
const VOTE_ABSTAIN = 2;

 async function vote() {
  const proposalId = "30062737636093680307091842460128558005207552825457073114929103522665154320275"
  const governorAdress = "0x5C43C3c4Fa31195603Cd884836D538562E82d923";
  const governor  =await ethers.getContractAt("MyGovernor",governorAdress);
  const voteTx = await governor.castVoteWithReason(
    proposalId,
    VOTE_YES,
    VOTE_REASON
  );
  console.log("voteTx",voteTx);
  const voteTxReceipt = await voteTx.wait(1)
  console.log(voteTxReceipt.events[0].args.reason)

  let proposalState = await governor.state(proposalId);
  console.log(`Current Proposal State: ${proposalState}`)
  console.log("Voting complete.");
}

vote()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });