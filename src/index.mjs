async function handleRequest(request, env) {
  const header = { 'Content-Type': 'text/html' }
  return new Response('hello world', { headers: header })
}

export default {
  async fetch(request, env) {
    try {
      return await handleRequest(request, env)
    } catch (e) {
      return new Response(e.message)
    }
  },
}
