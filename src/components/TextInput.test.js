import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";
import "@testing-library/jest-dom";

describe("TextInput component", () => {
  const onSave = jest.fn();
  const text = "Initial text";
  const label = "Test input";

  it("should render an input element with the initial text and label", () => {
    const { getByLabelText } = render(
      <TextInput onSave={onSave} text={text} label={label} />
    );
    expect(getByLabelText(label)).toHaveValue(text);
  });

  it("should call onSave when the input element loses focus", () => {
    const { getByLabelText } = render(
      <TextInput onSave={onSave} text={text} label={label} />
    );
    const newText = "New text";
    fireEvent.change(getByLabelText(label), { target: { value: newText } });
    fireEvent.blur(getByLabelText(label));
    expect(onSave).toHaveBeenCalledWith(newText);
  });
});
