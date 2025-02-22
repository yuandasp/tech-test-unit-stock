const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  fetchStockByUnitId: async (req, res) => {
    try {
      const { unitId } = req.query;
      if (!unitId) return res.status(400).json({ error: "unitId is required" });

      const stocks = await prisma.stock.findMany({
        where: { unitId: Number(unitId) },
      });

      res.json(stocks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  searchStockByName: async (req, res) => {
    try {
      const filters = {};
      if (req.query.name) filters.name = { contains: req.query.name };

      const stocks = await prisma.stock.findMany({ where: filters });

      res.json(stocks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  createNewStock: async (req, res) => {
    try {
      const { name, category, quantity, unitId } = req.body;

      if (!name || !category || !quantity || !unitId) {
        return res.status(400).json({
          error: "name, category, quantity, and unitId are required",
        });
      }

      const newStock = await prisma.stock.create({
        data: {
          name,
          category,
          quantity: Number(quantity),
          unitId: Number(unitId),
        },
      });

      res.status(201).json(newStock);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
