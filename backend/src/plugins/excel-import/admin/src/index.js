// src/plugins/excel-import/admin/src/index.js
import { prefixPluginTranslations } from '@strapi/strapi/admin';
import { getTranslation } from './utils/getTranslation'; // returns `${PLUGIN_ID}.${suffix}`
import { PLUGIN_ID } from './pluginId';
import { Initializer } from './components/Initializer';
import { PluginIcon } from './components/PluginIcon';

export default {
  register(app) {
    app.addMenuLink({
      to: `/plugins/${PLUGIN_ID}`,
      icon: PluginIcon,
      intlLabel: {
        id: 'excel-import.plugin.name',
        defaultMessage: 'Excel Import',
      },
      Component: async () => {
        const { App } = await import('./pages/App');
        return App;
      },
    });

    app.registerPlugin({
      id: PLUGIN_ID,
      name: 'Excel Import',
    });
  },

  // async registerTrads({ locales }) {
  //   const importedTrads = await Promise.all(
  //     locales.map((locale) =>
  //       import(`./translations/${locale}.json`)
  //         .then(({ default: data }) => ({
  //           data: prefixPluginTranslations(data, PLUGIN_ID),
  //           locale,
  //         }))
  //         .catch(() => ({ data: {}, locale }))
  //     )
  //   );
  //   return importedTrads;
  // },
};
