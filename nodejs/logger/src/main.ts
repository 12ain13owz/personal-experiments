/* eslint-disable no-console */
import { logger } from './utils/logger.utils'

// ==================== Constants for Demo ====================
const testDate = new Date('2024-01-15T10:30:45.123Z')
const testFunction = () => console.log('Hello')

// ==================== 1. Primitive Values ====================
console.log('========== 1. PRIMITIVE VALUES ==========\n')

logger.debug('Simple string message')
logger.info(123)
logger.warn(true)
logger.error(null)
logger.debug(undefined)

// ==================== 2. Strings with Special Cases ====================
console.log('\n========== 2. STRING VARIATIONS ==========\n')

logger.info('Simple text')
logger.info('Text with "quotes" inside')
logger.info('Multi\nline\ntext')
logger.info('') // Empty string

// ==================== 3. Numbers ====================
console.log('\n========== 3. NUMBERS ==========\n')

logger.info(0)
logger.info(42)
logger.info(-999)
logger.info(3.14159)
logger.info(Infinity)
logger.info(-Infinity)
logger.info(NaN)

// ==================== 4. Dates ====================
console.log('\n========== 4. DATES ==========\n')

logger.info(testDate)
logger.info(new Date())
logger.info(new Date('1970-01-01'))

// ==================== 5. Functions ====================
console.log('\n========== 5. FUNCTIONS ==========\n')

logger.info(testFunction)
logger.info(() => {})
logger.info(function namedFunction() {
  return 'test'
})

// ==================== 6. Simple Arrays ====================
console.log('\n========== 6. SIMPLE ARRAYS ==========\n')

logger.info([]) // Empty array
logger.info([1, 2, 3])
logger.info(['a', 'b', 'c'])
logger.info([true, false, true])
logger.info([1, 'two', true, null, undefined])

// ==================== 7. Arrays with 6+ Items ====================
console.log('\n========== 7. LONGER ARRAYS ==========\n')

logger.info([1, 2, 3, 4, 5, 6, 7, 8])
logger.info(['one', 'two', 'three', 'four', 'five', 'six'])

// ==================== 8. Simple Objects ====================
console.log('\n========== 8. SIMPLE OBJECTS ==========\n')

logger.info({}) // Empty object
logger.info({ name: 'John' })
logger.info({ id: 123, active: true })
logger.info({
  username: 'john_doe',
  age: 30,
  verified: true,
  score: 95.5,
})

// ==================== 9. Objects with Date and Null ====================
console.log('\n========== 9. OBJECTS WITH SPECIAL VALUES ==========\n')

logger.info({
  name: 'John',
  birthdate: testDate,
  email: null,
  phone: undefined,
  score: 100,
})

// ==================== 10. Nested Objects ====================
console.log('\n========== 10. NESTED OBJECTS ==========\n')

logger.info({
  user: {
    name: 'John Doe',
    age: 30,
  },
  location: {
    city: 'Bangkok',
    country: 'Thailand',
  },
})

logger.info({
  level1: {
    level2: {
      level3: {
        deepValue: 'Found me!',
      },
    },
  },
})

// ==================== 11. Arrays of Objects ====================
console.log('\n========== 11. ARRAYS OF OBJECTS ==========\n')

logger.info([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
])

logger.info([
  {
    id: 1,
    name: 'John',
    timestamp: testDate,
    active: true,
  },
  {
    id: 2,
    name: 'Jane',
    timestamp: new Date(),
    active: false,
  },
  {
    id: 3,
    name: 'Bob',
    timestamp: testDate,
    active: null,
  },
])

// ==================== 12. Objects with Arrays ====================
console.log('\n========== 12. OBJECTS WITH ARRAYS ==========\n')

logger.info({
  name: 'Team Alpha',
  members: ['Alice', 'Bob', 'Charlie'],
  scores: [95, 87, 92],
})

logger.info({
  user: 'admin',
  permissions: ['read', 'write', 'delete', 'execute', 'admin', 'super_admin'],
  roles: [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Moderator' },
  ],
})

// ==================== 13. Nested Arrays ====================
console.log('\n========== 13. NESTED ARRAYS ==========\n')

logger.info([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
])

logger.info([
  ['a', 'b'],
  [true, false],
  [{ x: 1 }, { y: 2 }],
])

// ==================== 14. Complex Mixed Structures ====================
console.log('\n========== 14. COMPLEX MIXED STRUCTURES ==========\n')

logger.info({
  metadata: {
    version: '1.0.0',
    createdAt: testDate,
    author: {
      name: 'John Doe',
      email: 'john@example.com',
    },
  },
  data: [
    { id: 1, values: [10, 20, 30] },
    { id: 2, values: [40, 50, 60] },
  ],
  settings: {
    enabled: true,
    timeout: 5000,
    retries: null,
  },
})

