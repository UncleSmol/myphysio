# Media Components Directory Guide

This guide outlines where to place media components (images, icons, etc.) used in the header component and how they should be organized in your project structure.

## Directory Structure

```
src/
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   │   └── logo3.png (Main logo)
│   │   ├── icons/
│   │   │   ├── home.svg
│   │   │   ├── virus.svg
│   │   │   ├── menu.svg
│   │   │   └── close.svg
│   │   └── backgrounds/
│   │       └── header-bg.jpg (Optional header background)
│   └── fonts/
│       ├── Montserrat/
│       └── OpenSans/
├── components/
│   └── Header/
│       ├── Header.jsx (Main header component)
│       ├── TopBar.jsx (Optional sub-component)
│       ├── MainHeader.jsx (Optional sub-component)
│       ├── Navigation.jsx (Optional sub-component)
│       └── MobileMenu.jsx (Optional sub-component)
├── styles/
│   └── (React component styles using styled-components)
└── styles-config/
    └── (CSS variables and utilities)
```

## Media Components for Header

### 1. Logo

**Location**: `/src/assets/images/logo/logo3.png`

**Usage in Header Component**:
```jsx
import logo from '../../assets/images/logo/logo3.png';

// In your component
<img src={logo} alt="Van der Walt Physio Witbank" />
```

### 2. Icons

If using SVG icons directly:

**Location**: `/src/assets/images/icons/`

**Usage with React Icons (recommended)**:
```jsx
import { FaHome, FaVirus, FaBars, FaTimes } from 'react-icons/fa';

// In your component
<FaHome /> // Home icon
<FaVirus /> // Virus icon for COVID alert
<FaBars /> // Hamburger menu for mobile
<FaTimes /> // Close icon for mobile menu
```

### 3. Custom SVG Icons (if not using React Icons)

**Location**: `/src/assets/images/icons/`

**Usage in Header Component**:
```jsx
import { ReactComponent as HomeIcon } from '../../assets/images/icons/home.svg';
import { ReactComponent as VirusIcon } from '../../assets/images/icons/virus.svg';

// In your component
<HomeIcon />
<VirusIcon />
```

## Implementation Notes

### For React Icons Library

1. Install the package:
```bash
npm install react-icons
```

2. Import icons from the appropriate collection:
```jsx
import { FaHome, FaVirus } from 'react-icons/fa'; // Font Awesome icons
import { IoMenu, IoClose } from 'react-icons/io5'; // Ionicons
```

### For Custom SVG Icons

1. Create SVG files with proper viewBox attributes
2. Use them as React components with the ReactComponent import syntax
3. Style them using styled-components:

```jsx
import styled from 'styled-components';
import { ReactComponent as HomeSVG } from '../../assets/images/icons/home.svg';

const HomeIcon = styled(HomeSVG)`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;
```

### For Background Images

If you need background images for the header:

```css
.header-with-bg {
  background-image: url('../../assets/images/backgrounds/header-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

Or with styled-components:

```jsx
import styled from 'styled-components';
import headerBg from '../../assets/images/backgrounds/header-bg.jpg';

const HeaderWithBackground = styled.header`
  background-image: url(${headerBg});
  background-size: cover;
  background-position: center;
`;
```

## Responsive Image Considerations

For responsive images, consider using the following techniques:

1. **For the logo**:
   - Use CSS to control the size at different breakpoints
   - Consider having different sized logos for mobile vs desktop

2. **For background images**:
   - Use media queries to load different sized images at different screen sizes
   - Consider using the `srcset` attribute for responsive images

```jsx
<picture>
  <source media="(max-width: 768px)" srcset="../../assets/images/logo/logo-small.png" />
  <source media="(min-width: 769px)" srcset="../../assets/images/logo/logo3.png" />
  <img src="../../assets/images/logo/logo3.png" alt="Van der Walt Physio Witbank" />
</picture>
```
</qodoArtifact>