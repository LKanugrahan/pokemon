```markdown
# React.js TypeScript Project

This document provides an overview of the structure and setup of a React.js project using TypeScript.
```

## Project Structure

```
project-root/
├── src/
│   ├── _shared/
│   │   ├── application/
│   │   │   └── hooks/
│   │   │       ├── use1.ts
│   │   │       ├── use2.ts
│   │   │       └── ...
│   │   ├── domain/
│   │   │   └── dto/
│   │   │       ├── interface1.interfaces.ts
│   │   │       ├── interface2.interfaces.ts
│   │   │       └── ...
│   │   └── presentation/
│   │       └── components/
│   │           ├── component1.component.ts
│   │           ├── component2.component.ts
│   │           └── ...
│   ├── application/
│   │   ├── constants/
│   │   │   ├── constant1.ts
│   │   │   ├── constant2.ts
│   │   │   └── ...
│   │   └── hooks/
│   │       ├── folder-feature1/
│   │       │   ├── use1.ts
│   │       │   ├── use2.ts
│   │       │   └── ...
│   │       ├── folder-feature2/
│   │       │   ├── use1.ts
│   │       │   ├── use2.ts
│   │       │   └── ...
│   │       └── ...
│   ├── domain/
│   │   └── dto/
│   │       ├── folder-feature1/
│   │       │   ├── interface-feature1.interfaces.ts
│   │       │   └── ...
│   │       ├── folder-feature2/
│   │       │   ├── interface-feature2.interfaces.ts
│   │       │   └── ...
│   │       └── ...
│   ├── presentation/
│   │   ├── assets/
│   │   │   └── images/
│   │   │       ├── image1.jpg
│   │   │       └── ...
│   │   ├── components/
│   │   │   ├── components1/
│   │   │   │   └── index.tsx
│   │   │   ├── components2/
│   │   │   │   └── index.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── layout1/
│   │   │   │   └── index.tsx
│   │   │   ├── layout2/
│   │   │   │   └── index.tsx
│   │   │   └── ...
│   │   └── pages/
│   │       ├── example-simple-module/
│   │       │   └── index.page.tsx
│   │       ├── example-modular-section-module/
│   │       │   ├── sections
│   │       │   │		├── example-modal.section.tsx
│   │       │   │       └── example.section.tsx
│   │       │   └── index.page.tsx
│   │       └── ...
│   ├── infrastructure/
│   │   ├── services/
│   │   │   ├── modules/
│   │   │   │   ├── module1
│   │   │   │   │   └── service.ts
│   │   │   │   ├── module2
│   │   │   │   │   └── service.ts
│   │   │   ├── api.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── ...
│   │   └── store/
│   │       ├── store1/
│   │       │   └── index.ts
│   │       ├── store2/
│   │       │   └── index.ts
│   │       ├── index.ts
│   │       └── ...
│   ├── routes/
│   │   ├── index.tsx
│   │   ├── routes.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
│   └── ...
├── public/
│   ├── index.html
│   └── ...
├── package.json
├── tsconfig.json
└── ...
```

FAQ:

- How to fetch data:
  1.  Create service inside `/src/infrastructure/services/modules/[modulesName]/index.tsx`
  2.  Use RTK Query that already wrapped `/src/infrastructure/services/api.ts`
  3.  Use build.mutation for DELETE, POST, PATCH, PUT
  4.  Use build.query for GET
  5.  Call wrapped mutation or query from page level like you call hooks
  6.  **You don't need to re-setup authorization token inside service module!**
  7.  Read the documentation https://redux-toolkit.js.org/rtk-query/overview
- What should I do if i need to store data
  1.  **Important! Don't store all data**
  2.  **Just store if you need to re-use the data from other modules OR multiple components OR you don't need to refetch**
  3.  Create store `/src/infrastructure/store/[modulesName]/index.tsx`
  4.  Register store that you create inside combine reducer `/src/infrastructure/store/index.ts`
  5.  Read the documentation https://redux-toolkit.js.org/api/createslice
- How to post form data:
  1.  Unfortunately, for RTK version 2.2.1, there are still bugs when posting data with form data type
  2.  For the time being, you may utilize the 'fetch' provided by JavaScript
  3.  **'fetch' is only allowed for posting form data; for other types, you must use RTK Query.**

## Project Setup

### 1. Initialize project

```bash
yarn
```

### 2. Start the development server

```bash
yarn start:dev
```

## Dependencies

The primary dependencies for this project are:

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **react-scripts**: Toolchain for creating React applications with no configuration.

## Getting Started

1. **Component Development**: Develop your components inside the `src/_shared/presentation/components` or `src/presentation/components` directory.
2. **Entry Point**: The entry point of your application is `src/index.tsx`.
3. **Run the Project**: Start the development server using `yarn start:[env]`.
4. **Build**: Build your project for production using `yarn build:[env]`.
5. **Login**: You can login the project by see the console, I drop several email with one password.

# Happy coding!
