export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}
