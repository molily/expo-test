import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "jest-expo",
  // https://docs.expo.dev/develop/unit-testing/#additional-configuration-for-using-transformignorepatterns
  // transformIgnorePatterns: [
  //   "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)",
  // ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // extensionsToTreatAsEsm: [".ts", ".tsx"],
  // globals: {
  //   "ts-jest": {
  //     useESM: true,
  //   },
  // },
  // transform: {
  //   "^.+\\.tsx?$": ["ts-jest", { useESM: true }],
  // },
};

export default config;
