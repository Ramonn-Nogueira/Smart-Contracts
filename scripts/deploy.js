const hre = require("hardhat");

const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory("HelloWorld");
  const contract = await contractFactory.deploy("Hello, world!");
  await contract.deployed();
  console.log("Contrato enviado a Blockchain no endereço: ", contract.address);

  const setMessageTxn = await contract.setMessage("Oi, mundo!");
  await setMessageTxn.wait();
  console.log("Mensagem enviada com o hash: ", setMessageTxn.hash);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
