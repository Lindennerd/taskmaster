import {server} from "./graphql";
import app from "./express";
import { env } from "./environment";

app.use('/graphql', server);

app.listen(env.PORT, () => console.log(`Server started at ${env.PORT}`));