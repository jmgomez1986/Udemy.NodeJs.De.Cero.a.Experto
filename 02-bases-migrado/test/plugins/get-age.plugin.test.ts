import { describe, expect, jest, test } from '@jest/globals';
import { getAge } from '../../src/plugins';

describe('Test in the getAge.plugin File', () => {
  test('getAge() should return the age of a person', () => {
    const birthdate = '1986-08-26';
    const age = getAge(birthdate);

    expect(typeof age).toBe('number');
  });

  test('getAge should return current age', () => {
    const birthdate = '1986-08-26';
    const age = getAge(birthdate);

    const calculateAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculateAge);
  });

  test('getAge should rturn 0 years', () => {
    const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1995);
    const birthdate = '1986-08-26';
    const age = getAge(birthdate);
    expect(age).toBe(0);
    expect(spy).toHaveBeenCalled();
  });
});
