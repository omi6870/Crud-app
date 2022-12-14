const mongoose = require ("mongoose")
const bcrypt = require ("bcryptjs")


const userSchema =mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false
        },
        pic:{
            type:String,
            required:true,
            default:"https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
        },
    },
    {
        timestamps:true,
    }
)

userSchema.pre('save', async function(next){
    if(!this.isModified("password")){
next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password =await bcrypt.hash(this.password,salt);
});

userSchema.methods.matchPassword = async function(enteredpassword){
    return await bcrypt.compare(enteredpassword, this.password);
};

const User = mongoose.model('User',userSchema);

module.exports=User;