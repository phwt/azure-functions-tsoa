import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { UsersController } from "../src/users/usersController";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const usersController = new UsersController();

  switch (req.method) {
    case "GET":
      const response = await usersController.listUsers();

      context.res = {
        status: usersController.getStatus(),
        body: response,
      };
      break;
    case "POST":
      break;
    default:
      // Method not allowed
      break;
  }
};

export default httpTrigger;
