const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
const url=require('./models/url')
const shortid=require('shortid')

app.post('/posturl',async(req,res)=>{
    const {full}=req.body

    const data=await url.create({full:full})
    console.log(data)
    res.json({data:data.short})

})
// app.post('/geturl',async(req,res)=>{
//     const {short}=req.body
//     const findurl=await url.findOne({short:short})
//     res.json({total:findurl})
//     console.log(findurl)
// })
app.get('/h/:id',async(req,res)=>{
    console.log(req.params.id)
    const findurl2=await url.findOne({short:req.params.id})
   
//    res.json({total:findurl2})
   res.redirect(findurl2.full)
})


mongoose.connect('mongodb+srv://admin:sunsetwest1234RRR@royoapi.3qmdrjq.mongodb.net/urlshrinker?retryWrites=true&w=majority&appName=RoyoApi').then(()=>{
    console.log('db connected')
    app.listen(8080,()=>console.log('server running'))
})