import { handleRequest } from './handler'

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    try {
      return await handleRequest(request, env)
    } catch (e: any) {
      return new Response(e.message)
    }
  },
}
