export const parser = async (source: string) => {
    const lines = source.split("\n");

    return lines
        .reduce((acc, curr) => {
            const firstNumber = findFirstNumber(curr);
            const lastNumber = findLastNumber(curr);
            return (
                acc +
                parseInt(firstNumber![1], 10) * 10 +
                parseInt(lastNumber![1], 10)
            );
        }, 0)
        .toString();
};

export const findFirstNumber = (source: string) => {
    return /(\d)/.exec(source);
};

export const findLastNumber = (source: string) => {
    return /.*(\d)/.exec(source);
};
