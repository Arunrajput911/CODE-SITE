const newsLetter = require('../../models/newsLetter');
const User = require("../../models/userModal");



const newsLetterData = async (req,res) => {
  
    const {email} = req.body.email;
    findUser = await newsLetter.findOne().findByEmail(email).exec();
    try {
          if(findUser && findUser.subscribed == 'true')
          {
              findUser.newsLetter.save();
              res.status(200).send({msg:'success'});
          }
          else{
              res.status(404).send({errorMsg:'This user is already subscribed!'});
          }
    } catch (error) {
        res.status(500).send({errorMsg:"Status-Code:500,Internal Servr Error!"})
    }
}

module.exports = newsLetterData;