const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('should create an object with a name, id, and email property', () => {
    const employee = new Employee('Alice', 123, 'alice@example.com');
    expect(employee.name).toEqual('Alice');
    expect(employee.id).toEqual(123);
    expect(employee.email).toEqual('alice@example.com');
  });

  it('should return the name when the getName() method is called', () => {
    const employee = new Employee('Alice', 123, 'alice@example.com');
    expect(employee.getName()).toEqual('Alice');
  });

  it('should return the id when the getId() method is called', () => {
    const employee = new Employee('Alice', 123, 'alice@example.com');
    expect(employee.getId()).toEqual(123);
  });

  it('should return the email when the getEmail() method is called', () => {
    const employee = new Employee('Alice', 123, 'alice@example.com');
    expect(employee.getEmail()).toEqual('alice@example.com');
  });

  it('should return "Employee" when the getRole() method is called', () => {
    const employee = new Employee('Alice', 123, 'alice@example.com');
    expect(employee.getRole()).toEqual('Employee');
  });
});
