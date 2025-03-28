export default function createScoreArray() {
  return Array.from({ length: 18 }, (_, index) => {
    return { hole: index + 1, score: 0 };
  });
}
