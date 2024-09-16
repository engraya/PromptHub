import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

// Type for the parameters
interface Params {
    id: string;
}

export const GET = async (request: NextRequest, { params }: { params: Params }): Promise<NextResponse> => {
    try {
        await connectToDB();

        const prompt = await Prompt.findById(params.id);
        if (!prompt) return new NextResponse("Prompt Not Found", { status: 404 });

        return new NextResponse(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new NextResponse("Internal Server Error", { status: 500 });
    }
};

export const PATCH = async (request: NextRequest, { params }: { params: Params }): Promise<NextResponse> => {
    try {
        const { prompt, tag, username, email } = await request.json();

        await connectToDB();

        // Find the existing prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new NextResponse("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;
        existingPrompt.username = username;
        existingPrompt.email = email;

        await existingPrompt.save();

        return new NextResponse("Successfully updated the Prompts", { status: 200 });
    } catch (error) {
        return new NextResponse("Error Updating Prompt", { status: 500 });
    }
};

export const DELETE = async (request: NextRequest, { params }: { params: Params }): Promise<NextResponse> => {
    try {
        await connectToDB();

        // Find the prompt by ID and delete it
        await Prompt.findByIdAndDelete(params.id);

        return new NextResponse("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new NextResponse("Error deleting prompt", { status: 500 });
    }
};
