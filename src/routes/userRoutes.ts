import { createUser, getUsers } from "../controllers/userController";
import expressn, { Router } from "express";

const router: Router = expressn.Router();

router.route("/").post(createUser).get(getUsers);

export default router;
