import { describe, expect, test } from '@jest/globals';
import { characters } from '../../src/js-foundation/02-destructuring';

describe('Test in the js-foundation/02-destructuring File', () => {
  test('character should content Flash and Superman', () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  });

  test('first character should be Flash', () => {
    const [flash, superman] = characters;

    expect(flash).toBe('Flash');
    expect(superman).toBe('Superman');
  });
});
