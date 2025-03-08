import { Metadata } from "next";
import { Mail, Bell, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter Signup - NLMSF",
  description: "Sign up for the NLMSF newsletter to receive updates on events, research, and foundation news.",
};

export default function NewsletterSignupPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Subscribe to Our Newsletter
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay informed about upcoming events, research breakthroughs, and community updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl shadow-sm border border-purple-100">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700">
                    Newsletter Preferences
                  </legend>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="events"
                          name="preferences"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="events" className="font-medium text-gray-700">
                          Events & Webinars
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="research"
                          name="preferences"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="research" className="font-medium text-gray-700">
                          Research Updates
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="community"
                          name="preferences"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="community" className="font-medium text-gray-700">
                          Community Stories
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Bell className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Stay Informed</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Our newsletter delivers the latest information on LMS research, treatment options, and community events directly to your inbox.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">What You'll Receive</h3>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Monthly newsletter with foundation updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Invitations to virtual and in-person events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Research breakthroughs and clinical trial opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Patient stories and community resources</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">Privacy Commitment</h3>
              </div>
              <p className="mt-4 text-gray-600">
                We respect your privacy. Your information will never be shared with third parties, and you can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
