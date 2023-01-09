import express from 'express';
import { recipesRouter } from '@src/routes/recipes';

const app = express();
app.use('/recipes', recipesRouter);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
