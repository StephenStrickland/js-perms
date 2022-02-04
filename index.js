// run `node index.js` in the terminal

// const x = {
//   one: {
//     lower: 1,
//     upper: 5,
//   },
//   two: {
//     lower: 5,
//     upper: 10,
//   },
// };

const x = {
  one: {
    lower: 1,
    upper: 5,
  },
  two: {
    lower: 5,
    upper: 10,
  },
  three: {
    lower: 3,
    upper: 10,
  },
};

function getCombinations(arr) {
  if (arr.length === 0) return [[]];
  let [current, ...rest] = arr;
  let combinations = getCombinations(rest);
  return current.vals.reduce(
    (a, string) => [...a, ...combinations.map((c) => [string, ...c])],
    []
  );
}

function mapBack(keys, values) {
  return values.map((x) => {
    const bag = {};
    for (i = 0; i < x.length; i++) {
      bag[keys[i]] = x[i];
    }
    return bag;
  });
}

function calcPerms(input) {
  console.log(input);
  const ranges = {};
  const r = [];

  console.log(Object.keys(input));
  Object.keys(input).map((k) => {
    const prop = input[k];
    const start = prop.lower;
    const end = prop.upper;
    const range = [...Array(end - start + 1).keys()].map((x) => {
      return x + start;
    });
    r.push({ ent: k, vals: range });
  });

  console.log(ranges);

  const allKeys = Object.keys(input);
  const vals = getCombinations(r);

  console.log('all permutations', mapBack(allKeys, vals));
}

calcPerms(x);
