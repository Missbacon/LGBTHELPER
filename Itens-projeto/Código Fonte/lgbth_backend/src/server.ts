import app from './App';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT ?? 3333;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
