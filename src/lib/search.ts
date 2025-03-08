import { mainNav } from "@/lib/constants/navigation"

export interface SearchResult {
  title: string
  description?: string
  href: string
  type: "page" | "article" | "resource" | "support"
  category?: string
  priority: number
}

// Static content that we want to make searchable
export const staticContent: SearchResult[] = [
  {
    title: "What is Leiomyosarcoma?",
    description: "Learn about LMS, its symptoms, diagnosis, and treatment options.",
    href: "/what-is-lms",
    type: "page",
    category: "Education",
    priority: 100
  },
  {
    title: "Support Groups",
    description: "Connect with others in the LMS community through our support groups.",
    href: "/support/groups",
    type: "support",
    category: "Support",
    priority: 90
  },
  {
    title: "Clinical Trials",
    description: "Find current clinical trials and research opportunities for LMS.",
    href: "/research/clinical-trials",
    type: "resource",
    category: "Research",
    priority: 85
  },
  {
    title: "Patient Resources",
    description: "Access educational materials, support services, and treatment information.",
    href: "/resources/patients",
    type: "resource",
    category: "Resources",
    priority: 80
  },
  {
    title: "Newly Diagnosed",
    description: "Essential information and next steps for newly diagnosed patients.",
    href: "/support/newly-diagnosed",
    type: "page",
    category: "Support",
    priority: 95
  },
  {
    title: "Treatment Options",
    description: "Understanding available treatment options for LMS.",
    href: "/treatment-options",
    type: "page",
    category: "Education",
    priority: 88
  },
  {
    title: "Find a Specialist",
    description: "Locate LMS specialists and treatment centers near you.",
    href: "/resources/find-specialist",
    type: "resource",
    category: "Resources",
    priority: 87
  },
  {
    title: "Latest Research",
    description: "Stay updated with the latest LMS research and developments.",
    href: "/research/updates",
    type: "article",
    category: "Research",
    priority: 82
  }
]

// Add navigation items to searchable content
function extractSearchableNav(items: typeof mainNav): SearchResult[] {
  const results: SearchResult[] = []
  
  items.forEach(item => {
    if (item.href) {
      results.push({
        title: item.title,
        description: item.description,
        href: item.href,
        type: "page",
        priority: 70
      })
    }
    
    if (item.items) {
      item.items.forEach(subItem => {
        // Only add items with a defined href
        if (subItem.href) {
          results.push({
            title: subItem.title,
            description: subItem.description,
            href: subItem.href,
            type: "page",
            priority: 60
          })
        }
      })
    }
  })
  
  return results
}

const searchableContent = [...staticContent, ...extractSearchableNav(mainNav)]

function scoreResult(result: SearchResult, query: string): number {
  const queryLower = query.toLowerCase()
  const titleLower = result.title.toLowerCase()
  const descLower = result.description?.toLowerCase() || ""
  
  let score = result.priority

  // Exact matches in title
  if (titleLower === queryLower) score += 100
  // Title starts with query
  if (titleLower.startsWith(queryLower)) score += 50
  // Title contains query
  if (titleLower.includes(queryLower)) score += 30
  // Description contains query
  if (descLower.includes(queryLower)) score += 10
  
  // Word-by-word matching
  const queryWords = queryLower.split(" ").filter(Boolean)
  queryWords.forEach(word => {
    if (titleLower.includes(word)) score += 5
    if (descLower.includes(word)) score += 2
  })

  return score
}

export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return []

  const results = searchableContent
    .map(result => ({
      ...result,
      score: scoreResult(result, query)
    }))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ score, ...result }) => result)

  return results
}
