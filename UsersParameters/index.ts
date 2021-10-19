import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { UsersController } from "../src/users/usersController";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const userId = context.bindingData.userId;
  const usersController = new UsersController();
  let contextResponse;

  switch (req.method) {
    case "GET":
      contextResponse = {
        body: await usersController.getUser(userId),
      };
      break;
    case "PUT":
      contextResponse = {
        body: await usersController.updateUser(userId, req.body),
      };
      break;
    case "DELETE":
      contextResponse = { body: await usersController.deleteUser(userId) };
      break;
  }

  context.res = {
    status: usersController.getStatus(),
    headers: usersController.getHeaders(),
    ...contextResponse,
  };
};

export default httpTrigger;
