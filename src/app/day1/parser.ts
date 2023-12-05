export const parser = async (source: string) => {
  const lines = source.split("\n");

  return `${lines.length}`;
};
