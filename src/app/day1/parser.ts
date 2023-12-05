export const parser = async (source: string) => {
    const lines = source.split("\n");

    return lines
        .reduce((acc, curr) => {
            const firstNumber = findFirstNumber(sanitize(curr));
            const lastNumber = findLastNumber(sanitize(curr));
            return (
                acc +
                parseInt(firstNumber![1], 10) * 10 +
                parseInt(lastNumber![1], 10)
            );
        }, 0)
        .toString();
};

export const sanitize = (source: string) => {
    const replacements = [
        ["zero", "0"],
        ["one", "1"],
        ["two", "2"],
        ["three", "3"],
        ["four", "4"],
        ["five", "5"],
        ["six", "6"],
        ["seven", "7"],
        ["eight", "8"],
        ["nine", "9"],
    ];

    for (let replacement of replacements) {
        source = source.replaceAll(
            replacement[0],
            `${replacement[0].substring(0, 1)}${
                replacement[1] // dirty hack
            }${replacement[0].substring(1)}`
        );
    }

    return source;
};
export const findFirstNumber = (source: string) => {
    return /(\d)/.exec(source);
};

export const findLastNumber = (source: string) => {
    return /.*(\d)/.exec(source);
};
