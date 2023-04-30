import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import postsRouter from './posts/posts.router.js';
import "./db/mongoClient.js";

const app = new Koa();

app.use(bodyParser());

app.use(async(ctx,next) =>{
    ctx.response.set('Access-Control-Allow-Origin','http://localhost:1234');
    ctx.response.set('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    ctx.response.set('Access-Control-Allow-Methods','*');
    await next();
});

app.use(postsRouter.routes())
    .use(postsRouter.allowedMethods());

app.use((ctx) =>{
    ctx.body = "resource you are looking for was not found";
    ctx.status=404;
});

app.listen(3000);

console.log("app is running on port 3000");