import { loader } from "./loader";
import { parser } from "./parser";

export default async function () {
  const loadResult = await loader();
  const result = await parser(loadResult);
  return (
    <div className="flex flex-col items-center justify-between w-full px-4 py-2 text-sm font-medium text-center text-white transition-colors bg-gradient-to-br from-sky-500 to-blue-500 rounded-xl dark:from-sky-900 dark:to-blue-900/80 hover:from-sky-600 hover:to-blue-600 dark:hover:from-sky-800 dark:hover:to-blue-800/80">
      {result}
    </div>
  );
}
