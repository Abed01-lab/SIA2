import axios from "axios";

export async function startInstance(instanceID: String, complaint: String) {
  const startInstance = await axios.post(
    "http://localhost:8080/engine-rest/process-definition/key/" +
      instanceID +
      "/start",
    {
      variables: {
        complaint: {
          value: "camunda sucks ass",
          type: "String",
        },
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return await startInstance.data;
}
