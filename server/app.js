//IMPORTS SECTION 
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/user.routes.js';

//CONFIGURATION SECTION
dotenv.config(); /*Load environment variables from .env file  */ 


connectDB(); /*NOTE: calls a function which establish the connection to our mongoDB database */

const app = express(); /*NOTE calls express constructor, via its instance we will gain access to many express framework methods related to creating a web app,
                         for example: 
                         restfull API request routes such as : app.get/POST/DELETE/PUT 
                         NOTE app.use() - to define Middlewares such as                 
*/


//MIDDLEWARES SECTION
app.use(cors()); /* NOTE :CORS is a security mechanism implemented by browsers to restrict how resources on a web page can be requested from another domain. 
                    By default, browsers block requests made to a server from a different origin (protocol, domain, or port) than the one hosting the web page.
                    NOTE for example:
                    If your frontend is deployed one domain e.g., Render and my backend (Express server) is deployed on another domain - e.g. my college server, the browser will block requests made to your API unless CORS is enabled.
                */
                    
app.use(express.json()); // NOTE This middleware parses incoming JSON payloads from the request body and makes them accessible via req.body. It's essential for handling POST or PUT requests where the client sends data in JSON format.



//ROUTES SECTION
app.use('/api/users', userRoutes);
 
app.get('/', (req, res) => { // Default route - must always be the last route.
    res.send('Welcome to the Distributed Cloud Services API');
});

export default app; //TODO find out what this does