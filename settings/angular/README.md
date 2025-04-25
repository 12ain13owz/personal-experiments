# Angular Configuration Guidelines

ตัวอย่าง configuration files สำหรับโปรเจกต์ Angular ใน `personal-experiments/angular`.

## Recommended Configs

- **Prettier** (`prettier.json`): การตั้งค่าสำหรับ formatting โค้ด
- **ESLint** (`eslint.config.js`): การตั้งค่าสำหรับ linting TypeScript และ Angular templates

## การใช้งาน

1. คัดลอกไฟล์ `prettier.json` และ `eslint.config.js` ไปยังโฟลเดอร์ของโปรเจกต์ (เช่น `angular/form-examples`)
2. ปรับแต่งตามความต้องการของโปรเจกต์
3. ติดตั้ง dependencies:
   ```bash
   npm install --save-dev angular-eslint eslint eslint-plugin-import prettier
   ```
