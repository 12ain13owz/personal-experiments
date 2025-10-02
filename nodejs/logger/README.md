# 🎨 Enhanced Winston Logger

A beautifully formatted Winston logger with smart value formatting, color-coded output, and intelligent layout for terminal applications.

## ✨ Features

- 🎯 **Smart Formatting** - Automatic detection of primitives, objects, arrays, and dates
- 🌈 **Color-Coded Output** - Each type has its own color for better readability
- 📦 **Compact Arrays** - Small primitive arrays displayed inline
- 📋 **Multi-line Objects** - Complex structures with proper indentation
- 🔢 **Indexed Arrays** - Multiple values displayed with indices
- ⚡ **6 Log Levels** - ERROR, WARN, INFO, HTTP, VERBOSE, DEBUG
- 🕐 **Timestamps** - Millisecond precision timestamps
- 💬 **Better Comments** - Well-documented code with VSCode Better Comments support

## 📦 Installation

```bash
npm install
```

## 🚀 Quick Start

```typescript
import { logger } from './utils/logger.utils.ts'

// Simple messages
logger.info('Hello World')
logger.debug(123)
logger.warn(true)

// Objects
logger.info({
  user: 'john_doe',
  age: 30,
  active: true,
})

// Arrays
logger.info([1, 2, 3, 4, 5])

// Multiple values
logger.info(['User logged in', { userId: 12345, username: 'john_doe' }, new Date()])
```

## 📊 Log Levels

```typescript
// ERROR (0) - Critical issues that need immediate attention
logger.error('Database connection failed')

// WARN (1) - Warning messages for potential issues
logger.warn('API rate limit approaching')

// INFO (2) - General informational messages
logger.info('User successfully authenticated')

// HTTP (3) - HTTP request/response logging
logger.http('GET /api/users/12345')

// VERBOSE (4) - Detailed information for debugging
logger.verbose('Cache hit')

// DEBUG (5) - Detailed debug information
logger.debug('Function execution trace')
```

## 🎨 Output Examples

### Primitives

```typescript
logger.info('Hello') // "Hello"
logger.info(123) // 123
logger.info(true) // true
logger.info(null) // null
logger.info(undefined) // undefined
```

### Objects

```typescript
logger.info({
  name: 'John',
  age: 30,
  active: true,
})

// Output:
// {
//   name: "John",
//   age: 30,
//   active: true
// }
```

### Arrays

```typescript
// Compact format (≤5 primitive items)
logger.info([1, 2, 3])
// Output: [1, 2, 3]

// Multi-line format (6+ items or complex)
logger.info([1, 2, 3, 4, 5, 6])
// Output:
// [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6
// ]
```

### Multiple Values

```typescript
logger.info(['User action', { userId: 123, action: 'login' }, new Date()])

// Output:
//   [0] "User action"
//   [1] {
//     userId: 123,
//     action: "login"
//   }
//   [2] 2024-01-15 10:30:45
```

### Dates

```typescript
logger.info(new Date())
// Output: 2024-01-15 10:30:45
```

### Functions

```typescript
logger.info(() => {})
// Output: [Function]
```

## 🎯 Real-world Use Cases

### API Request Logging

```typescript
logger.http([
  'API Request',
  {
    method: 'POST',
    url: '/api/users',
    headers: { 'Content-Type': 'application/json' },
    body: { name: 'John', email: 'john@example.com' },
  },
])
```

### Database Query Logging

```typescript
logger.debug([
  'Database Query',
  {
    query: 'SELECT * FROM users WHERE id = ?',
    params: [123],
    duration: 45.2,
    rows: 1,
  },
])
```

### Error Logging

```typescript
logger.error([
  'Failed to process user',
  {
    error: 'ValidationError',
    message: 'Email is required',
    userId: 12345,
    details: {
      field: 'email',
      constraint: 'required',
      value: null,
    },
  },
])
```

### Performance Metrics

```typescript
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
  },
])
```

## 📝 Code Features

- **Better Comments Support** - Uses `!`, `*`, `?`, `TODO:` prefixes
- **Type Safety** - Full TypeScript support
- **Smart Detection** - Automatically formats based on data type
- **Indentation** - Proper indentation for nested structures
- **Performance** - Efficient formatting with minimal overhead

## 🧪 Running the Demo

```bash
npm run dev
```

The demo includes 21 sections covering all possible output formats:

- Primitive values
- Strings, numbers, booleans
- Dates and functions
- Simple and complex arrays
- Nested objects and arrays
- Real-world scenarios
- Edge cases
- Unicode and special characters

## 📄 Files Structure

```
├── const/
│   └── logger.const.ts   # Constants and color definitions
├── utils/
│   └── logger.utils.ts   # Logger utility functions and formatters
├── main.ts               # Main logger implementation
```

## 🤝 Contributing

Feel free to customize the logger for your needs:

1. Adjust colors in `AnsiColors` enum
2. Modify log levels in `LOG_LEVELS`
3. Change formatting logic in formatter functions
4. Add new transports (file, remote, etc.)

## 📚 Dependencies

- **winston** - Logging framework
- **dayjs** - Date formatting

## 📖 License

ISC

## 🎉 Tips

- Use `logger.info([...])` for multiple values to get indexed output
- Objects and arrays automatically get proper indentation
- Dates are formatted as `YYYY-MM-DD HH:mm:ss`
- Functions display as `[Function]` instead of full code
- Primitive arrays ≤5 items display inline for readability

---
