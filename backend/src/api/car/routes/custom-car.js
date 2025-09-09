module.exports = {
  routes: [
    {
      method: "POST",
      path: "/cars/upload-excel",
      handler: "car.uploadExcel",
      config: { policies: [], middlewares: [] },
    },
  ],
};
