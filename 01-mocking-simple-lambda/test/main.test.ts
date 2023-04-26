class MockedMyClass{
  myAttribute!: (param: string) => any;
  lambdaTest(fn: (param: string) => any) {
    this.myAttribute = fn;
  }
}

describe("MockedMyClass", () => {
  const myObj = new MockedMyClass();
  test("testCase1", () => {
    myObj.lambdaTest((input) => {
      return input;
    });
    expect(myObj.myAttribute("Beta")).toBe("Beta");
  });
});
