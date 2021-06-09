import mongoose from 'mongoose';

const emailValidator = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const emailValidatorWithMsg = [
    emailValidator,
    "Invalid {PATH}! Please check your email.",
  ];

const newsLetterSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate:emailValidatorWithMsg
    },
    subscribed:{
        type:Boolean,
        default:true
    }
});

const newsLetter = mongoose.model('newLetter',newsLetterSchema);

module.exports = newsLetter;