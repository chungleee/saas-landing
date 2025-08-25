import { Resend } from 'resend';
import type { APIRoute } from 'astro';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_CUSTOMER_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const response = await resend.contacts.create({
    email: body.email,
    audienceId: import.meta.env.RESEND_LOOPLY_AUDIENCE,
  });

  if (response.error) {
    return new Response(JSON.stringify({ type: 'error', error: response.error }));
  }

  return new Response(JSON.stringify({ type: 'success', data: response.data }));
};
