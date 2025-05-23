// src/utils/errors/constants.js
/**
 * Константы для работы с ошибками
 */

/**
 * Типы ошибок
 * @enum {string}
 */
const ErrorType = {
  HTTP: 'HTTP',
  DATABASE: 'DATABASE',
  BUSINESS: 'BUSINESS',
  SYSTEM: 'SYSTEM',
  AUTH: 'AUTH',
  VALIDATION: 'VALIDATION',
  GAME: 'GAME'
};

/**
 * Коды ошибок
 * @enum {string}
 */
const ErrorCode = {
  // Базовая ошибка
  APP_ERROR: 'APP_ERROR',

  // HTTP ошибки
  BAD_REQUEST: 'BAD_REQUEST',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  CONFLICT: 'CONFLICT',
  
  // Ошибки аутентификации
  AUTH_INVALID_CREDENTIALS: 'AUTH_INVALID_CREDENTIALS',
  AUTH_INVALID_TOKEN: 'AUTH_INVALID_TOKEN',
  AUTH_TOKEN_EXPIRED: 'AUTH_TOKEN_EXPIRED',
  AUTH_INSUFFICIENT_PERMISSIONS: 'AUTH_INSUFFICIENT_PERMISSIONS',
  AUTH_ACCOUNT_INACTIVE: 'AUTH_ACCOUNT_INACTIVE',
  
  // Ошибки базы данных
  DATABASE_ERROR: 'DATABASE_ERROR',
  DB_CONNECTION_ERROR: 'DB_CONNECTION_ERROR',
  DB_QUERY_ERROR: 'DB_QUERY_ERROR',
  DB_TRANSACTION_ERROR: 'DB_TRANSACTION_ERROR',
  DB_MIGRATION_ERROR: 'DB_MIGRATION_ERROR',
  
  // Бизнес-ошибки
  BUSINESS_ERROR: 'BUSINESS_ERROR',
  
  // Ошибки игр
  GAME_FULL: 'GAME_FULL',
  GAME_ALREADY_JOINED: 'GAME_ALREADY_JOINED',
  GAME_INVALID_STATUS: 'GAME_INVALID_STATUS',
  GAME_TIME_IN_PAST: 'GAME_TIME_IN_PAST',
  
  // Системные ошибки
  SYSTEM_ERROR: 'SYSTEM_ERROR',
  CONFIG_ERROR: 'CONFIG_ERROR',
  FILE_SYSTEM_ERROR: 'FILE_SYSTEM_ERROR',
  NETWORK_ERROR: 'NETWORK_ERROR'
};

module.exports = {
  ErrorType,
  ErrorCode
};