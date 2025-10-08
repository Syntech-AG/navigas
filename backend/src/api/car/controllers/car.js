"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const xlsx = require("xlsx");

module.exports = createCoreController("api::car.car", ({ strapi }) => ({
  async uploadExcel(ctx) {
    try {
      const excel = ctx.request.files?.excel;
      if (!excel) {
        return ctx.badRequest('No Excel file provided ("excel" field)');
      }

      const workbook = xlsx.readFile(excel.filepath);
      const sheet = workbook.SheetNames[0];
      const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheet], {
        defval: null,
      });

      const created = [];
      const failed = [];

      for (const r of rows) {
        const data = {
          marke: r.Marke ?? r.marke,
          modell: r.Modell ?? r.modell,
          schaltung: r.Schaltung ?? r.schaltung,
          kraftstoff: r.Kraftstoff ?? r.kraftstoff,
          leistung: r.Leistung ?? r.leistung,
          verbrauch: r.Verbrauch ?? r.verbrauch,
          co2kategorie: r.CO2Kategorie ?? r.co2kategorie,
          mwst: r.MwSt ?? r.mwst,
          preis: r.Preis ?? r.preis,

          Autokategorien:
            (r.Autokategorien ?? r.autokategorien)?.trim() ?? null,
          Treibstoff: (r.Treibstoff ?? r.treibstoff)?.trim() ?? null,
          Getriebe: (r.Getriebe ?? r.getriebe)?.trim() ?? null,
        };

        try {
          const entity = await strapi.documents("api::car.car").create({
            data,
            status: "draft",
          });
          created.push(entity.id);
        } catch (validationError) {
          failed.push({ row: r, reason: validationError.message });
        }
      }

      return ctx.created({
        imported: created.length,
        ids: created,
        failed: failed.length,
        failed_rows: failed,
      });
    } catch (err) {
      strapi.log.error("uploadExcel error:", err);
      return ctx.badRequest("Excel upload failed: " + err.message);
    }
  },
}));
