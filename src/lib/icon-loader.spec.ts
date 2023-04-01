import { loadIcon } from "./icon-loader";

describe("icon-loader", function () {
  let mockedFetch: jest.MockedFunctionDeep<
    (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>
  >;

  beforeEach(function () {
    global.fetch = jest.fn();
    mockedFetch = jest.mocked(global.fetch);
  });

  it("can load a svg image", async function () {
    mockedFetch.mockImplementation((icon) =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve(`ICON CONTENT`),
      } as Response)
    );

    const response = await loadIcon("foo");

    expect(response).toEqual("ICON CONTENT");
    expect(mockedFetch).toBeCalledTimes(1);
  });

  it("will not load the same svg twice", async function () {
    mockedFetch.mockImplementation((icon) =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve(`ICON CONTENT ${icon}`),
      } as Response)
    );

    const response1 = await loadIcon("bar");
    const response2 = await loadIcon("bar");

    expect(response1).toEqual("ICON CONTENT bar");
    expect(response2).toEqual("ICON CONTENT bar");
    expect(mockedFetch).toBeCalledTimes(1);
  });

  it("will log an error when loading of the icon fails", async function () {
    const loader = Promise.resolve({
      ok: false,
      statusText: "SOME ERROR",
    } as Response);

    mockedFetch.mockImplementation(() => loader);

    jest.spyOn(console, "warn").mockImplementationOnce(() => {});

    const response = await loadIcon("error");

    expect(response).toEqual("");
    expect(console.warn).toBeCalledWith(
      'Failed to load SVG icon, got error "SOME ERROR".'
    );
  });
});
