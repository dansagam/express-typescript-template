import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = req.body;
    const user = await prisma.user.create({
      data,
    });

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
