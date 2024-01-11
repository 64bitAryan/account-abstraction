const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const AccountFactory = await hre.ethers.getContractAt(
    "SimpleAccountFactory",
    [process.env.entrypoint_address]
  );
  AccountFactory.AccountFactory.waitForDeployment(
    process.env.entrypoint_address
  );

  console.log(`factory deployed at: ${AccountFactory.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
