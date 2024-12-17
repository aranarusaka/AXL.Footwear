import { STORE_NAME } from '../constants';

export const getStorageKey = (key: string): string => {
  return `${STORE_NAME.toLowerCase()}-${key}`;
};

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = window.localStorage.getItem(getStorageKey(key));
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const setLocalStorage = <T>(key: string, value: T): void => {
  try {
    window.localStorage.setItem(getStorageKey(key), JSON.stringify(value));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};