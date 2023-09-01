const mongoo=require("mongoose")


const URL=process.env.MONGO_DB

const congfig={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoo.connect(URL,congfig).then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})


module.exports=mongoo
