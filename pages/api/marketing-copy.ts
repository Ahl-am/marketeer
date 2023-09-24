import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

type Data = {
  result: string;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const marketingCopy = req.body;

  try {
    // Input validation
    if (!marketingCopy) {
      throw new Error('Invalid input: marketingCopy is missing.');
    }

    const response = await generateMarketingCopy(marketingCopy);
    const suggestion = response.choices?.[0].text;

    res.status(200).json({ result: suggestion });
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ result: 'An error occurred' });
  }
}
async function generateMarketingCopy(marketingCopy: string) {
  const prompt = `You are a marketing expert, and a customer approaches you to write a very short and exciting marketing copy for them. This is the topic they would like a marketing copy for: '${marketingCopy}.'This is the short marketing copy you came up with:`;

  return await openai.completions.create({
    model: 'text-davinci-002',
    max_tokens: 30,
    temperature: 0.85,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    prompt: prompt,
  });
}