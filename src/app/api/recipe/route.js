import { parseRecipeText } from '@/utils/parseRecipeText';
import { NextResponse } from 'next/server';
import OpenAI from "openai";

export async function POST(request) {
  try {
    const { inputs } = await request.json();

    if (!inputs || typeof inputs !== "string") {
      return new Response(JSON.stringify({ error: "Invalid inputs" }), { status: 400 });
    }
    
    if (!process.env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: "OPENAI_API_KEY not set" }), { status: 500 });
    }
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant that generates a recipe based on ingredients.',
        },
        {
          role: 'user',
          content: `Create a recipe using these ingredients: ${inputs}. Please include a clear title starting with "Title:", followed by an "Ingredients:" section, then an "Instructions:" section. Format it as plain text.`,
        },
      ],
      max_tokens: 300,
    });

    if (!completion || !completion.choices || !completion.choices.length) {
      return new Response(JSON.stringify({ error: "No completion choices returned" }), { status: 500 });
    } 

    const recipeText = completion.choices[0].message.content;
    const parsedRecipe = parseRecipeText(recipeText);

    return NextResponse.json(parsedRecipe);
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}