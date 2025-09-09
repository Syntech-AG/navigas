module.exports = [
  {
    method: 'POST',
    path: '/upload',
    handler: 'api::car.car.uploadExcel',
    config: {
      policies: [],
      middlewares: [],
    },
  },
];
