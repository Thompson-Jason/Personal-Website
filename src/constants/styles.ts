// Common spacing and layout constants
export const SPACING = {
  xs: 'px-2 py-1',
  sm: 'px-4 py-2',
  md: 'px-6 py-3',
  lg: 'px-8 py-4',
  xl: 'px-12 py-6',
} as const;

// Common responsive padding patterns
export const RESPONSIVE_PADDING = 'px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48' as const;

// Animation durations
export const ANIMATION = {
  fast: 'duration-150',
  normal: 'duration-200',
  slow: 'duration-300',
} as const;

// Common border radius
export const BORDER_RADIUS = {
  sm: 'rounded',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
} as const;

// Focus styles for accessibility
export const FOCUS_STYLES = 'focus:outline-none focus:ring-2 focus:ring-primary-accent' as const;

// Button styles
export const BUTTON_STYLES = {
  primary: `${SPACING.sm} ${BORDER_RADIUS.md} bg-primary-accent text-primary-secondary font-semibold hover:bg-primary-hover transition-colors ${FOCUS_STYLES}`,
  secondary: `${SPACING.sm} ${BORDER_RADIUS.md} ring-2 ring-primary-accent text-primary-accent hover:bg-primary-accent hover:text-primary-secondary transition-colors ${FOCUS_STYLES}`,
} as const;
