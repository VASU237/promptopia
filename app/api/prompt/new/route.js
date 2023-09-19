import { connectToDB } from "@utils/database";
import  Prompt from '@models/prompt'

export const POST = async (req) =>{
    const {userId , prompt , tag} = await req.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt ({
            creator : userId,
            prompt,
            tag
        })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt),{status:201})
    } catch (error) {
        console.log(error);
        return new Response("Error In Prompt",{status:500})

    }
}