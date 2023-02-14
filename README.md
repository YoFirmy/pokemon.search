# Pokemon Search App

The purpose of this app is for my own development; My goal is to create a Next.js app from scratch, implement some api calls, build some basic components and then deploy it. The app itself will allow a user to search for a pokemon and view stats and information about that pokemon. To achieve this I will use the restful api [https://pokeapi.co/](https://pokeapi.co/)

## Getting Started

The project uses yarn to install dependencies.

To run the development server:

```bash
yarn dev
```

You can the open the app at [http://localhost:3000](http://localhost:3000)

## How this app was/is being developed

### Planning

I have created a basic wire frame for the design of the app. The wire frames can be found on [this miro board](https://miro.com/app/board/uXjVPvIw5n8=/)
I plan to update this wire frame as needed to plan components etc.

### Project set up

- I created the project using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- I am using typescript as part of the project as well.
  [This article](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7) was a massive help in the initial set up of the application, but some was a little out of date so docs for prettier, husky, commitlint, and emotion were all very useful.
- I am using eslint and prettier for code styling and formatting. I also configured vs code to format on save using prettier.
- I am using husky to run linting on commits and build on pushes.
- I am using commitlint default settings to force commit messages to adhere to conventional commit standards. Although I am using the default configuration for commitlint, I still included the default config in commitlint.config.js so that it is easy to site the rules for commit messages.
- I am using emotion to style the components. I configured the emotion types (in types/emotion.d.ts) so that when using Theme intellisense works better with specific colours, breakpoints etc. This does mean that when someone wants to add something to theme they have to update the type in emotion.d.ts as well, but it makes for a much better experience when trying to find the styling that they want within Theme.
- I installed storybook so that components can be developed/viewed/tested in isolation. I have configured the breakpoints to be the same as in theme so styling is consistent. Currently I have left the default storybook components as examples for when I create my own components. But these may be deleted later.
