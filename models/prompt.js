import {Schema , model , models} from 'mongoose';

const PromptSchema = new Schema({
    creator : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },

    prompt:{
        type:String,
        required : [true , 'Prompt is Required..']
    },

    tag :{
        type: String,
        reqquired: [true , 'tag is required..']
    }
});

const Prompt = models.prompt || model("prompt",PromptSchema);

export  default Prompt;