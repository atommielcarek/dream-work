const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('Adam', 2, 'atommielcarek', 'DU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Adam', 2, 'atommielcarek', 'DU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets employee role', () => {
    const intern = new Intern('Adam', 2, 'atommielcarek@gmail.com', 'DU');

    expect(intern.getRole()).toEqual("Intern");
}); 