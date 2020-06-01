import { ControllerPrototype, Controller, Logger, Get } from '@becomes/purple-cheetah';
import { Router } from 'express';

@Controller('/hello-world')
export class HelloWorldController implements ControllerPrototype {
  name: string;
  baseUri: string;
  logger: Logger;
  router: Router;
  initRouter: () => void;

  @Get()
  async get() {
    return {
      message: 'Welcome to your first Purple Cheetah application.',
      info: [
        {
          name: 'Documentation',
          link: 'https://purple-cheetah.dev',
        },
        {
          name: 'GraphiQL',
          link: '/graphql',
        },
      ],
    };
  }
}
