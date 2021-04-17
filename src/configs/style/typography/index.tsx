import {
  FONT_FAMILY_BOLD,
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_12,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_LIGHT,
  FONT_WEIGHT_MEDIUM,
  FONT_WEIGHT_REGULAR,
} from '../font';
import {scaleFont} from '../mixin';

// FONT STYLE

export const FONT_LIGHT = (size = FONT_SIZE_12) => ({
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY_LIGHT,
  fontWeight: FONT_WEIGHT_LIGHT,
});

export const FONT_REGULAR = (size = FONT_SIZE_12) => ({
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
});

export const FONT_MEDIUM = (size = FONT_SIZE_12) => ({
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY_MEDIUM,
  fontWeight: FONT_WEIGHT_MEDIUM,
});

export const FONT_BOLD = (size = FONT_SIZE_12) => ({
  fontSize: scaleFont(size),
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
});
