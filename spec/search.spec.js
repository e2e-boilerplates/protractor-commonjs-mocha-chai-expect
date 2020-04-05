const { expect } = require("chai");

describe("Sandbox", () => {
  before(function fn() {
    this.timeout(20000);
    browser.get("https://e2e-boilerplate.github.io/sandbox/");
  });

  it("should be on Sandbox", async () => {
    const title = await browser.getTitle();
    expect(title).to.equal("Sandbox");

    const header = await element(by.css("h1")).getText();
    expect(header).to.equal("Sandbox");
  });
});
