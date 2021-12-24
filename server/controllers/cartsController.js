const create = async (req,res)=>{
    const reg = req.reg
    try {
        const result = await req.context.models.carts.create({
            cart_id : req.body.cart_id,
            cart_status : req.body.cart_status,
            cart_user_id : reg
        })
        res.send(result)
    } catch (error) {
        return res.status(404).send("no data input")
    }
}

export default {
    create
}