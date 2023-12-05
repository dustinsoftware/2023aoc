export const loader = async () => {
  return await window.fetch("/assets/day1.txt").then((x) => x.text());
};
