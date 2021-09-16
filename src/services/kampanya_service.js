import http from "./http_common";

export function getAllDummies() {
  return http.get("/GetDummyCampaigns");
}
export function getStories() {
  return http.get("/GetStories");
}
export function getDefaults() {
  return http.get("/GetInterDefaults");
}
export function getDonations() {
  return http.get("/GetInterDonations");
}
export function getDummy(id) {
  return http.get(`/GetDummyCampaigns/${id}`);
}
export function getAllCampaigns() {
  return http.get("/GetCustomerChannelCampaignList");
}
export function getCampaigns(id) {
  return http.get(`/GetCustomerChannelCampaignList/${id}`);
}
export function getCustomerDefined(customerNo) {
  return http.get(`/GetCustomerDefinedCampaigns/${customerNo}`);
}
export function saveCustomerAnswer(id, customerNumber) {
  let options = {
    CampaignId: id,
    CustomerNo: customerNumber
  };
  return http.post("/SaveCustomerAnswer",options);
}
export function getDataProperty(data, property) {
  let result = [];
  // eslint-disable-next-line
  data.Details.map((value, index) => {
    var arr = value.Json.split('"');
    var index2 = arr.indexOf(property);
    result.push(arr[index2 + 2]);
  });
  return result;
}
