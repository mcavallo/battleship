import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  rootDir: '../src',
  testRegex: '.*\\.spec\\.tsx?$',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '\\.?constants\\.tsx?$',
    '\\.d.ts$',
    '\\.fixtures\\.tsx?$',
    '\\.mocks\\.tsx?$',
    '\\.types\\.tsx?$',
    'index\\.tsx?$',
    'main\\.tsx?$',
  ],
  coverageDirectory: '../coverage',
  coverageReporters: process.env.CI ? ['text'] : ['lcov'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.css$': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>/../test/jest-setup.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
};

export default config;
