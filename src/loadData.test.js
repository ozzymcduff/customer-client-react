import loadData from "./loadData";
import * as types from "./constants/ActionTypes";
import { parseXmlCustomers } from "./adapters/Xml";

describe("loadData function", () => {
  const mockDispatch = jest.fn();
  const mockStore = { dispatch: mockDispatch };

  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("should dispatch ADD_CUSTOMERS action with parsed XML data", async () => {
    const mockXml =
      "<customers><customer><id>1</id><firstName>John</firstName><lastName>Doe</lastName></customer></customers>";
    const mockResponse = { text: jest.fn(() => Promise.resolve(mockXml)) };
    global.fetch = jest.fn(() => Promise.resolve(mockResponse));

    await loadData(mockStore);

    expect(global.fetch).toHaveBeenCalledWith(
      "/CustomerService.svc/GetAllCustomers",
      { dataType: "xml" }
    );
    expect(mockResponse.text).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({
      type: types.ADD_CUSTOMERS,
      infos: parseXmlCustomers(mockXml),
    });
  });
});
