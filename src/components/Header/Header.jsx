import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaVirus, FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import useRippleEffect from '../../hooks/useRippleEffect';
import '../../styles-config/components/_header.css';

// Navigation items data - defined outside component to prevent recreations
const navItems = [
  { title: 'ABOUT US', subtitle: 'Meet the team', path: '/about' },
  { title: 'SERVICES', subtitle: 'And products', path: '/services' },
  { title: 'DOCUMENTS', subtitle: 'Download', path: '/documents' },
  { title: 'PAIA MANUAL', subtitle: 'Legal T&Cs', path: '/paia-manual' },
  { title: 'CONTACT US', subtitle: 'and Map', path: '/contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Create refs for DOM elements
  const menuButtonRef = useRef(null);
  const navListRef = useRef(null);
  const menuOverlayRef = useRef(null);
  const navItemsRef = useRef([]);
  const headerRef = useRef(null);
  
  // GSAP timeline for menu animations
  const menuTl = useRef(null);
  
  // Apply ripple effect to nav links and buttons
  useRippleEffect('.nav-link, .top-bar-item');
  
  // Check if a link is active - memoized to prevent recreations
  const isLinkActive = useCallback((path) => {
    return location.pathname === path || 
           (location.pathname.includes(path) && path !== '/' && path !== '');
  }, [location.pathname]);
  
  // Close menu with animation - define this first since it's used in other functions
  const closeMenu = useCallback(() => {
    // Reverse the menu animation
    if (menuTl.current) {
      menuTl.current.reverse().eventCallback('onReverseComplete', () => {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
      });
    } else {
      setIsMenuOpen(false);
      document.body.classList.remove('menu-open');
    }
    
    // Animate the menu button icon
    if (menuButtonRef.current) {
      const iconElement = menuButtonRef.current.querySelector('svg');
      if (iconElement) {
        gsap.to(iconElement, {
          rotation: 0,
          duration: 0.3,
          ease: 'back.in'
        });
      }
    }
  }, []);
  
  // Open menu with animation
  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    document.body.classList.add('menu-open');
    
    // Play the menu animation
    if (menuTl.current) {
      menuTl.current.play();
    }
    
    // Animate the menu button icon
    if (menuButtonRef.current) {
      const iconElement = menuButtonRef.current.querySelector('svg');
      if (iconElement) {
        gsap.to(iconElement, {
          rotation: 90,
          duration: 0.3,
          ease: 'back.out'
        });
      }
    }
  }, []);
  
  // Toggle mobile menu with GSAP animations
  const toggleMenu = useCallback((e) => {
    // Prevent event from bubbling up
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isMenuOpen, closeMenu, openMenu]);
  
  // Handle nav link click
  const handleNavLinkClick = useCallback((path) => {
    // Close the menu if it's open and we're on mobile
    if (isMenuOpen && isMobile) {
      closeMenu();
    }
    
    // Navigate to the path
    navigate(path);
  }, [isMenuOpen, isMobile, closeMenu, navigate]);
  
  // Navigate to home page
  const navigateToHome = useCallback(() => {
    // Close the menu if it's open
    if (isMenuOpen && isMobile) {
      closeMenu();
    }
    
    // Navigate to home
    navigate('/');
  }, [isMenuOpen, isMobile, closeMenu, navigate]);
  
  // Initialize GSAP animations
  useEffect(() => {
    // Create a timeline for menu animations
    menuTl.current = gsap.timeline({ paused: true });
    
    // Set initial states for mobile only
    if (isMobile) {
      if (navListRef.current) {
        gsap.set(navListRef.current, { 
          height: 0, 
          opacity: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
        });
      }
      
      if (menuOverlayRef.current) {
        gsap.set(menuOverlayRef.current, { 
          opacity: 0,
          pointerEvents: 'none',
          visibility: 'hidden',
        });
      }
      
      // Add animations to timeline for mobile
      menuTl.current
        .to(menuOverlayRef.current, { 
          opacity: 1, 
          pointerEvents: 'auto',
          visibility: 'visible',
          duration: 0.3,
          ease: 'power2.out'
        })
        .to(navListRef.current, { 
          height: 'auto', 
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.4,
          ease: 'power3.out'
        }, '-=0.1')
        .staggerFromTo(
          navItemsRef.current, 
          0.3, 
          { y: 20, opacity: 0 }, 
          { y: 0, opacity: 1, ease: 'back.out(1.7)' }, 
          0.05, 
          '-=0.2'
        );
    } else {
      // For desktop, ensure nav is visible
      if (navListRef.current) {
        gsap.set(navListRef.current, {
          height: 'auto',
          opacity: 1,
          overflow: 'visible',
          pointerEvents: 'auto'
        });
      }
    }
    
    return () => {
      // Clean up animations
      if (menuTl.current) {
        menuTl.current.kill();
      }
    };
  }, [isMobile]);
  
  // Handle screen resize to determine if mobile view
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      
      // Only update if the state is changing
      if (mobile !== isMobile) {
        setIsMobile(mobile);
        
        // If switching from mobile to desktop, ensure menu is closed
        if (!mobile && isMenuOpen) {
          closeMenu();
        }
        
        // Reset animations based on new screen size
        if (!mobile) {
          // For desktop, ensure nav is visible
          if (navListRef.current) {
            gsap.set(navListRef.current, {
              height: 'auto',
              opacity: 1,
              overflow: 'visible',
              pointerEvents: 'auto'
            });
          }
          
          // Hide overlay
          if (menuOverlayRef.current) {
            gsap.set(menuOverlayRef.current, {
              opacity: 0,
              pointerEvents: 'none',
              visibility: 'hidden'
            });
          }
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, isMobile, closeMenu]);
  
  // Handle scroll event for sticky header
  useEffect(() => {
    let lastScrollTop = 0;
    const scrollThreshold = 100; // Threshold for showing/hiding header
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Make header sticky when scrolling down
      if (scrollTop > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      
      // No need for complex show/hide animation - just keep header visible
      // This ensures all components within the header remain persistent
      
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Skip if menu is not open
      if (!isMenuOpen) return;
      
      // Check if click is outside both the menu and the toggle button
      if (
        navListRef.current && 
        !navListRef.current.contains(event.target) && 
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);
  
  // Clean up on unmount
  useEffect(() => {
    return () => {
      // Remove any classes added to body
      document.body.classList.remove('menu-open');
    };
  }, []);
  
  // Add a subtle animation to the active link
  useEffect(() => {
    navItemsRef.current.forEach((item, index) => {
      if (!item) return;
      
      const link = item.querySelector('.nav-link');
      if (!link) return;
      
      const path = navItems[index]?.path;
      if (!path) return;
      
      if (isLinkActive(path)) {
        link.classList.add('active');
        
        gsap.fromTo(
          link,
          { scale: 1 },
          { 
            scale: 1.05, 
            duration: 0.3, 
            ease: 'power2.out',
            yoyo: true,
            repeat: 1
          }
        );
      } else {
        link.classList.remove('active');
      }
    });
  }, [location.pathname, isLinkActive]);
  
  // Add nav items to ref array
  const addToNavItemsRef = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };
  
  return (
    <>
      {/* Background overlay for mobile menu - only rendered for mobile */}
      {isMobile && (
        <div 
          ref={menuOverlayRef}
          className="menu-overlay"
          onClick={closeMenu}
        />
      )}
      
      <header ref={headerRef} className={`site-header ${isSticky ? 'sticky' : ''}`}>
        <div className="top-bar">
          <div className="container">
            <div className="top-bar-content">
              <div 
                className="top-bar-item ripple-effect home-link"
                onClick={navigateToHome}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => e.key === 'Enter' && navigateToHome()}
              >
                <FaHome />
                The home of VAN DER WALT PHYSIOTHERAPISTS
              </div>
              <div className="top-bar-item ripple-effect">
                <FaVirus />
                COVID-19 Corona Virus South African Resource Portal
              </div>
            </div>
          </div>
        </div>
        
        <div className="main-header">
          <div className="container">
            <div 
              className="logo-container"
              onClick={navigateToHome}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && navigateToHome()}
            >
              <img 
                src="https://www.myphysio.pro/images/_global/logo3.png" 
                alt="Van der Walt Physio Witbank" 
                className="logo"
              />
            </div>
            
            {/* Only show mobile menu toggle on smaller screens */}
            {isMobile && (
              <button 
                ref={menuButtonRef}
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                type="button"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            )}
          </div>
        </div>
        
        <nav className="main-nav">
          <div className="container">
            {/* Apply different classes based on mobile/desktop */}
            <ul 
              ref={navListRef}
              className={`nav-list ${!isMobile ? 'desktop-nav' : ''}`}
            >
              {/* Add Home link to navigation */}
              <li ref={addToNavItemsRef} className="nav-item">
                {isMobile ? (
                  <button 
                    className={`nav-link ripple-effect ${location.pathname === '/' ? 'active' : ''}`}
                    onClick={() => handleNavLinkClick('/')}
                    type="button"
                  >
                    <strong>HOME</strong>
                    <span className="nav-subtitle">Welcome</span>
                  </button>
                ) : (
                  <Link 
                    to="/"
                    className={`nav-link ripple-effect ${location.pathname === '/' ? 'active' : ''}`}
                  >
                    <strong>HOME</strong>
                    <span className="nav-subtitle">Welcome</span>
                  </Link>
                )}
              </li>
              
              {/* Original navigation items */}
              {navItems.map((item, index) => (
                <li key={item.path} ref={addToNavItemsRef} className="nav-item">
                  {isMobile ? (
                    // For mobile: Use button for better accessibility when it's a menu
                    <button 
                      className={`nav-link ripple-effect ${isLinkActive(item.path) ? 'active' : ''}`}
                      onClick={() => handleNavLinkClick(item.path)}
                      type="button"
                    >
                      <strong>{item.title}</strong>
                      <span className="nav-subtitle">{item.subtitle}</span>
                    </button>
                  ) : (
                    // For desktop: Use proper Link component from react-router
                    <Link 
                      to={item.path}
                      className={`nav-link ripple-effect ${isLinkActive(item.path) ? 'active' : ''}`}
                    >
                      <strong>{item.title}</strong>
                      <span className="nav-subtitle">{item.subtitle}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
