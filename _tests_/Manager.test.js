const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

it("please set the office number via a constructor argument", () => {
    const testValue = 123;
    const e = new Manager("Alice", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

it("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Alice", 1, "test@test.com", 123);
    expect(e.getRole()).toBe(testValue);
});

it("You can get the office number via getOffice()", () => {
    const testValue = 123;
    const e = new Manager("Alice", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});