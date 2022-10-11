import {
  createUser,
  getUsers,
  removeUser,
} from "../controllers/auth/authController";
import expressn, { Router } from "express";

const router: Router = expressn.Router();

router.route("/").post(createUser).get(getUsers);
router.route("/:id").delete(removeUser);

export default router;
