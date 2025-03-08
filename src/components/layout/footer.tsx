import Link from "next/link"
import { footerNav } from "@/lib/constants/navigation"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container">
        <div className="py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {footerNav.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-lg font-semibold text-nlmsf-purple">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      {item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 transition-colors hover:text-nlmsf-purple-light"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-gray-600 transition-colors hover:text-nlmsf-purple-light"
                        >
                          {item.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center space-x-2 text-nlmsf-purple">
              <span className="text-sm">
                © {new Date().getFullYear()} National LeioMyoSarcoma Foundation. All rights reserved.
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 transition-colors hover:text-nlmsf-purple-light"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 transition-colors hover:text-nlmsf-purple-light"
              >
                Terms of Use
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 transition-colors hover:text-nlmsf-purple-light"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500">
              24/7 Support Hotline:{" "}
              <a
                href="tel:+13038083437"
                className="font-semibold text-nlmsf-purple hover:text-nlmsf-purple-light"
              >
                (303) 808-3437
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
