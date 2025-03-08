'use server'

import { searchContent, type SearchResult } from "@/lib/search"

export async function search(query: string): Promise<SearchResult[]> {
  try {
    // Get static content results
    const staticResults = await searchContent(query)
    
    // TODO: Add dynamic content search here when we have a database
    // This could include:
    // - News articles
    // - Blog posts
    // - Events
    // - Forum posts
    // const dynamicResults = await searchDatabase(query)
    
    // For now, just return static results
    return staticResults

  } catch (error) {
    console.error('Search error:', error)
    return []
  }
}
