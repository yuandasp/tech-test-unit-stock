const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  fetchAllUnit: async (req, res) => {
    try {
      const units = await prisma.unitKerja.findMany();
      res.json(units);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createNewUnit: async (req, res) => {
    try {
      const { name } = req.body;

      if (!name) {
        return res.status(400).json({ error: "name is required" });
      }

      const newUnitKerja = await prisma.unitKerja.create({
        data: { name },
      });

      res.status(201).json(newUnitKerja);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
