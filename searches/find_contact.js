// find a particular contact by email
const searchContacts = (z, bundle) => {
  const responsePromise = z.request({
    url: 'https://api.hubapi.com/contacts/v1/contact/email/{{bundle.inputData.email}}/profile?hapikey={{bundle.authData.api_key}}',
  });
  return responsePromise
    .then(response => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }
      const responseArray = [response.json];
      return responseArray;
    });
};

module.exports = {
  key: 'find_contact',
  noun: 'Findcontact',

  display: {
    label: 'Search for a Contact',
    description: 'Finds a Contact.'
  },

  operation: {
    inputFields: [
      {key: 'email', required: true, helpText: 'Find the contact with this email.'}
    ],
    perform: searchContacts,

    sample: {
      "portal-id":	4341461,
      "vid":	51
    },
  }
};
