export const GET = (request ) => {
    try {
        return new Response(JSON.stringify({"message":"hello world"}), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 