// ==================== 15. Multiple Values (Array) ====================
console.log('\n========== 15. MULTIPLE VALUES IN ARRAY ==========\n')

logger.info(['User logged in', { userId: 12345, username: 'john_doe' }, testDate])

logger.info(['Processing items', [1, 2, 3, 4, 5], { total: 5, completed: 3 }])

// ==================== 16. Mixed Types in Single Array ====================
console.log('\n========== 16. MIXED TYPES IN SINGLE ARRAY ==========\n')

logger.info(['Message', 42, true, null, { user: 'admin', role: 'superuser' }])

logger.info([
  'Complex data structure',
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  [10, 20, 30],
  testDate,
])

// ==================== 17. All Log Levels ====================
console.log('\n========== 17. ALL LOG LEVELS ==========\n')

logger.error('This is an ERROR message')
logger.warn('This is a WARN message')
logger.info('This is an INFO message')
logger.http('This is an HTTP message')
logger.verbose('This is a VERBOSE message')
logger.debug('This is a DEBUG message')

// ==================== 18. Real-world Scenarios ====================
console.log('\n========== 18. REAL-WORLD SCENARIOS ==========\n')

// * API Request
logger.http([
  'API Request',
  {
    method: 'POST',
    url: '/api/users',
    headers: { 'Content-Type': 'application/json' },
    body: { name: 'John', email: 'john@example.com' },
  },
])

// * Database Query
logger.debug([
  'Database Query',
  {
    query: 'SELECT * FROM users WHERE id = ?',
    params: [123],
    duration: 45.2,
    rows: 1,
  },
])

// * Error with Stack Trace
logger.error([
  'Failed to process user',
  {
    error: 'ValidationError',
    message: 'Email is required',
    userId: 12345,
    timestamp: new Date(),
    details: {
      field: 'email',
      constraint: 'required',
      value: null,
    },
  },
])

// * Performance Metrics
logger.verbose([
  'Performance Metrics',
  {
    endpoint: '/api/users/search',
    metrics: {
      totalRequests: 1250,
      averageResponseTime: 125.5,
      errorRate: 0.02,
      p95: 250,
      p99: 450,
    },
    timestamp: new Date(),
  },
])

// * Batch Processing
logger.info([
  'Batch processing completed',
  {
    batchId: 'batch-2024-001',
    items: [
      { id: 1, status: 'success', duration: 120 },
      { id: 2, status: 'success', duration: 95 },
      { id: 3, status: 'failed', duration: 45, error: 'Timeout' },
      { id: 4, status: 'success', duration: 110 },
    ],
    summary: {
      total: 4,
      successful: 3,
      failed: 1,
      totalDuration: 370,
    },
  },
])

// ==================== 19. Edge Cases ====================
console.log('\n========== 19. EDGE CASES ==========\n')

logger.debug([]) // Empty array as message
logger.debug([[]]) // Array with empty array
logger.debug([{}]) // Array with empty object
logger.debug({ arr: [] }) // Object with empty array
logger.debug({ obj: {} }) // Object with empty object
logger.debug({ func: testFunction }) // Object with function
logger.debug([null, undefined, null]) // Array of nullish values

// ==================== 20. Unicode and Special Characters ====================
console.log('\n========== 20. UNICODE & SPECIAL CHARS ==========\n')

logger.info('Hello 世界 🌍 สวัสดี')
logger.info({ message: 'Emoji test', icon: '✅', status: '🎉' })
logger.info(['Thailand 🇹🇭', 'USA 🇺🇸', 'Japan 🇯🇵'])

// ==================== 21. Log Level Examples ====================
console.log('\n========== 21. LOG LEVEL USE CASES ==========\n')

// ! ERROR - Critical issues that need immediate attention
logger.error(['Database connection failed', { host: 'localhost', port: 5432, retries: 3 }])

// ! WARN - Warning messages for potential issues
logger.warn(['API rate limit approaching', { current: 950, limit: 1000, percentage: 95 }])

// * INFO - General informational messages
logger.info([
  'User successfully authenticated',
  { userId: 12345, username: 'john_doe', loginTime: new Date() },
])

// * HTTP - HTTP request/response logging
logger.http(['GET /api/users/12345', { status: 200, duration: 45, size: '2.3kb' }])

// ? VERBOSE - Detailed information for debugging
logger.verbose(['Cache hit', { key: 'user:12345', ttl: 3600, size: 1024 }])

// ? DEBUG - Detailed debug information
logger.debug([
  'Function execution trace',
  { function: 'processUser', args: [123, 'test'], duration: 12.5 },
])

console.log('\n========== END OF DEMO ==========\n')
