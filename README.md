# dao-governance-hardhat

A typical on-chain governance structure might look like:

ERC20 based voting happens on a project like Tally, but could hypothetically be done by users manually calling the vote functions.
Anyone can execute a proposal once it has passed Examples Compound

## Getting Started
It's recommended that you've gone through the hardhat getting started documentation before proceeding here.

## Requirements
- git
- NodeJs
- npm

## Installation
1. Clone this repo:
```
git clone https://github.com/purnimaagrawal/dao-governance-hardhat.git
cd dao-governance-hardhat
```


2. Install dependencies<br/>
```npm i```

If you want to deploy to a testnet: 
Add a .env file with the same contents of env.sample, but replaced with your variables.


## On-Chain Governance Example
Here is the rundown of what the test suite does.

- We will deploy an ERC20 token that we will use to govern our DAO.
- We will deploy a Timelock contract that we will use to give a buffer between executing proposals.
  Note: The timelock is the contract that will handle all the money, ownerships, etc
- We will deploy our Governence contract
  Note: The Governance contract is in charge of proposals and such, but the Timelock executes!
- We will deploy a simple Box contract, which will be owned by our governance process! (aka, our timelock contract).
- We will propose a new value to be added to our Box contract.
- We will then vote on that proposal.
- We will then queue the proposal to be executed.

Then, we will execute it!

