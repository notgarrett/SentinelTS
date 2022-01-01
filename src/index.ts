// Bot and Mongoose initialization.

import Client from './client';
// @ts-ignore
export const client = new Client({
  intents: ['DIRECT_MESSAGES', 'GUILD_MESSAGES', 'GUILDS', 'GUILD_MEMBERS'],
})
  .init()
  .then((r) => console.log('Initialized.'));

//Express Initialization

import express, { Application, Request, Response } from 'express';
import routes from './routes/routes';

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'Server.',
  });
});

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}

routes(app);
