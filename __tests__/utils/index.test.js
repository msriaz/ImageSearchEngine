import {
  usePrevious,
  reportError,
  getImageUrl,
  generateColorPalleteConstants,
} from '../../src/utils';
import {renderHook} from '@testing-library/react-hooks';

describe('utils', () => {
  it('should run the function properly', () => {
    const text = 'test';
    const {result, rerender} = renderHook(() => usePrevious(text));
    rerender();
    expect(result.current).toBe(text);
  });

  it('reportError successfully', () => {
    expect(reportError('testFunc', 'error')).toEqual(undefined);
  });

  it('should return the URL based on the image data', () => {
    const mockImageData = {
      id: '51443585974',
      secret: '0e481ab487',
      server: '65535',
      farm: 66,
    };
    const {farm, secret, server, id} = mockImageData;
    expect(getImageUrl(mockImageData)).toBe(
      `https://farm${farm}.static.flickr.com/${server}/${id}_${secret}.jpg`,
    );
  });

  it('should return the color constants', () => {
    const colors = {
      darkestGray: '#4D4D4D',
      gray: '#A8A8A8',
    };
    const colorConstants = {
      DARKEST_GRAY: '#4D4D4D',
      GRAY: '#A8A8A8',
    };
    expect(generateColorPalleteConstants(colors)).toStrictEqual(colorConstants);
  });
});
