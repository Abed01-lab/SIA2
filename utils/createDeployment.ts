import fs from "fs";
import axios from "axios";
import FormData from "form-data";

export async function createDeployment() {
  const formData = new FormData();
  formData.append("file", fs.createReadStream("./ReceiveComplaint.bpmn"));
  const deployment = await axios.post(
    "http://localhost:8080/engine-rest/deployment/create",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return await deployment.data;
}
