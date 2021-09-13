import {useEffect, useRef} from 'react';
import snakeCase from 'lodash/snakeCase';
/**
 *
 * @param {*} value
 * @returns previous state
 */
export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

/**
 *
 * @param {*} imgData
 * @returns image url to render
 */
export const getImageUrl = imgData => {
  const {farm, server, id, secret} = imgData;
  return `https://farm${farm}.static.flickr.com/${server}/${id}_${secret}.jpg`;
};

/**
 * generate color consts from color pallette
 * @param {*} colors
 */
export const generateColorPalleteConstants = colors => {
  const colorsList = {};
  Object.keys(colors).forEach(colorKey => {
    colorsList[snakeCase(colorKey).toUpperCase()] = colors[colorKey];
  });
  return colorsList;
};

/**
 *
 * @param {*} funcName
 * @param {*} error
 */
export const reportError = (funcName, error) => {
  console.log(`Error in ${funcName}`, error);
};
