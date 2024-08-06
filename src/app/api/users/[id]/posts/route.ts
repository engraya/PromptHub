import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

// Define the types for params
interface Params {
  id: string;
}

// Define the type for the request context, which includes params
interface RequestContext {
  params: Params;
}

export const GET = async (request: NextRequest, { params }: RequestContext): Promise<NextResponse> => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({ creator: params.id }).populate("creator");

        return new NextResponse(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new NextResponse("Failed to fetch prompts created by user", { status: 500 });
    }
}
