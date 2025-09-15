// Pexels API configuration
export const PEXELS_API_KEY = "avNkxtALQHzGz69Wr1vKfTkK4e6gUwhNAAwDu4lGj50KqBvlLyAIubcK"

// Pexels API base URL
export const PEXELS_API_BASE = "https://api.pexels.com/v1"

// Helper function to fetch image from Pexels
export async function fetchPexelsImage(photoId: string) {
  const response = await fetch(`${PEXELS_API_BASE}/photos/${photoId}`, {
    headers: {
      'Authorization': PEXELS_API_KEY
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch image from Pexels')
  }
  
  return response.json()
}

// Helper function to search images on Pexels
export async function searchPexelsImages(query: string, perPage: number = 15) {
  const response = await fetch(`${PEXELS_API_BASE}/search?query=${encodeURIComponent(query)}&per_page=${perPage}`, {
    headers: {
      'Authorization': PEXELS_API_KEY
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to search images on Pexels')
  }
  
  return response.json()
}
