// .stylelintrc.cjs
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    // Erlaube Vendor-Präfix für unseren Glas-Effekt
    'property-no-vendor-prefix': [true, {
      ignoreProperties: ['backdrop-filter']
    }]
  }
};
