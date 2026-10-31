import React from 'react';
import { COLORS, SPACING, SHADOWS, TRANSITIONS } from '../../styles/design-tokens';

/**
 * Reusable Button component with consistent styling
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, outline)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.disabled - Whether button is disabled
 * @param {boolean} props.loading - Whether button is in loading state
 * @param {React.ReactNode} props.children - Button content
 * @param {string} props.className - Additional CSS classes
 * @param {Function} props.onClick - Click handler
 * @param {Object} props... - Other props passed to button element
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  // Base button classes
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-full
    transition-all duration-300
    transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${className}
  `.trim();

  // Variant styles
  const variants = {
    primary: `
      bg-[#465991] text-white
      hover:bg-[#380b40]
      focus:ring-[#465991]
      shadow-lg hover:shadow-xl
    `,
    secondary: `
      bg-white text-[#465991]
      border-2 border-[#465991]
      hover:bg-[#fcf6fd]
      focus:ring-[#465991]
      shadow-md hover:shadow-lg
    `,
    outline: `
      bg-transparent text-[#465991]
      border-2 border-[#465991]
      hover:bg-[#465991] hover:text-white
      focus:ring-[#465991]
    `,
    ghost: `
      bg-transparent text-[#465991]
      hover:bg-[#fcf6fd]
      focus:ring-[#465991]
    `,
    whatsapp: `
      bg-gradient-to-r from-emerald-500 to-emerald-600
      text-white
      hover:from-emerald-600 hover:to-emerald-700
      focus:ring-emerald-500
      shadow-lg hover:shadow-xl
    `,
  };

  // Size styles
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const variantClasses = variants[variant] || variants.primary;
  const sizeClasses = sizes[size] || sizes.md;

  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses} ${sizeClasses}`}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
