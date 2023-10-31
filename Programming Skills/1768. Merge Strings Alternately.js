// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=programming-skills
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  if (word1.length < 1 || word2.length > 100) return;

  let merged = '';
  const minLength = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLength; i++) {
    merged += word1[i] + word2[i];
  }

  merged += word1.slice(minLength) + word2.slice(minLength);

  return merged;
};

console.log(mergeAlternately('ab', 'pqrs')); //apbqrs
console.log(mergeAlternately('pqrsd', 'ab')); //paqbrsd
