import { Router } from 'express';
import * as UserController from '../controller/user.controller';

const router = Router();

router.route("/signup")
.post(UserController.signup);

router.route("/signin")
.post(UserController.signin);

router.route("/task")
.get(UserController.getTasks)
.delete();

router.route("/private-task")
.get(UserController.verifyToken, UserController.getPrivateTasks);

router.route("/profile")
.get(UserController.verifyToken, UserController.profile);

router.route("/:id")
.get()
.post()
.delete();

export default router;