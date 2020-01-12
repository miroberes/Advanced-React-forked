const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');

const server = createServer();

// use express middleware to handle cookies - JWT
// Cookie-parser parses Cookie header
// and populate req.cookies with an object keyed by the cookie names. 
server.express.use(cookieParser());

// decode the JWT so we can get the user Id on each request
server.express.use((req, res, next) => {
    console.log('middleware', req.cookies);
    const { token } = req.cookies;
    // console.log('middleware req.cookies', req.cookies)
    // console.log('middleware token', token)
    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
        // put the userId onto the req for accessing it in the resolvers
        req.userId = userId;
    }
    console.log('req.userId', req.userId)
    next();
});

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
