'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, BookOpen, Beaker, Users, Car, Shield } from "lucide-react"

import { MainNavItem } from "@/lib/types/navigation"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MobileNav } from "@/components/layout/mobile-nav"
import { SearchOverlay } from "@/components/search/search-overlay"

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex w-full items-center justify-between py-4 bg-white z-50 relative border-b shadow-sm">
      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <MobileNav items={items} />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:items-center lg:space-x-8">
        <Link href="/" className="flex items-center mr-8">
          <div className="w-auto h-20 relative overflow-hidden">
            <Image 
              src="/nlmsf-logo-2.png" 
              alt="NLMSF Logo" 
              width={240} 
              height={240} 
              className="object-contain h-full" 
              priority
              style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.15))' }}
            />
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {items?.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="text-gray-700 hover:bg-nlmsf-purple hover:text-white px-3">
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[800px] p-4">
                        <div className="w-full">
                        <h3 className="mb-4 text-lg font-semibold text-nlmsf-purple">
                          {item.title}
                        </h3>
                        <div className="flex flex-col gap-6 p-4">
                          {/* Patient Resources Category */}
                          {item.items[0].isCategory && (
                            <div className="space-y-3">
                              <h4 className="text-sm font-bold text-nlmsf-purple tracking-wide border-b pb-1">
                                {item.items[0].title}
                              </h4>
                              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                                {item.items[0].items?.map((subItem) => (
                                  <li key={subItem.title}>
                                    {subItem.href ? (
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={subItem.href}
                                          className={cn(
                                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors group",
                                            pathname === subItem.href
                                              ? "bg-purple-500 text-white font-medium"
                                              : "hover:bg-nlmsf-purple hover:text-white"
                                          )}
                                        >
                                          <div className="text-sm font-medium text-gray-700 group-hover:text-white">
                                            {subItem.title}
                                          </div>
                                        </Link>
                                      </NavigationMenuLink>
                                    ) : (
                                      <div className="block select-none rounded-md p-3 leading-none">
                                        <div className="text-sm font-medium text-gray-700">
                                          {subItem.title}
                                        </div>
                                      </div>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Newly Diagnosed Category */}
                          {item.items[1].isCategory && (
                            <div className="space-y-3">
                              <h4 className="text-sm font-bold text-nlmsf-purple tracking-wide border-b pb-1">
                                {item.items[1].title}
                              </h4>
                              <ul className="grid grid-cols-3 gap-x-6 gap-y-2">
                                {item.items[1].items?.map((subItem) => (
                                  <li key={subItem.title}>
                                    {subItem.href ? (
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={subItem.href}
                                          className={cn(
                                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors group",
                                            pathname === subItem.href
                                              ? "bg-purple-500 text-white font-medium"
                                              : "hover:bg-nlmsf-purple hover:text-white"
                                          )}
                                        >
                                          <div className="text-sm font-medium text-gray-700 group-hover:text-white">
                                            {subItem.title}
                                          </div>
                                        </Link>
                                      </NavigationMenuLink>
                                    ) : (
                                      <div className="block select-none rounded-md p-3 leading-none">
                                        <div className="text-sm font-medium text-gray-700">
                                          {subItem.title}
                                        </div>
                                      </div>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Direct Resource Links */}
                          {item.title === "Resources" && item.items && !item.items[0].isCategory && (
                            <div className="space-y-3">
                              <h4 className="text-sm font-bold text-nlmsf-purple tracking-wide border-b pb-1">
                                RESOURCES
                              </h4>
                              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                                {item.items.map((subItem) => (
                                  <li key={subItem.title}>
                                    {subItem.href ? (
                                      <NavigationMenuLink asChild>
                                        <Link
                                          href={subItem.href}
                                          className={cn(
                                            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors group",
                                            pathname === subItem.href
                                              ? "bg-purple-500 text-white font-medium"
                                              : "hover:bg-nlmsf-purple hover:text-white"
                                          )}
                                        >
                                          <div className="text-sm font-medium text-gray-700 group-hover:text-white">
                                            {subItem.title}
                                          </div>
                                        </Link>
                                      </NavigationMenuLink>
                                    ) : (
                                      <div className="block select-none rounded-md p-3 leading-none">
                                        <div className="text-sm font-medium text-gray-700">
                                          {subItem.title}
                                        </div>
                                      </div>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Featured Resources */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-bold text-nlmsf-purple tracking-wide border-b pb-1">
                              FEATURED RESOURCES
                            </h4>
                            <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/support/newly-diagnosed"
                                    className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors group hover:bg-blue-50 border border-transparent hover:border-blue-200"
                                  >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                                      <BookOpen size={16} />
                                    </div>
                                    <div className="text-sm font-medium text-gray-700">
                                      Newly Diagnosed Guide
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/research/clinical-trials"
                                    className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors group hover:bg-purple-50 border border-transparent hover:border-purple-200"
                                  >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600">
                                      <Beaker size={16} />
                                    </div>
                                    <div className="text-sm font-medium text-gray-700">
                                      Clinical Trials
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/support/groups"
                                    className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors group hover:bg-green-50 border border-transparent hover:border-green-200"
                                  >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
                                      <Users size={16} />
                                    </div>
                                    <div className="text-sm font-medium text-gray-700">
                                      Support Groups
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/resources/transportation-lodging"
                                    className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors group hover:bg-amber-50 border border-transparent hover:border-amber-200"
                                  >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600">
                                      <Car size={16} />
                                    </div>
                                    <div className="text-sm font-medium text-gray-700">
                                      Transportation & Lodging
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              <li>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href="/resources/insurance-coverage"
                                    className="flex items-center gap-2 rounded-md p-3 leading-none no-underline outline-none transition-colors group hover:bg-blue-50 border border-transparent hover:border-blue-200"
                                  >
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                                      <Shield size={16} />
                                    </div>
                                    <div className="text-sm font-medium text-gray-700">
                                      Insurance Coverage
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : item.href ? (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-gray-700 hover:bg-nlmsf-purple hover:text-white px-3"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                ) : (
                  <span className={cn(
                    navigationMenuTriggerStyle(),
                    "text-gray-700 cursor-default"
                  )}>
                    {item.title}
                  </span>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-5 lg:space-x-6">
        <div className="hidden md:block">
          <SearchOverlay />
        </div>
        <div className="hidden items-center md:flex">
          <a
            href="tel:+13038083437"
            className="flex items-center text-sm font-medium text-nlmsf-purple hover:text-nlmsf-purple-light whitespace-nowrap"
          >
            <Phone className="h-4 w-4 mr-1.5 text-nlmsf-purple flex-shrink-0" />
            <span className="hidden lg:inline">(303) 808-3437</span>
            <span className="lg:hidden">Call Us</span>
          </a>
        </div>
        <Link
          href="/get-involved/donate"
          className="rounded-full bg-nlmsf-purple px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-nlmsf-purple-light shadow-sm hover:shadow-md whitespace-nowrap"
        >
          Donate Now
        </Link>
      </div>
    </div>
  )
}
