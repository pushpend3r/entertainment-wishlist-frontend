/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
