const ContactCreate = require('./creates/contact');
const getContact = require('./triggers/contact');

const authentication = {
  type: 'custom',
  // "test" could also be a function
  test: {
    url:
      'https://api.hubapi.com/integrations/v1/me?hapikey={{bundle.authData.api_key}}'
  },
  fields: [
    {
      key: 'api_key',
      type: 'string',
      required: true,
      helpText: 'Found under the Integrations Tab.'
    }
  ]
};
// Now we can roll up all our behaviors in an App.
const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication: authentication,

  beforeRequest: [
  ],

  afterResponse: [
  ],

  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
    [getContact.key]: getContact,
  },

  // If you want your searches to show up, you better include it here!
  searches: {
  },

  // If you want your creates to show up, you better include it here!
  creates: {
    [ContactCreate.key]: ContactCreate,
  }
};

// Finally, export the app.
module.exports = App;
