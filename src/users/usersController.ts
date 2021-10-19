import {
  Body,
  Controller,
  Delete,
  Get,
  Path,
  Post,
  Put,
  Route,
  SuccessResponse,
  Tags,
} from "tsoa";
import { User } from "./user";
import { UsersService, UserCreationParams } from "./usersService";

@Route("users")
@Tags("User")
export class UsersController extends Controller {
  @Get()
  public async listUsers(): Promise<User[]> {
    return new UsersService().list();
  }

  @Get("{userId}")
  public async getUser(@Path() userId: number): Promise<User> {
    return new UsersService().get(userId);
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<User> {
    this.setStatus(201); // set return status 201
    return new UsersService().create(requestBody);
  }

  @Put("{userId}")
  public async updateUser(
    @Path() userId: number,
    @Body() requestBody: UserCreationParams
  ): Promise<User> {
    return new UsersService().update(userId, requestBody);
  }

  @Delete("{userId}")
  public async deleteUser(@Path() userId: number): Promise<User> {
    return new UsersService().delete(userId);
  }
}
