import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Standard mobile screen sizes (e.g., iPhone 11)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Scales the provided size horizontally based on the current screen width.
 */
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

/**
 * Scales the provided size vertically based on the current screen height.
 */
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

/**
 * Scales the provided size moderately by a given factor to avoid over-scaling on larger devices.
 */
const moderateScale = (size: number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;

export { horizontalScale, verticalScale, moderateScale };
