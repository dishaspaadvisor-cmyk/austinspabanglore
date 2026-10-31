import { useCallback } from 'react';
import { CONFIG } from '../config/constants';

/**
 * Custom hook for WhatsApp functionality
 * Provides methods to send WhatsApp messages and book appointments
 */
export const useWhatsApp = () => {
  const PREFIX = `Hi, I'm coming from your ${CONFIG.BUSINESS_NAME} website. `;
  const sendMessage = useCallback((message, phoneNumber = CONFIG.WHATSAPP_NUMBER) => {
    try {
      const prefixed = message?.startsWith('[') ? message : `${PREFIX}${message}`;
      const encodedMessage = encodeURIComponent(prefixed);
      const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error sending WhatsApp message:', error);
      // Fallback to copy to clipboard
      navigator.clipboard?.writeText(message);
      alert('Message copied to clipboard. Please paste it in WhatsApp.');
    }
  }, [PREFIX]);

  const bookAppointment = useCallback((serviceName) => {
    const message = `Hello, I am interested in booking a ${serviceName}. Can you provide more details about availability and pricing?`;
    sendMessage(message);
  }, [sendMessage]);

  const contactUs = useCallback(() => {
    const message = `Hello, I would like to know more about your spa services. Please contact me.`;
    sendMessage(message);
  }, [sendMessage]);

  const scheduleVisit = useCallback(() => {
    const message = `Hello, I would like to schedule a visit to your spa. Please let me know the best time to visit.`;
    sendMessage(message);
  }, [sendMessage]);

  return {
    sendMessage,
    bookAppointment,
    contactUs,
    scheduleVisit,
  };
};

