import { useCallback } from 'react';
import { CONFIG } from '../config/constants';

/**
 * Custom hook for phone functionality
 * Provides methods to make phone calls and handle phone-related actions
 */
export const usePhone = () => {
  const makeCall = useCallback((phoneNumber = CONFIG.PHONE_NUMBER) => {
    try {
      const cleanNumber = phoneNumber.replace(/\s/g, '');
      const url = `tel:${cleanNumber}`;
      window.location.href = url;
    } catch (error) {
      console.error('Error making phone call:', error);
      // Fallback - copy number to clipboard
      navigator.clipboard?.writeText(phoneNumber);
      alert(`Phone number copied to clipboard: ${phoneNumber}`);
    }
  }, []);

  const copyPhoneNumber = useCallback((phoneNumber = CONFIG.PHONE_NUMBER) => {
    try {
      navigator.clipboard.writeText(phoneNumber);
      // You could add a toast notification here
      alert(`Phone number copied: ${phoneNumber}`);
    } catch (error) {
      console.error('Error copying phone number:', error);
      alert(`Phone number: ${phoneNumber}`);
    }
  }, []);

  const formatPhoneNumber = useCallback((phoneNumber) => {
    // Format phone number for display (e.g., +91 98765 43210)
    const cleaned = phoneNumber.replace(/\D/g, '');
    if (cleaned.length === 12 && cleaned.startsWith('91')) {
      return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 7)} ${cleaned.slice(7)}`;
    }
    return phoneNumber;
  }, []);

  return {
    makeCall,
    copyPhoneNumber,
    formatPhoneNumber,
  };
};

