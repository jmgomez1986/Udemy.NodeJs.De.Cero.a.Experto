import { describe, expect, test } from '@jest/globals';
import { getUUID } from '../../src/plugins';

describe('Test in the get-id.plugin File', () => {
  test('getUUID() should eturn a UUID', () => {
    const uuid = getUUID();

    expect(typeof uuid).toBe('string');
    expect(uuid.length).toBe(36);
  });
});
