// function test() {
//   alert("Widget working!");
// }

// ZOHO.embeddedApp.init();

// ZOHO.embeddedApp.on("PageLoad", function (data) {
//   test();
// });




ZOHO.CRM.API.insertRecord({
  Entity: "Contacts",
  APIData: {
    First_Name: "John",
    Last_Name: "Doe",
    Email: "john@test.com"
  }
});
ZOHO.CRM.CONNECTION.invoke("facebook_conn", {
  url: "https://graph.facebook.com/v18.0/...",
  method: "GET"
});
