import { Address, contractAddress } from "@ton/core";
import { TonClient4, TonClient } from "@ton/ton";
import { Bet } from "./output/youbet_Bet";
import { getHttpV4Endpoint, getHttpEndpoint } from "@orbs-network/ton-access";
import dotenv from "dotenv";

dotenv.config();

(async () => {
  const endpoint = await getHttpV4Endpoint({
    network: "testnet",
  });
  const client = new TonClient4({
    endpoint: endpoint, // 🔴 Test-net API endpoint
  });

  // v2
  // const endpoint = await getHttpEndpoint({
  //   network: "testnet",
  // });
  // const client = new TonClient({
  //   endpoint: endpoint, // 🔴 Test-net API endpoint
  // });

  // Parameters
  let owner = Address.parse(process.env.OWNER_ADDRESS!);
  let init = await Bet.init(owner);
  let contract_address = contractAddress(0, init);

  // Prepareing
  console.log("Reading Contract Info...");
  console.log(contract_address);

  // Input the contract address
  let contract = await Bet.fromAddress(contract_address);
  let contract_open = await client.open(contract);

  try {
    const tasks = await contract_open.getAllTasks();
    console.log("Tasks: ", tasks);
  } catch (error) {
    console.error("Error reading tasks:", error);
  }
})();
