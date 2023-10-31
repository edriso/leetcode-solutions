// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  if (word1.length < 1 || word2.length > 100) return;

  const lengthDifference = word1.length - word2.length;
  const shorterLength = lengthDifference >= 0 ? word2.length : word1.length;

  let merged = '';
  for (let i = 0; i < shorterLength; i++) {
    merged += word1[i] + word2[i];
  }

  if (lengthDifference === 0) return merged;

  merged +=
    lengthDifference >= 0
      ? word1.slice(-lengthDifference)
      : word2.slice(lengthDifference);
  return merged;
};

console.log(mergeAlternately('ab', 'pqrs'));
