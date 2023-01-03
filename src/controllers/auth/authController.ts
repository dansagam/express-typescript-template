import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
// import {
//   CreateAuthBodyRequest,
//   DeleteParams,
//   IAddUserPayloadDto,
// } from "../../interfaces/auth/authInterface";
import { encryptPassword } from "../../utils/passwordEncryption";
import {
  CreateAuthBodyRequest,
  DeleteParams,
  IAddUserPayloadDto,
} from "@/interfaces/auth/authInterface";

const prisma = new PrismaClient();
export const createUser = async (
  req: CreateAuthBodyRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: IAddUserPayloadDto = req.body;
    data.password = encryptPassword(data.password);
    const user = await prisma.user.create({
      data,
    });

    user;
    if (user) {
      res.status(200);
      res.json({
        success: true,
        data: user,
      });
    } else {
      res.status(404);
      throw new Error("User not created");
    }
  } catch (err) {
    res.status(400);
    next(err);
  }
};

export const getUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const foundUser = await prisma.user.findMany();
    if (foundUser) {
      res.status(200).json({
        success: true,
        data: foundUser,
      });
    }
  } catch (err) {
    res.status(400);
    next(err);
  }
};

export const removeUser = async (
  req: Request<DeleteParams>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    res.status(400);
    next(err);
  }
};
