import { Platform } from 'react-native';

const jcFonts = {
  jcFont: 'Roboto',
  jcFontRegular: 'Roboto-Regular',
  jcFontMedium: 'Roboto-Medium',
  jcFontItalic: 'Roboto-Italic',
};

/**
 * Just the font names.
 *
 * The various styles of fonts are defined in the typography styles.
 */
export const font = {
  /**
   * The primary font. Used in most places.
   */
  primary: Platform.select({ ios: jcFonts.jcFontRegular, android: jcFonts.jcFontRegular }),

  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: jcFonts.jcFontMedium, android: jcFonts.jcFontMedium }),

  italic: jcFonts.jcFontItalic,

};
