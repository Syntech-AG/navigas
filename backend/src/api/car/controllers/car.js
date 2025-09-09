"use strict";

const { createCoreController } = require("@strapi/strapi").factories;
const xlsx = require("xlsx");

module.exports = createCoreController("api::car.car", ({ strapi }) => ({
  async uploadExcel(ctx) {
    try {
      const excel = ctx.request.files?.excel;
      if (!excel)
        return ctx.badRequest("No Excel file provided (“excel” field)");

      const workbook = xlsx.readFile(excel.filepath);
      const sheet = workbook.SheetNames[0];
      //   const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);

      const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheet], {
        defval: null,
      });
      strapi.log.info(
        "First row keys: " +
          Object.keys(rows[0] || {}).join(", ") +
          `Parsed rows: ${rows.length}`
      );

      //   const toNumber = (v) =>
      //     v === undefined || v === null || v === "" ? null : Number(v);

      const created = [];
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
        };

        const entity = await strapi.entityService.create("api::car.car", {
          data,
        });
        created.push(entity.id);
      }

      return ctx.created({ imported: created.length, ids: created });
    } catch (err) {
      strapi.log.error("uploadExcel error:", err);
      return ctx.badRequest("Excel upload failed: " + err.message);
    }
  },
}));
