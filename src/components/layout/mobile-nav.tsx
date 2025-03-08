'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Search, X, ChevronRight, BookOpen, Beaker, Users, Car, Shield } from "lucide-react"

import { MainNavItem } from "@/lib/types/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MobileNavProps {
  items?: MainNavItem[]
}

export function MobileNav({ items }: MobileNavProps) {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])

  const toggleExpanded = (title: string) => {
    setExpandedItems((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    )
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full h-full bg-white p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setOpen(false)}
            >
              <span className="text-xl font-bold text-nlmsf-purple">NLMSF</span>
            </Link>
            <Button
              variant="ghost"
              className="px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close Menu</span>
            </Button>
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)] pb-10">
            <div className="px-4 py-2">
              <div className="flex items-center space-x-2 rounded-md bg-nlmsf-purple/5 p-4">
                <Phone className="h-5 w-5 text-nlmsf-purple" />
                <a
                  href="tel:+13038083437"
                  className="text-sm font-medium text-nlmsf-purple"
                >
                  (303) 808-3437
                </a>
              </div>
            </div>
            <div className="space-y-2 px-2 py-4">
              {items?.map((item) => (
                <div key={item.title} className="space-y-3">
                  {item.items ? (
                    <div className="space-y-3">
                      <div
                        className="flex cursor-pointer items-center justify-between px-2 py-1.5 rounded-md hover:bg-nlmsf-purple hover:text-white transition-colors"
                        onClick={() => toggleExpanded(item.title)}
                      >
                        <span className="text-sm font-medium">{item.title}</span>
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform",
                            expandedItems.includes(item.title) && "rotate-90"
                          )}
                        />
                      </div>
                      {expandedItems.includes(item.title) && (
                        <div className="ml-4 space-y-4 border-l pl-2">
                          {/* Special handling for Resources section */}
                          {item.title === "Resources" && (
                            <div className="space-y-4">
                              <div className="px-2 py-1 mb-2 text-xs font-bold text-nlmsf-purple tracking-wide border-b">
                                RESOURCES
                              </div>
                              <div className="space-y-2">
                                {item.items?.map((resourceItem) => (
                                  resourceItem.href && (
                                    <Link
                                      key={resourceItem.title}
                                      href={resourceItem.href}
                                      onClick={() => setOpen(false)}
                                      className="block rounded-md px-2 py-1.5 text-sm group hover:bg-nlmsf-purple hover:text-white"
                                    >
                                      <div className="text-gray-700 group-hover:text-white">{resourceItem.title}</div>
                                    </Link>
                                  )
                                ))}
                              </div>
                              
                              <div className="px-2 py-1 mb-2 text-xs font-bold text-nlmsf-purple tracking-wide border-b">
                                FEATURED RESOURCES
                              </div>
                              <div className="space-y-2">
                                <Link
                                  href="/support/newly-diagnosed"
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2 rounded-md p-2 text-sm group hover:bg-blue-50"
                                >
                                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
                                    <BookOpen size={12} />
                                  </div>
                                  <div className="text-gray-700">Newly Diagnosed Guide</div>
                                </Link>
                                
                                <Link
                                  href="/research/clinical-trials"
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2 rounded-md p-2 text-sm group hover:bg-purple-50"
                                >
                                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600">
                                    <Beaker size={12} />
                                  </div>
                                  <div className="text-gray-700">Clinical Trials</div>
                                </Link>
                                
                                <Link
                                  href="/support/groups"
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2 rounded-md p-2 text-sm group hover:bg-green-50"
                                >
                                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600">
                                    <Users size={12} />
                                  </div>
                                  <div className="text-gray-700">Support Groups</div>
                                </Link>
                                
                                <Link
                                  href="/resources/transportation-lodging"
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2 rounded-md p-2 text-sm group hover:bg-amber-50"
                                >
                                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600">
                                    <Car size={12} />
                                  </div>
                                  <div className="text-gray-700">Transportation & Lodging</div>
                                </Link>
                                
                                <Link
                                  href="/resources/insurance-coverage"
                                  onClick={() => setOpen(false)}
                                  className="flex items-center gap-2 rounded-md p-2 text-sm group hover:bg-blue-50"
                                >
                                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600">
                                    <Shield size={12} />
                                  </div>
                                  <div className="text-gray-700">Insurance Coverage</div>
                                </Link>
                              </div>
                            </div>
                          )}
                          
                          {/* Standard handling for other sections */}
                          {item.title !== "Resources" && item.items.map((category) => (
                            <div key={category.title} className="space-y-2">
                              {category.isCategory && (
                                <div className="px-2 py-1 mb-2 text-xs font-bold text-nlmsf-purple tracking-wide border-b">
                                  {category.title}
                                </div>
                              )}
                              <div className="space-y-1">
                                {category.items?.map((subItem) => (
                                  subItem.href ? (
                                    <Link
                                      key={subItem.title}
                                      href={subItem.href}
                                      onClick={() => setOpen(false)}
                                      className={cn(
                                        "block rounded-md px-2 py-1.5 text-sm group",
                                        pathname === subItem.href
                                          ? "bg-purple-500 text-white font-medium"
                                          : "hover:bg-nlmsf-purple hover:text-white"
                                      )}
                                    >
                                      <div className="text-gray-700 group-hover:text-white">{subItem.title}</div>
                                    </Link>
                                  ) : (
                                    <div key={subItem.title} className="block rounded-md px-2 py-1.5 text-sm">
                                      <div className="text-gray-700">{subItem.title}</div>
                                    </div>
                                  )
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    item.href && (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-md px-2 py-1.5 text-sm",
                          pathname === item.href
                            ? "bg-nlmsf-purple text-white"
                            : "hover:bg-nlmsf-purple/10"
                        )}
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
            <div className="border-t px-4 py-4">
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="sm"
                  className="px-0 text-gray-600 hover:text-nlmsf-purple"
                >
                  <Search className="h-5 w-5" />
                  <span className="ml-2">Search</span>
                </Button>
                <Link
                  href="/get-involved/donate"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-nlmsf-purple px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-nlmsf-purple-light"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  )
}
