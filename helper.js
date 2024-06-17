const { ethers } =  require("hardhat")

 const TEAM_ADDRESS = "0xa6D35094d40d9fB6f73C03074f31c3f6bF1f25A6"
 const AMOUNT = ethers.utils.parseUnits("50","ether")
 const FUNC = "transfer"
 const PROPOSAL_DESCRIPTION = "Proposal #1  200 for team grant!"
 const proposalsFile = "proposals.json"
 const VOTE_REASON = "Because da cha cha";

 const output = module.exports={
     TEAM_ADDRESS,
     AMOUNT,FUNC,PROPOSAL_DESCRIPTION,proposalsFile,VOTE_REASON
 }