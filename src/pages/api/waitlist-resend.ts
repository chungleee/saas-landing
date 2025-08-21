import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({}) => {
  return new Response(JSON.stringify({ key: import.meta.env.RESEND_API_KEY }));
};
