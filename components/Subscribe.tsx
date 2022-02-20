export default function Subscribe() {
  return (
    <div className="w-full py-6 my-4">
      <p className="text-lg font-bold text-gray-900 md:text-xl dark:text-gray-200">
        Subscribe to the newsletter
      </p>
      <div id="revue-embed">
        <form
          action="https://www.getrevue.co/profile/sasicodes/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <div className="relative my-4">
            <input
              className="block w-full p-5 pr-32 mt-2 text-gray-900 bg-white rounded-xl ring ring-gray-200 dark:ring-gray-800 focus:outline-none dark:bg-gray-900 dark:text-gray-100"
              placeholder="your@email.here"
              aria-label="Email for newsletter"
              required
              type="email"
              autoComplete="email"
              name="member[email]"
              id="member_email"
            />
            <button
              className="absolute flex items-center justify-center px-4 font-medium text-gray-900 rounded-lg ring-orange-200 dark:ring-orange-800/60 ring hover:bg-orange-200 dark:hover:bg-orange-800 right-2 bottom-2 top-2 dark:text-gray-100 md:w-44"
              type="submit"
              name="member[subscribe]"
              id="member_submit"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
