This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Directory Structure
```
├── app
    ├── dashboard
        ├── page.tsx
    ├── hooks
        ├── use-auth-check.ts
        ├── use-auth-token-decoded.ts
        ├── use-login.ts
        ├── use-logout.ts
        ├── use-user-profile.ts
    ├── login
        ├── page.tsx
    └── utils
        ├── cn.ts
├── components
    └── ui
        ├── button.ts
        ├── form.ts
        ├── input.ts
        ├── label.ts
        
    ├── cn.ts
├── lib
    ├── utils.ts
├── node_modules
├── pages
    └── ui
        ├── auth.ts
├── public
    ├── next.svg
    ├── vercel.svg
├── Schemas
    ├── login.ts
├── server
    └── db
        ├── read.ts
        ├── validate-user.ts
├── types
    ├── user.ts
├── .env.local
├── .eslintrc.json
├── .gitignore
├── .components.json
├── dummy-user-data.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
├── tsconfig.json

```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Authentication wordflow:
- User sign in with username and password. data is validated using zod validation. 
- On submit, it sends data to /api/auth
- Check username and password is correct in db (dummy db json) if so return created jwt token
- save jwt token in cookie
- redirect user to dashboard

## Notes:
- Due to resticted time some of features can not be added Instead of any database, a dummy data json file is being used. can be replace with any database
- I am currently working with my company and task was assigned in week days so I didn't get the chance to show my true potential
- It's a small request but try to keep assessments or evalaution tests small. To ensure efficiency, please consider a more concise coding challenge, typically completed in 2 hours or more, that still assesses my skills effectively. I'm happy to demonstrate my abilities via project assessment or live call assessment while respecting both our time constraints.
- you can login using credentials
     - username: test
     - password: test123T!
- Some of the included features are
    - Zod Validation
    - Jwt Token Creation and Validation
    - Shadcn UI
    - Tailwind CSS
    - JS Cookie
