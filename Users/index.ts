import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { UsersController } from "../src/users/usersController";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const usersController = new UsersController();
  let contextResponse;

  switch (req.method) {
    case "GET":
      contextResponse = { body: await usersController.listUsers() };
      break;
    case "POST":
      contextResponse = { body: await usersController.createUser(req.body) };
      break;
  }

  context.res = {
    status: usersController.getStatus(),
    headers: usersController.getHeaders(),
    ...contextResponse,
  };
};

export default httpTrigger;
