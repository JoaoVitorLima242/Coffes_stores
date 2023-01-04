export async function api<T>(url: string, options?: RequestInit): Promise<T> {
    const response = await fetch(url, options)
    return await response.json()
  
}
  