import express from "express";
import {getUsers,addUser,updtUser,delUser} from "../controllers/user.js";

const router = express.Router()

router.get("/",getUsers);
router.post("/",addUser);
router.put("/:id",updtUser);
router.delete("/:id",delUser);

export default router   