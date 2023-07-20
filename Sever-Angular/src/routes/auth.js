import express from 'express';
import {createOrUpdateUser, currentUser,signup,signin, signout, getUsers, deleteUser} from "../controllers/AuthController";

const router = express.Router();


router.post('/create-or-update-user', createOrUpdateUser);
router.post('/current-user', currentUser);
router.get("/users", getUsers);
router.post("/signup",signup);
router.post("/signin",signin);
router.get("/signout",signout);
router.delete("/users/:id",deleteUser);

module.exports = router;