import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const { userId, prompt, tag } = await request.json();

        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag });

        await newPrompt.save();
        return new NextResponse(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        return new NextResponse("Failed to create a new prompt", { status: 500 });
    }
};
