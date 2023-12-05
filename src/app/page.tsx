import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Masters Advent of Code 2023
        </p>
        <Link
          href="/day1"
          className="flex items-center justify-center w-full h-full px-4 py-2 text-sm font-medium text-center text-white transition-colors bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl dark:from-sky-900 dark:to-blue-900/80 hover:from-sky-600 hover:to-blue-600 dark:hover:from-sky-800 dark:hover:to-blue-800/80"
        >
          Day 1
        </Link>
      </div>
    </main>
  )
}
