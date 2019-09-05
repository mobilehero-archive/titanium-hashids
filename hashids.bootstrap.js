// code for SDK < 8.1.0.GA
// require('/ti.internal/extensions/binding')('hashids', '/node_modules/@titanium/hashids');
// require('/ti.internal/extensions/binding')('hashids/cjs', '/node_modules/@titanium/hashids');

// Code for SDK >= 8.1.0.GA
global.binding.register('hashids', require('@titanium/hashids'));
global.binding.register('hashids/cjs', require('@titanium/hashids'));
