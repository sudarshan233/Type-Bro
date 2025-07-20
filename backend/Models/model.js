import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient("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");
export async function model(logMatrix, checkMatrix, prompt) {
    const chatCompletion = await client.chatCompletion({
        provider: "novita",
        model: "meta-llama/Llama-3.2-3B-Instruct",
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
        max_tokens: 500,
    });

    console.log('Message sent to server', chatCompletion.choices[0].message);
    return chatCompletion.choices[0].message.content;
}
