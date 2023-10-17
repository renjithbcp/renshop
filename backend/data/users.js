import bcrypt from 'bcryptjs';


const users = [{
    name:'Admin User',
    email:'admin@gmail.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:true,
},
{
    name:'renjith',
    email:'renjth@gmail.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:false,
},
{
    name:'ren',
    email:'ren@gmail.com',
    password:bcrypt.hashSync('123456',10),
    isAdmin:false,
}]
export default users;