import brcypt from "bcrypt";

export const encryptPassword = (str: string): string => {
  const salt = brcypt.genSaltSync(10);
  const hash = brcypt.hashSync(str, salt);
  return hash;
};
