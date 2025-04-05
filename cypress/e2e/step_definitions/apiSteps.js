let petId;

const baseUrl = 'https://petstore.swagger.io/v2';

given('I create a new pet', () => {
  cy.request('POST', `${baseUrl}/pet`, {
    id: Date.now(),
    name: "Buddy",
    photoUrls: ["url"],
    status: "available"
  }).then((res) => {
    expect(res.status).to.eq(200);
    petId = res.body.id;
  });
});

when('I update the pet', () => {
  cy.request('PUT', `${baseUrl}/pet`, {
    id: petId,
    name: "BuddyUpdated",
    photoUrls: ["url"],
    status: "sold"
  }).then((res) => {
    expect(res.status).to.eq(200);
  });
});

when('I fetch the pet details', () => {
  cy.request('GET', `${baseUrl}/pet/${petId}`).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body.name).to.eq('BuddyUpdated');
  });
});

when('I delete the pet', () => {
  cy.request('DELETE', `${baseUrl}/pet/${petId}`).then((res) => {
    expect(res.status).to.eq(200);
  });
});

then('all API responses should be validated', () => {
  cy.request({
    url: `${baseUrl}/pet/${petId}`,
    failOnStatusCode: false
  }).then((res) => {
    expect(res.status).to.eq(404);
  });
});