import React, { useState } from 'react';

/**
 * Optimized Image component with lazy loading and error handling
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for accessibility
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.lazy - Whether to lazy load the image
 * @param {Object} props... - Other props passed to img element
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  lazy = true,
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setIsError] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e) => {
    setIsError(true);
    onError?.(e);
  };

  // Placeholder component for loading state
  const Placeholder = () => (
    <div 
      className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
      {...props}
    >
      <svg 
        className="w-8 h-8 text-gray-400" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path 
          fillRule="evenodd" 
          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
          clipRule="evenodd" 
        />
      </svg>
    </div>
  );

  // Error state component
  const ErrorState = () => (
    <div 
      className={`bg-gray-100 flex items-center justify-center text-gray-400 ${className}`}
      {...props}
    >
      <div className="text-center">
        <svg 
          className="w-8 h-8 mx-auto mb-2" 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path 
            fillRule="evenodd" 
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
            clipRule="evenodd" 
          />
        </svg>
        <p className="text-xs">Failed to load image</p>
      </div>
    </div>
  );

  // Show error state if image failed to load
  if (hasError) {
    return <ErrorState />;
  }

  // Show placeholder while loading
  if (!isLoaded) {
    return <Placeholder />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage;

