import { MyClass } from "../src/main";

class MockedMyClass {
  myAttribute!: (param: string) => any;

  lambdaTest(fn: (param: string) => any) {
    this.myAttribute = fn;
  }
}

describe("MockedMyClass", () => {
  test("testCase1", () => {
    const mockedClass = new MockedMyClass();
    mockedClass.myAttribute = jest.fn((param: string) => param);

    const myClass = new MyClass();

    const lambdaTestMock = jest.fn((fn) => fn("Beta"));

    jest.spyOn(myClass, "lambdaTest").mockImplementation(lambdaTestMock);

    expect(mockedClass.myAttribute("Beta")).toBe("Beta");
  });
});
