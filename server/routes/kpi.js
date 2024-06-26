import express from "express"; //server 
import KPI from "../models/KPI.js";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find();
    res.status(200).json(kpis);
    console.log(kpis);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;