import express from 'express';
import rateLimit from 'express-rate-limit'
import { recipesRouter } from '@src/routes/recipes';
import { usersRouter } from '@src/routes/users';

const app = express();
app.use(express.json())

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
})

app.use(limiter);
app.use('/recipes', recipesRouter);
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
