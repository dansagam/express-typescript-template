/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import brcypt from "bcrypt";

const prisma = new PrismaClient();

const authEncryption = (_req: Request, _res: Response, next: NextFunction) => {
  _req.method;
  prisma.$connect();
  prisma.$use(async (params, next) => {
    if (params.action === "create" && params.model === "User") {
      const user = params.args.data;
      const salt = brcypt.genSaltSync(10);
      const hash = brcypt.hashSync(user.password, salt);
      user.password = hash;
      params.args.data = user;
    }

    return next(params);
  });
  next();
};

export default authEncryption;
