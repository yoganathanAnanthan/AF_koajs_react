//import {randomBytes} from 'crypto';
import { getAll, save,getDataById } from "./posts.data.adapter.js";

const posts = new Map();

// const generateId =(size=8)=>{
//     return new Promise((resolve,reject)=>{
//         randomBytes(size, (err,buf)=>{
//             if (err){
//                 return reject(err)
//             }
//             resolve(buf.toString('hex').slice(0,8));
//         });
//     });
// };

const create =async ({
    title = 'missing title',
    description='missing description',
    user = 'testUser'
}) =>{
    // const id =await generateId();
    // const post = {id,title,description,user,posted:new Date()};
    // posts.set(id,post);
    // return post;
    const post = {title,description,user,posted:new Date()};
    post.id = await save(post);
    return post;
};

const get =() =>{
    return getAll();
};

const getById = (id) =>{
    return getDataById(id);
};

export {create,get,getById};