"use client";
import { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";

let pending: DebouncedFunc<any> | void = undefined;

interface DebouncedFunc<T extends (...args: any[]) => any> {
    /**
     * Call the original function, but applying the debounce rules.
     *
     * If the debounced function can be run immediately, this calls it and returns its return
     * value.
     *
     * Otherwise, it returns the return value of the last invocation, or undefined if the debounced
     * function was not invoked yet.
     */
    (...args: Parameters<T>): ReturnType<T> | undefined;

    /**
     * Throw away any pending invocation of the debounced function.
     */
    cancel(): void;

    /**
     * If there is a pending invocation of the debounced function, invoke it immediately and return
     * its return value.
     *
     * Otherwise, return the value from the last invocation, or undefined if the debounced function
     * was never invoked.
     */
    flush(): ReturnType<T> | undefined;
}

export default function Day2() {
    let [textBoxValue, setTextBoxValue] = useState("");
    let [debouncedText, setDebouncedText] = useState("");

    const handleSetDebouncedText = debounce((textToSet) => {
        setDebouncedText(textToSet);
    }, 100);

    const pending = useRef<DebouncedFunc<any> | void>();

    const handleSetText = (textToSet: string) => {
        pending.current?.cancel();
        pending.current = handleSetDebouncedText;
        handleSetDebouncedText(textToSet);
        setTextBoxValue(textToSet);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Day 2
                </p>
            </div>
            <textarea
                className="w-full h-96 bg-gray-100 dark:bg-zinc-800/30 dark:text-white dark:placeholder-white dark:placeholder-opacity-50 dark:border-neutral-800/30 dark:focus:ring-neutral-800/30 dark:focus:border-neutral-800/30 dark:focus:placeholder-white dark:focus:placeholder-opacity-50 dark:focus:border-opacity-30 dark:focus:ring-opacity-30 dark:focus:bg-zinc-800/30 dark:focus:text-white dark:focus:shadow-lg dark:focus:outline-none dark:rounded-xl dark:resize-none"
                placeholder="Input"
                value={textBoxValue}
                onChange={(e) => handleSetText(e.target.value)}
            />
            <div data-testid="results">Result: {debouncedText}</div>
        </main>
    );
}
