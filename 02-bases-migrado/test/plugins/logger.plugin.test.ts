import { describe, expect, jest, test } from '@jest/globals';
import { buildLogger } from '../../src/plugins';
import { logger as winstonLogger } from '../../src/plugins/logger.plugin';

describe('Test in the logger.plugin File', () => {
  test('buildLogger should return a function logger', () => {
    const logger = buildLogger('test');
    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
  });

  test('winstonLogger.log should log a message', () => {
    const winstonLogggerSpy = jest.spyOn(winstonLogger, 'log');
    const message = 'test message';
    const service = 'test service';
    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLogggerSpy).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message,
        service,
      }),
    );
  });

  test('winstonLogger.error should log an error', () => {
    const winstonLoggerSpy = jest.spyOn(winstonLogger, 'error') as jest.Mock;
    const message = 'error test message';
    const service = 'test service';
    const logger = buildLogger(service);
    logger.error(message);

    expect(winstonLoggerSpy).toHaveBeenCalledWith('error', {
      message,
      service,
    });
  });
});
