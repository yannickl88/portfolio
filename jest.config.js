module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^.+\\.(less)$": "identity-obj-proxy",
    "^.+\\.(svg|gif|webp)$": "jest-transform-stub",
  },
  globals: {
    CONTACT_FORM_URL: "",
  },
  resetMocks: true,
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
