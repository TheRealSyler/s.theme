import JestStoreLog from 'jest-store-log';
import { vTheme } from '../theme';

test('Class', () => {
  const theme = new vTheme(
    {
      Test: {
        colors: {
          test: '#add',
        },
        fonts: {
          g: 'awd',
        },
      },
    },
    'Test'
  );
  expect(theme.color('test', 'color')).toBe('vtheme-c-test');
  expect(theme.color('test', 'border-color')).toBe('vtheme-b-test');
  expect(theme.color('test', 'color', 'placeholder-focus')).toBe('vtheme-p-f-c-test');

  const log = new JestStoreLog();
  expect(theme.color('test', 'fill', 'placeholder-focus')).toBe('vtheme-p-f-f-test');
  expect(log.logs[0]).toEqual(
    '%c[Class.color]: %cThe placeholder-focus selector should only be used with the color property.'
  );
  log.TestEnd();

  expect(theme.font('g')).toEqual('vtheme-font-g');
});
