import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
    try {
        const { prompt, tag, username, email } = await request.json();

        await connectToDB();
        const newPrompt = new Prompt({ prompt, tag, username,email });

        await newPrompt.save();
        return new NextResponse(JSON.stringify(newPrompt), { status: 201 });
    } catch (error) {
        return new NextResponse("Failed to create a new prompt", { status: 500 });
    }
};
