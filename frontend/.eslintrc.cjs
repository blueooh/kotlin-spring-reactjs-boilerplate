module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:css-import-order/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [
    'react',
    'react-refresh',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'import',
    'css-import-order'
  ],
  'settings': {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {}
    }
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'warn',
    'quotes': ['error', 'single'],
    'no-duplicate-imports': 'error',
    'no-console': ['warn', { 'allow': ['warn', 'error', 'info'] }],
    'no-unused-vars': 'warn',
    'no-multiple-empty-lines': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'type',
          'unknown'
        ],
        'pathGroups': [
          {
            'pattern': '{react*,react*/**}',
            'group': 'external',
            'position': 'before'
          },
          {
            'pattern': '@/**',
            'position': 'after',
            'group': 'external'
          }
        ],
        'pathGroupsExcludedImportTypes': ['react', 'unknown'],
        'newlines-between': 'never',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        }
      }
    ]
  },
}
