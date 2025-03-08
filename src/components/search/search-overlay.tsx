'use client'

import * as React from 'react'
import { Search, X, Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { search } from '@/app/actions/search'
import type { SearchResult } from '@/lib/search'

export function SearchOverlay() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)
  const [results, setResults] = React.useState<SearchResult[]>([])
  const inputRef = React.useRef<HTMLInputElement>(null)
  const router = useRouter()

  const onSearch = React.useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)
    try {
      const searchResults = await search(searchQuery)
      setResults(searchResults)
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    }
    setIsSearching(false)
  }, [])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleSelect = (result: SearchResult) => {
    setOpen(false)
    router.push(result.href)
  }

  React.useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  return (
    <>
      <Button
        variant="ghost"
        className="text-gray-600 hover:text-nlmsf-purple"
        onClick={() => setOpen(true)}
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search</span>
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="top-[30%] p-0 sm:max-w-[600px]">
          <div className="flex items-center border-b px-4 py-4">
            <Search className="mr-2 h-5 w-5 shrink-0 text-gray-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                onSearch(e.target.value)
              }}
              placeholder="Search NLMSF..."
              className="flex-1 border-0 bg-transparent text-sm placeholder:text-gray-400 focus:outline-none focus:ring-0"
            />
            {isSearching && <Loader2 className="h-5 w-5 animate-spin text-gray-400" />}
            <kbd className="hidden rounded bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-500 sm:inline-block">
              ESC
            </kbd>
          </div>
          <ScrollArea className="max-h-[300px] overflow-y-auto">
            <div className="px-2 py-3">
              {results.length > 0 ? (
                <div className="space-y-1">
                  {results.map((result) => (
                    <button
                      key={result.href}
                      onClick={() => handleSelect(result)}
                      className={cn(
                        "w-full rounded-lg px-4 py-2 text-left transition-colors hover:bg-nlmsf-purple/5",
                        "focus:bg-nlmsf-purple/5 focus:outline-none"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{result.title}</span>
                        <div className="flex items-center space-x-2">
                        {result.category && (
                          <span className="text-xs text-nlmsf-purple">{result.category}</span>
                        )}
                        <span className="text-xs text-gray-400">{result.type}</span>
                      </div>
                      </div>
                      {result.description && (
                        <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                          {result.description}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              ) : query && !isSearching ? (
                <p className="py-4 text-center text-sm text-gray-500">
                  No results found.
                </p>
              ) : null}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  )
}
