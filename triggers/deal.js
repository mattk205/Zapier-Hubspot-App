// triggers on deal with a certain tag
const triggerDeal = (z, bundle) => {
  const responsePromise = z.request({
    url: 'https://api.hubapi.com/deals/v1/deal/recent/created?hapikey={{bundle.authData.api_key}}',
  });
  return responsePromise
    .then(response => {

      if (response.status >= 300) {
        throw new Error(`Unexpected status code ${response.status}`);
      }

      var dealList = response.json.results;

      dealList = dealList.map(function(deal) {
        deal.id = deal["dealId"];
        return deal;
      });
      return dealList;
    });
};

module.exports = {
  key: 'deal',
  noun: 'Deal',

  display: {
    label: 'Deal Created',
    description: 'Triggers on a new deal.'
  },

  operation: {
    inputFields: [

    ],
    perform: triggerDeal,

    sample: {
      id: 1,
    },
  }
};
