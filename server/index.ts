import express from 'express';
import defaultRoute from './router';

const port = 3001;

const app = express();

app.use(defaultRoute);

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
})

export default app;