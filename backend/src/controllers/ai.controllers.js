const aiService = require("../services/ai.service");


module.exports.getReview = async(req, res)=>{
    const code = req.body.code;/*for using req.body we hv to use a middleware which is app.use(express.json()) */

    if(!code){
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService(code);

    res.send(response);
}

