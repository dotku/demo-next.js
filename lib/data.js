import "server-only";
import { OpenAI } from "https://deno.land/x/openai/mod.ts";

export async function getOpenAIChatCompletion() {
  const openAI = new OpenAI(process.env.OPENAI_API_KEY);
  const response = await openAI.createChatCompletion({
    ...input,
    model: input.model || "gpt-3.5-turbo-16k",
    messages,
  });

  return response;
}
