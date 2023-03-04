const Engineer = require("../lib/Engineer");

test("You can set your GitHub account via this constructor", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Alice", 1, "test@test.com", testValue);
  expect(e.gitHub).toBe(testValue);
});

test("The getRole() function should return the \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Alice", 1, "test@test.com", "GitHubUsername");
  expect(e.getRole()).toBe(testValue);
});

test("You can get your GitHub username via the getGitHub() function", () => {
  const testValue = "GitHubUsername";
  const e = new Engineer("Alice", 1, "test@test.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});
