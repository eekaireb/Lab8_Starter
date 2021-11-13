// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2


//tests for isPhoneNumber
test('valid phone number #1', () => {
    expect(functions.isPhoneNumber('858-123-4567')).toBe(true);
  });

test('valid phone number #2', () => {
    expect(functions.isPhoneNumber('619-124-4597')).toBe(true);
  });

test('invalid phone number #1', () => {
    expect(functions.isPhoneNumber('858-123-456')).toBe(false);
  });

test('invalid phone number #2', () => {
    expect(functions.isPhoneNumber('858')).toBe(false);
  });


//tests for isEmail
test('valid  email #1', () => {
    expect(functions.isEmail('emily@gmail.com')).toBe(true);
  });

test('valid  email #2', () => {
    expect(functions.isEmail('david@gmail.com')).toBe(true);
  });

test('invalid  email #1', () => {
    expect(functions.isEmail('emily')).toBe(false);
  });

test('invalid  email #2', () => {
    expect(functions.isEmail('david')).toBe(false);
  });

//test for isStrongPassword
test('valid  password #1', () => {
    expect(functions.isStrongPassword('A22222')).toBe(true);
  });

test('valid  password #2', () => {
    expect(functions.isStrongPassword('radical1')).toBe(true);
  });

test('invalid  password #1', () => {
    expect(functions.isStrongPassword('weakpasswordsaresometimessuperlong')).toBe(false);
  });

test('invalid  password #2', () => {
    expect(functions.isStrongPassword('1')).toBe(false);
  });

//test for isDate
test('valid date #1', () => {
    expect(functions.isDate('12/22/1999')).toBe(true);
  });

test('valid date #2', () => {
    expect(functions.isDate('1/2/2021')).toBe(true);
  });

test('invalid date #1', () => {
    expect(functions.isDate('31/4/33')).toBe(false);
  });

test('invalid date #2', () => {
    expect(functions.isDate('04/10/00')).toBe(false);
  });

//test for isHexColor
test('valid hex color #1', () =>{
    expect(functions.isHexColor('89b2fa')).toBe(true);
  });

test('valid hex color #2', () => {
    expect(functions.isHexColor('FC0')).toBe(true);
  });

test('invalid hex color #1', () => {
    expect(functions.isHexColor('zkg')).toBe(false);
  });

test('invalid hex color #2', () => {
    expect(functions.isHexColor('zzzkgg')).toBe(false);
  });