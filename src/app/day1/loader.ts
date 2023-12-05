export const loader = async () => {
  return await fetch("http://localhost:3000/assets/day1.txt").then((x) =>
    x.text()
  );
};
