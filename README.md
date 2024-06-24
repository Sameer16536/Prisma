# Project Setup Guide

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup Steps

1. **Initialize the project with npm:**

   ```bash
   npm init -y
   ```

2. **Install necessary dependencies:**

   ```bash
   npm install prisma typescript ts-node @types/node --save-dev
   ```

3. **Initialize TypeScript:**

   ```bash
   npx tsc --init
   ```

4. **Configure `tsconfig.json`:**
   - Open the `tsconfig.json` file.
   - Change `rootDir` to `src`.
   - Change `outDir` to `dist`.

   ```json
   {
     "compilerOptions": {
       "rootDir": "./src",
       "outDir": "./dist",
       // other options...
     }
   }
   ```

5. **Initialize Prisma:**

   ```bash
   npx prisma init
   ```

## Directory Structure

After running the above commands, your project directory should look something like this:

```
your-project/
├── node_modules/
├── prisma/
│   ├── schema.prisma
│   └── .env
├── src/
│   └── (your TypeScript files)
├── dist/
│   └── (compiled JavaScript files)
├── package.json
├── tsconfig.json
└── README.md
```

## Running the Project

1. Compile the TypeScript files:

   ```bash
   npx tsc
   ```

2. Run the compiled JavaScript files using Node.js:

   ```bash
   node dist/your-entry-file.js
   ```

Replace `your-entry-file.js` with the actual entry point of your application.

## Prisma Usage

- To generate Prisma client:

  ```bash
  npx prisma generate
  ```

- To run Prisma migrations:

  ```bash
  npx prisma migrate dev --name init
  ```

- To open Prisma Studio (a GUI for your database):

  ```bash
  npx prisma studio
  ```
- To generate clients :
   ```bash
   npx prisma generate
   ```
---
