const getContact = (z, bundle) => {
  const responsePromise = z.request({
    url: "https://api.hubapi.com/contacts/v1/lists/recently_updated/contacts/recent?hapikey={{bundle.authData.api_key}}",
    method: "GET",
  });
  return responsePromise
    .then(response => {

      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }

      var list = response.json.contacts;

      list = list.map(function(contact) {
        contact.id = contact["canonical-vid"];
        return contact;
      });
      return list;
    });
};

module.exports = {
  key: 'contact',
  noun: 'Contact',

  display: {
    label: 'Contact Created/Updated',
    description: 'Triggers on a new/updated contact',
  },

  operation: {
    perform: getContact,

    sample: {
        id: 1,
      },
  }
};
