import styled, { createGlobalStyle } from 'styled-components';
import theme from './theme';

// Global styles for the application
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    font-family: ${({ theme }) => theme.typography.fontFamily.base};
    font-size: 16px;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text.dark};
    background-color: ${({ theme }) => theme.colors.bg.primary};
  }
  
  a {
    color: ${({ theme }) => theme.colors.text.link};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.text.linkHover};
    }
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  ul, ol {
    list-style: none;
  }
  
  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.heading};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

// Media query helper functions
export const media = {
  xs: `@media (min-width: ${theme.breakpoints.xs})`,
  sm: `@media (min-width: ${theme.breakpoints.sm})`,
  md: `@media (min-width: ${theme.breakpoints.md})`,
  lg: `@media (min-width: ${theme.breakpoints.lg})`,
  xl: `@media (min-width: ${theme.breakpoints.xl})`,
  xxl: `@media (min-width: ${theme.breakpoints.xxl})`,
};

// Common styled components that can be reused across the application
export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  
  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.focusRing};
  }
  
  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.brand.primary};
          color: ${theme.colors.text.white};
          border: ${theme.borderWidth.thin} solid ${theme.colors.orange[600]};
          box-shadow: ${theme.shadows.sm};
          
          &:hover {
            background-color: ${theme.colors.orange[600]};
            box-shadow: ${theme.shadows.orangeMd};
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.white};
          color: ${theme.colors.orange[600]};
          border: ${theme.borderWidth.thin} solid ${theme.colors.border.primary};
          
          &:hover {
            background-color: ${theme.colors.orange[50]};
            color: ${theme.colors.orange[700]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.orange[600]};
          border: ${theme.borderWidth.thin} solid ${theme.colors.orange[500]};
          
          &:hover {
            background-color: ${theme.colors.orange[50]};
          }
        `;
      default:
        return '';
    }
  }}
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: ${({ theme }) => theme.borderWidth.thin} solid ${({ theme }) => theme.colors.border.light};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  
  ${({ highlight, theme }) => highlight && `
    border-left: ${theme.borderWidth.thick} solid ${theme.colors.orange[500]};
  `}
`;

export const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: ${({ theme }) => theme.borderWidth.thin} solid ${({ theme }) => theme.colors.border.light};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

export const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Input = styled.input`
  border: ${({ theme }) => theme.borderWidth.thin} solid ${({ theme }) => theme.colors.border.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  transition: border ${({ theme }) => theme.transitions.fast};
  width: 100%;
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.border.focus};
    box-shadow: ${({ theme }) => theme.shadows.focusRing};
    outline: none;
  }
  
  ${({ error, theme }) => error && `
    border-color: #e53e3e;
  `}
`;
