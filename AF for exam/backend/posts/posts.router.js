import Router from "@koa/router";
import {create,getById,get } from "./posts.api.js";
import {getDataById} from "./posts.data.adapter.js";

const postsRouter = new Router({
    prefix:'/posts'
});

postsRouter.get('/',async(ctx)=>{
    ctx.body =await get();
});

postsRouter.get('/:id',async (ctx)=>{
    const {id} = ctx.params;
    ctx.body =await getDataById(id);
});

postsRouter.post('/', async(ctx)=>{
    const {title,description,user}= ctx.request.body;
    ctx.body =await create({title,description,user});
});

export default postsRouter;