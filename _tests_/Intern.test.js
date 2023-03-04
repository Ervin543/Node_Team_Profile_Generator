const Intern = require("../lib/Intern");

it("Can set school via constructor", () => {
  const testValue = "UofM";
  const e = new Intern("Alice", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

it("The getRole() function should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Alice", 1, "test@test.com", "UofM");
  expect(e.getRole()).toBe(testValue);
});

it("You Can get the school via getSchool()", () => {
  const testValue = "UofM";
  const e = new Intern("Alice", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
