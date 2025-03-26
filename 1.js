import assert from "assert";

export const getUniqeObjects = (array) => {
  const s = new Set();
  const result = [];
  for (const item of array) {
    if (s.has(item.id)) {
      continue;
    }
    s.add(item.id);
    result.push(item);
  }
  return result;
};

const array = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
];


assert.deepEqual(getUniqeObjects(array), [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
]);
