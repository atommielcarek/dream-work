const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager('Adam', 1, 'atommielcarek@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets employee role', () => {
    const manager = new Manager('Adam', 1, 'atommielcarek@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 