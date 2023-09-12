import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Customer from "./Customer";
import "@testing-library/jest-dom";

describe("Customer component", () => {
  const customer = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
  };
  const editCustomer = jest.fn();

  it("should render the customer name and a TextInput component", () => {
    const { getByText, getByLabelText } = render(
      <Customer customer={customer} editCustomer={editCustomer} />
    );
    expect(getByText(customer.firstName)).toBeInTheDocument();
    expect(getByLabelText("Last Name")).toHaveValue(customer.lastName);
  });

  it("should call editCustomer when the TextInput component saves a new last name", () => {
    const { getByLabelText } = render(
      <Customer customer={customer} editCustomer={editCustomer} />
    );
    const newLastName = "Smith";
    fireEvent.change(getByLabelText("Last Name"), {
      target: { value: newLastName },
    });
    fireEvent.blur(getByLabelText("Last Name"));
    expect(editCustomer).toHaveBeenCalledWith(customer.id, {
      ...customer,
      lastName: newLastName,
    });
  });

});
