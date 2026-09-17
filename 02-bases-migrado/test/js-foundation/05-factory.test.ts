import { describe, expect, test } from '@jest/globals';
import { buildMakePerson } from '../../src/js-foundation/05-factory';

describe('Test in the js-foundation/05-factory File', () => {
  const getUUID = () => '1234567890';
  const getAge = () => 40;

  test('buildMakePerson shouls return a function', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe('function');
  });

  test('makePerson should return a person', () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const jhonDoe = makePerson({ name: 'Jhon Doe', birthdate: '1986-08-26' });
    expect(jhonDoe).toEqual({
      id: '1234567890',
      name: 'Jhon Doe',
      birthdate: '1986-08-26',
      age: 40,
    });
  });
});
