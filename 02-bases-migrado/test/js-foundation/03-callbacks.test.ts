import { describe, expect, test } from '@jest/globals';
import { getUserById } from '../../src/js-foundation/03-callbacks';

describe('Test in the js-foundation/03-callbacks File', () => {
  test('getUserById should return an error if user does not exist', (done) => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  test('getUserById should return an user if it exists', (done) => {
    const id = 1;

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ id, name: 'John Doe' });
      done();
    });
  });
});
