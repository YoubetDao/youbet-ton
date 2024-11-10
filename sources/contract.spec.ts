import { toNano } from "@ton/core";
import { Blockchain } from "@ton/sandbox";
import "@ton/test-utils";
import { Bet } from "./output/youbet_Bet";
import { findErrorCodeByMessage } from "./utils/error";

describe("contract", () => {
  it("should deploy correctly", async () => {
    // Create Sandbox and deploy contract
    let system = await Blockchain.create();
    let owner = await system.treasury("owner");
    let contract = system.openContract(await Bet.fromInit(owner.address));
    const deployResult = await contract.send(
      owner.getSender(),
      { value: toNano(1) },
      { $$type: "Deploy", queryId: 0n }
    );
    expect(deployResult.transactions).toHaveTransaction({
      from: owner.address,
      to: contract.address,
      deploy: true,
      success: true,
    });
  });
});

describe("linkWallet", () => {
  it("should link correctly", async () => {
    // Create Sandbox and deploy contract
    let system = await Blockchain.create();
    let owner = await system.treasury("owner");
    let contract = system.openContract(await Bet.fromInit(owner.address));
    const linkResult = await contract.send(
      owner.getSender(),
      { value: toNano(1) },
      { $$type: "LinkWallet", address: owner.address, github: "github" }
    );
    expect(linkResult.transactions).toHaveTransaction({
      from: owner.address,
      to: contract.address,
      success: true,
    });
  });
});

describe("createTask", () => {
  it("should create task correctly", async () => {
    // Create Sandbox and deploy contract
    let system = await Blockchain.create();
    let owner = await system.treasury("owner");
    let contract = system.openContract(await Bet.fromInit(owner.address));
    const createTaskResult = await contract.send(
      owner.getSender(),
      { value: toNano(1) },
      { $$type: "CreateTask", id: "123", name: "Task 1", projectId: "1" }
    );
    expect(createTaskResult.transactions).toHaveTransaction({
      from: owner.address,
      to: contract.address,
      success: true,
    });

    const task = await contract.getAllTasks();
    console.log(task);
  });
});
