import { Request } from "express";

export interface IAddUserPayloadDto {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: "ADMIN" | "STUDENT";
}

export type CreateAuthBodyRequest = Request<never, never, IAddUserPayloadDto>;

export interface IGetUserDto {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export enum Role {
  USER,
  ADMIN,
  STUDENT,
}

export interface DeleteParams {
  id: string;
}
