import { PrismaClient } from "@prisma/client";
import brcypt from "bcrypt";

export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }
  async onInit() {
    await this.$connect();
    this.$use(async (params, next) => {
      if (params.action === "create" && params.model === "User") {
        const user = params.args.data;
        const salt = brcypt.genSaltSync(10);
        const hash = brcypt.hashSync(user.password, salt);
        user.password = hash;
        params.args.data = user;
      }

      return next(params);
    });
  }
}
export const pService = new PrismaClient();
