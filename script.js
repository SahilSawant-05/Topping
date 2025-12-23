// This runs when the widget loads inside Bigin
ZOHO.embeddedApp.on("PageLoad", function (data) {
  console.log("Page Load Data:", data);
});

// Initialize the Bigin SDK (VERY IMPORTANT)
ZOHO.embeddedApp.init();

// Simple test
function testSDK() {
  alert("Bigin Topping is working!");
}

// Example: Fetch contacts from Bigin
function getContacts() {
  ZOHO.CRM.API.getAllRecords({
    Entity: "Contacts",
    per_page: 5,
    page: 1
  }).then(function (response) {
    document.getElementById("output").textContent =
      JSON.stringify(response, null, 2);
  }).catch(function (error) {
    console.error(error);
  });
}


module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'ALLOWALL',
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.zoho.com",
          },
        ],
      },
    ]
  },
}
