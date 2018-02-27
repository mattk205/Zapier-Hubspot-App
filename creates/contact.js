// create a particular contact by name
const createContact = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: 'https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/{{bundle.inputData.email}}/?hapikey={{process.env.API_KEY}}',
    body: {
      "properties": [
        {
          "property": "firstname",
          "value": bundle.inputData.firstName
        },
        {
          "property": "lastname",
          "value": bundle.inputData.lastName
        },
        {
          "property": "website",
          "value": bundle.inputData.website
        },
        {
          "property": "company",
          "value": bundle.inputData.company
        },
        {
          "property": "phone",
          "value": bundle.inputData.phone
        },
        {
          "property": "address",
          "value": bundle.inputData.address
        },
        {
          "property": "city",
          "value": bundle.inputData.city
        },
        {
          "property": "state",
          "value": bundle.inputData.state
        },
        {
          "property": "zip",
          "value": bundle.inputData.zip
        }
      ]
    },
  });
  return responsePromise
    .then(response => {
      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }

      return response;
    });
};

module.exports = {
  key: 'contact',
  noun: 'Contact',

  display: {
    label: 'Create Contact',
    description: 'Creates a contact.'
  },

  operation: {
    inputFields: [
      {key: 'firstName', label: "First Name", required: true},
      {key: 'lastname', label: "Last Name", required: true},
      {key: 'phone', label: "Phone", required: true},
      {key: 'email', label: "Email Address", required: true},
      {key: 'website', label: "Company Website", required: false},
      {key: 'company', label: "Company Name", required: false},
      {key: 'address', label: "Street Address", required: false},
      {key: 'city', label: "City", required: false},
      {key: 'state', label: "State", required: false},
      {key: 'zip', label: "Zip Code", required: false},
    ],

    perform: createContact,

    sample: {
      "properties": [
        {
          "property": "firstname",
          "value": "HubSpot"
        },
        {
          "property": "lastname",
          "value": "Test"
        },
        {
          "property": "website",
          "value": "http://hubspot.com"
        },
        {
          "property": "company",
          "value": "HubSpot"
        },
        {
          "property": "phone",
          "value": "555-122-2323"
        },
        {
          "property": "address",
          "value": "25 First Street"
        },
        {
          "property": "city",
          "value": "Cambridge"
        },
        {
          "property": "state",
          "value": "MA"
        },
        {
          "property": "zip",
          "value": "02139"
        }
      ]
    }
  }
};
