const feedBack = require("../../models/feedBack");

const feedBackData = () => {

    const {rating,message} = req.body

    try {
         
    const newFeedBack = new feedBack({ rating , message });
    newFeedBack.save()
    res.status(200).send({msg:'success'});

    } catch (error) {
        console.log(error)
        res.status(500).send({errorMsg:"Status-Code:500,Internal Servr Error!"})
    }

}

module.exports = feedBackData;