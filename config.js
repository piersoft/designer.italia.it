var config = {
  "git": {
    "repository": process.env['LG_GIT_REPOSITORY'] || "https://github.com/italia/designer.italia.it"
  },
  "deploy": {
    "cname": process.env['LG_DEPLOY_CNAME'] || "designer.italia.it",
    "repository": process.env['LG_DEPLOY_REPOSITORY'] || "https://github.com/italia/designer.italia.it"
  },
  "templates": {
    "dir": "template"
  },
  "site": {
    "downloads": {
      "ita-bootstrap": "https://github.com/italia/ita-bootstrap/archive/master.zip",
      "ita-web-toolkit": "https://italia.github.io/ita-web-toolkit/"
    },
    "brand": process.env['LG_SITE_BRAND'] || "design.italia.it",
    "production": process.env['LG_PRODUCTION_SITE'] || "design.italia.it",
    "name": "Linee guida di design per i servizi web della PA",
    "description": "Progettare il design dei servizi web della Pubblica Amministrazione (versione alfa)",
    "gaUser": process.env['LG_SITE_GAUSER'] || "UA-3351165-20",
    "htmlDir": "linee-guida",
    "baseurl": process.env['LG_SITE_BASEURL'] || "/",
    "version": "Versione alfa"
  }
};

try {
  var overrides = require('./config.local');
  config = Object.assign({}, config, overrides);
} catch (e) {
}

module.exports = config;
