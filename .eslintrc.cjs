module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
    'plugin:import/recommended',
    'plugin:import/typescript'
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true, // Use eslint-plugin-import instead
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: true,
      },
    ],
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin', // Built-in imports (native Node) go first
          'external',
          'internal', // Absolute imports
          ['sibling', 'parent'], // Relative imports
          'index', // Index imports
          'unknown',
        ],
        'newlines-between': 'always',
        alphabetize: {
          /* sort in ascending order. Options: ["ignore", "asc", "desc"] */
          order: 'asc',
          /* ignore case. Options: [true, false] */
          caseInsensitive: true,
        },
      },
    ],
  },
}
