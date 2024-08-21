import express from "express"
import {getMahasiswa, getMahasiswaById, createMahasiswa, updateMahasiswa, deleteMahasiswa} from "../Controllers/mahasiswaController.js";

const router = express.Router();

router.get("/", getMahasiswa)
router.get("/find", getMahasiswaById)
router.post("/create", createMahasiswa)
router.put("/update", updateMahasiswa)
router.delete("/delete", deleteMahasiswa)

export default router