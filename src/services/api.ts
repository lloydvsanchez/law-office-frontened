const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export async function checkHealth(): Promise<{ status: string }> {
  const response = await fetch(`${API_URL}/api/v1/health`)

  if (!response.ok) {
    throw new Error(`Health check failed: ${response.status}`)
  }

  return response.json()
}
