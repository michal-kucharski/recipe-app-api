import express from 'express';
import { recipesRouter } from '@src/routes/recipes';
import { usersRouter } from '@src/routes/users';

const app = express();
app.use(express.json()) 
app.use('/recipes', recipesRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
