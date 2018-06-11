var Bob = require('./bob.js');

describe('Bob responds properly to...', function () {
  var bob = new Bob();

  it('a statement', function () {
    var result = bob.hey('Tom-ay-to, tom-aaaah-to.');
    expect(result).toEqual('Whatever.');
  });

  it('a shout', function () {
    var result = bob.hey('WATCH OUT!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('all-caps gibberish', function () {
    var result = bob.hey('FCECDFCAAB');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('a question', function () {
    var result = bob.hey('Does this cryogenic chamber make me look fat?');
    expect(result).toEqual('Sure.');
  });

  it('a numeric question', function () {
    var result = bob.hey('You are, what, like 15?');
    expect(result).toEqual('Sure.');
  });

  it('a gibberish question', function () {
    var result = bob.hey('fffbbcbeab?');
    expect(result).toEqual('Sure.');
  });

  it('a forceful question', function () {
    var result = bob.hey('Let\'s go make out behind the gym!');
    expect(result).toEqual('Whatever.');
  });

  it('acronyms in regular speech', function () {
    var result = bob.hey('It\'s OK if you don\'t want to go to the DMV.');
    expect(result).toEqual('Whatever.');
  });

  it('a forceful statement', function () {
    var result = bob.hey('WHAT THE HELL WERE YOU THINKING?');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('forceful numbers', function () {
    var result = bob.hey('1, 2, 3 GO!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('a statement that is only numbers', function () {
    var result = bob.hey('1, 2, 3');
    expect(result).toEqual('Whatever.');
  });

    it('a question with only one number', function () {
    var result = bob.hey('4?');
    expect(result).toEqual('Sure.');
  });

  it('a shouted question with gibberish', function () {
    var result = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('shouting with no exclamation mark', function () {
    var result = bob.hey('I HATE YOU');
    expect(result).toEqual('Whoa, chill out!');
  });

  it('statement containing question mark', function () {
    var result = bob.hey('Ending with a ? means a question.');
    expect(result).toEqual('Whatever.');
  });

  it('prattling on', function () {
    var result = bob.hey('Wait! Hang on.  Are you going to be OK?');
    expect(result).toEqual('Sure.');
  });

  it('silence', function () {
    var result = bob.hey('');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('prolonged silence', function () {
    var result = bob.hey('   ');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('alternate silence', function () {
    var result = bob.hey('\t\t\t\t\t\t\t\t\t\t');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('a multiple line question', function () {
    var result = bob.hey('\nDoes this cryogenic chamber make me look fat?\nno');
    expect(result).toEqual('Whatever.');
  });

  it('a question starting with whitespace', function () {
    var result = bob.hey('         hmmmmmmm...');
    expect(result).toEqual('Whatever.');
  });

  it('a question ending with whitespace', function () {
    var result = bob.hey('Okay if like my  spacebar  quite a bit?   ');
    expect(result).toEqual('Sure.');
  });

  it('other whitespace', function () {
    var result = bob.hey('\n\r \t');
    expect(result).toEqual('Fine. Be that way!');
  });

  it('a non-question ending with whitespace', function () {
    var result = bob.hey('This is a statement ending with whitespace      ');
    expect(result).toEqual('Whatever.');
  });

});
