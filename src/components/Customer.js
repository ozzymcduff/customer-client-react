import React, { useState } from "react";
import TextInput from "./TextInput";
import _ from "lodash";

function Customer({ customer, editCustomer }) {
  const [dirty, setDirty] = useState(false);

  const handleSaveLastName = (text) => {
    if (customer.lastName !== text) {
      editCustomer(
        customer.id,
        _.extend(_.clone(customer), { lastName: text })
      );
      setDirty(true);
    }
  };

  let isDirty = "";
  if (dirty) {
    isDirty = <div>isDirty</div>;
  }

  return (
    <div>
      {isDirty}
      <div aria-label="First Name">{customer.firstName}</div>
      <TextInput
        label="Last Name"
        text={customer.lastName}
        onSave={handleSaveLastName}
      />
    </div>
  );
}

export default Customer;
