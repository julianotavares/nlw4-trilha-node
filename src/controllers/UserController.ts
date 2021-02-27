import { Request, Response } from 'express';

class UserController {
  async create(request: Request, response: Response) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { body } = request;
    console.log(body);

    return response.send();
  }
}

export default UserController;
