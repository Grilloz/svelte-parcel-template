module.exports = {
  transform: {
    "^.+\\.svelte$": ["svelte-jester", { "preprocess": true }],
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "svelte"],
  testPathIgnorePatterns: ["node_modules"],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
};