const cookieParser = require('cookie-parser');

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');

const server = createServer();

// use express middleware to handle cookies - JWT
server.express.use(cookieParser());



server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    },
    options => {
        console.log(`Server is now running on http://localhost:${options.port}`);
        console.log(options);
    }
);
