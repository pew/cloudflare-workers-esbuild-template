export async function handleRequest(request: Request, env: any): Promise<Response> {
  return new Response('hello world 👋')
}
