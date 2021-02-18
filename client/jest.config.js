module.exports = {
  moduleFileExtensions: [
    "js"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/jest/"
  ],
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.js"],
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "<rootDir>/jest/__mocks__/mocks.js"
  }
};