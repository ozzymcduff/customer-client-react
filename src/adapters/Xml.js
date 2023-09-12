import $ from "jquery";
import _ from "lodash";

function firstLetterToLowerCase(name) {
  return name[0].toLowerCase() + name.slice(1);
}
function firstLetterToUpperCase(name) {
  return name[0].toUpperCase() + name.slice(1);
}
export function parseXmlCustomers(data) {
  const xml = new window.DOMParser().parseFromString(data, "text/xml");
  return _.map($(xml).find("Customer"), (xmlCustomer) => {
    return _.reduce(
      $(xmlCustomer).children(),
      (memo, next) => {
        let n = $(next);
        memo[firstLetterToLowerCase(n.prop("tagName"))] =
          n.attr("i:nil") === "true" ? null : n.text();
        return memo;
      },
      {}
    );
  });
}
let doc = document.implementation.createDocument(null, null, null);
export function toXmlCustomer(data) {
  let properties = Object.getOwnPropertyNames(data);
  return _.reduce(
    properties,
    function (memo, property) {
      let propertyElement = doc.createElement(firstLetterToUpperCase(property));
      let value = data[property];
      if (value !== null) {
        propertyElement.appendChild(doc.createTextNode(value));
      } else {
        propertyElement.setAttribute("i:nil", "true");
      }
      memo.appendChild(propertyElement);
      return memo;
    },
    doc.createElement("Customer")
  );
}
