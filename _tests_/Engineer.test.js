const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Adam', 3, 'atommielcarek@gmail', 'atommielcarek');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Adam', 3, 'atommielcarek@gmail.com', 'atommielcarek');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
 
test('gets employee role', () => {
    const engineer = new Engineer('Adam', 3, 'atommielcarek@gmail.com', 'atommielcarek');

    expect(engineer.getRole()).toEqual("Engineer");
});