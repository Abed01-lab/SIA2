import { createDeployment } from "./utils/createDeployment";
import { startInstance } from "./utils/startInstance";
import { Client, logger } from "camunda-external-task-client-js";
import {
  highPriorityList,
  lowPriorityList,
  mediumPriorityList,
} from "./Database/data";

async function main() {
  //Add to list
  const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };
  // create a Client instance with custom configuration
  const client = new Client(config);
  client.subscribe("addHighPriority", async function ({ task, taskService }) {
    highPriorityList.push({ complaint: task.variables.get("complaint") });
    console.log("hihg-priroity", highPriorityList);
    await taskService.complete(task);
  });
  client.subscribe("addMediumPriority", async function ({ task, taskService }) {
    mediumPriorityList.push({ complaint: task.variables.get("complaint") });
    console.log("medium-priroity", mediumPriorityList);

    await taskService.complete(task);
  });
  client.subscribe("addLowPriority", async function ({ task, taskService }) {
    lowPriorityList.push({ complaint: task.variables.get("complaint") });
    console.log("low-priroity", lowPriorityList);
    await taskService.complete(task);
  });
}

main();
