// Theme utilities for MyPhysio.pro
const theme = {
  colors: {
    // Primary Colors - Deep Orange
    orange: {
      50: '#fff3ee',
      100: '#ffe6d9',
      200: '#ffc7ad',
      300: '#ffa880',
      400: '#ff8952',
      500: '#ff6a24', // Main deep orange from logo
      600: '#e85511',
      700: '#c44209',
      800: '#a1340b',
      900: '#7f2a0c',
    },
    
    // Neutral Colors - Gray
    gray: {
      50: '#f9f9f9',
      100: '#f0f0f0',
      200: '#e4e4e4',
      300: '#d1d1d1',
      400: '#b4b4b4',
      500: '#9a9a9a', // Main gray from logo
      600: '#7e7e7e',
      700: '#666666',
      800: '#444444',
      900: '#2c2c2c',
    },
    
    // White
    white: '#ffffff',
    offWhite: '#fcfcfc',
    
    // Brand Colors
    brand: {
      primary: '#ff6a24', // orange.500
      secondary: '#7e7e7e', // gray.600
      light: '#ffffff', // white
    },
    
    // Text Colors
    text: {
      dark: '#2c2c2c', // gray.900
      medium: '#666666', // gray.700
      light: '#9a9a9a', // gray.500
      white: '#ffffff', // white
      primary: '#c44209', // orange.700
      primaryLight: '#ff6a24', // orange.500
      link: '#e85511', // orange.600
      linkHover: '#c44209', // orange.700
    },
    
    // Background Colors
    bg: {
      primary: '#ffffff', // white
      secondary: '#f0f0f0', // gray.100
      tertiary: '#e4e4e4', // gray.200
      accent: '#ff6a24', // orange.500
      accentLight: '#ffe6d9', // orange.100
    },
    
    // Border Colors
    border: {
      light: '#e4e4e4', // gray.200
      medium: '#d1d1d1', // gray.300
      dark: '#b4b4b4', // gray.400
      primary: '#ffa880', // orange.300
      focus: '#ff6a24', // orange.500
    },
    
    // Highlights
    highlight: {
      orange: 'rgba(255, 106, 36, 0.15)',
      light: 'rgba(255, 255, 255, 0.8)',
      gray: 'rgba(154, 154, 154, 0.15)',
    },
    
    // Overlays
    overlay: {
      dark: 'rgba(44, 44, 44, 0.7)',
      light: 'rgba(255, 255, 255, 0.7)',
      orange: 'rgba(255, 106, 36, 0.7)',
    },
  },
  
  // Border Radiuses
  borderRadius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px',
    round: '50%',
  },
  
  // Border Widths
  borderWidth: {
    thin: '1px',
    medium: '2px',
    thick: '3px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)',
    
    // Orange Shadows
    orangeSm: '0 1px 3px rgba(255, 106, 36, 0.2)',
    orangeMd: '0 4px 6px rgba(255, 106, 36, 0.25)',
    orangeLg: '0 8px 15px rgba(255, 106, 36, 0.3)',
    
    // Focus Ring
    focusRing: '0 0 0 3px rgba(255, 106, 36, 0.4)',
  },
  
  // Gradients
  gradients: {
    orangeHorizontal: 'linear-gradient(90deg, #e85511 0%, #ff8952 100%)',
    orangeVertical: 'linear-gradient(180deg, #ff6a24 0%, #e85511 100%)',
    orangeRadial: 'radial-gradient(circle, #ff8952 0%, #e85511 100%)',
    
    grayHorizontal: 'linear-gradient(90deg, #7e7e7e 0%, #b4b4b4 100%)',
    grayVertical: 'linear-gradient(180deg, #9a9a9a 0%, #666666 100%)',
    
    lightVertical: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%)',
  },
  
  // Transitions
  transitions: {
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },
  
  // Spacing (for padding, margin, etc.)
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    xxl: '3rem',     // 48px
    xxxl: '4rem',    // 64px
  },
  
  // Typography
  typography: {
    fontFamily: {
      base: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
      heading: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      xxl: '1.5rem',    // 24px
      xxxl: '2rem',     // 32px
      display: '2.5rem', // 40px
    },
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  
  // Z-index values
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

export default theme;