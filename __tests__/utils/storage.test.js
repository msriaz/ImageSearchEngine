import {
  clear,
  load,
  loadString,
  remove,
  save,
  saveString,
} from '../../src/utils/storage';

describe('storage util', () => {
  it('stores object successfully', async () => {
    await expect(save('testKey', {id: 1, value: 'test'})).resolves.toBe(true);
  });

  it('load object successfully', async () => {
    await expect(load('testKey')).resolves.toStrictEqual({
      id: 1,
      value: 'test',
    });
  });

  it('deletes object successfully', async () => {
    await remove('testKey');
    await expect(loadString('testKey')).resolves.toBe(null);
  });

  it('stores string successfully', async () => {
    await expect(saveString('testKey', 'testValue')).resolves.toBe(true);
  });

  it('load string successfully', async () => {
    await expect(loadString('testKey')).resolves.toBe('testValue');
  });

  it('clears all storage successfully', async () => {
    await saveString('testKey1', 'testValue1');
    await clear();
    await expect(loadString('testKey1')).resolves.toBe(null);
    await expect(loadString('testKey')).resolves.toBe(null);
  });
});
