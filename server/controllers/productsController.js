const findAll = async (req, res) => {
    try {
        const result = await req.context.models.products.findAll()
        return res.send(result);
    } catch (error) {
        return res.status(404).send("no data found");
    }
}

const findOne = async (req,res) => {
    try {
        const result = await req.context.models.products.findOne({
            where:{prod_id:req.params.id}
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data found")
    }
}

const create = async (req,res)=>{
    try {
        const result = await req.context.models.products.create({
            prod_id : req.body.prod_id,
            prod_name : req.body.prod_name,
            prod_price : req.body.prod_price,
            prod_desc : req.body.prod_desc
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

const update = async (req,res)=>{
    try {
        const result = await req.context.models.products.update({
            prod_id : req.body.prod_id,
            prod_name : req.body.prod_name,
            prod_price : req.body.prod_price,
            prod_desc : req.body.prod_desc,
            prod_user_id: req.body.prod_user_id,
            prod_cate_id : req.body.prod_cate_id
        },{
            returning : true, where:{prod_id:req.params.id}
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data update")
    }
}

const create1 = async (req,res)=>{
    const {files,fields} = req.fileAttrb
    try {
        const result = await req.context.models.products.create({
            prod_id : fields[0].value,
            prod_name : fields[1].value,
            prod_price : fields[2].value,
            prod_desc : fields[3].value
        })
        return res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

const deleteRow = async (req,res) =>{
    try {
        const result = await req.context.models.products.destroy({
            where:{prod_id: req.params.id}
        })
       return res.send("delete"+result+"rows")
    } catch (error) {
        return res.status(404).send("no data found")
    }
}

export default {
    findAll,
    findOne,
    create,
    update,
    create1,
    deleteRow,
}