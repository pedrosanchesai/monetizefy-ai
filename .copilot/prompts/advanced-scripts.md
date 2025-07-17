# SCRIPTS AVANÇADOS E AUTOMAÇÕES

## BUILD SCRIPTS
- Pre-commit hooks para qualidade
- Automated testing pipeline
- Performance budgets
- SEO validation scripts

## DEPLOYMENT AUTOMATION
- Vercel/Netlify optimization
- Environment variables management
- Cache invalidation strategies
- Monitoring and alerts setup

## DEVELOPMENT TOOLS
- Hot reload optimization
- Debug utilities
- Performance profiling
- Bundle analysis automation

## PACKAGE.JSON SCRIPTS OTIMIZADOS
```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    
    "lint": "eslint src --ext .ts,.tsx,.astro",
    "lint:fix": "eslint src --ext .ts,.tsx,.astro --fix",
    "type-check": "astro check && tsc --noEmit",
    "format": "prettier --write src/",
    "format:check": "prettier --check src/",
    
    "test": "vitest",
    "test:coverage": "vitest --coverage",
    "test:ui": "vitest --ui",
    
    "lighthouse": "lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html",
    "analyze": "astro build && npx @next/bundle-analyzer",
    
    "prepare": "husky install",
    "pre-commit": "lint-staged"
  }
}
```

## HUSKY + LINT-STAGED SETUP
```json
// package.json
{
  "lint-staged": {
    "*.{ts,tsx,astro}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{md,json}": [
      "prettier --write"
    ]
  }
}
```

## ESLINT CONFIG PARA ASTRO
```javascript
// .eslintrc.cjs
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended',
    'plugin:astro/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  rules: {
    'astro/no-conflict-set-directives': 'error',
    'astro/no-unused-define-vars-in-style': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
};
```

## PRETTIER CONFIG
```javascript
// .prettierrc.cjs
module.exports = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 80,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
```

## PERFORMANCE MONITORING
```javascript
// scripts/performance-check.js
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

const runLighthouse = async (url) => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = { logLevel: 'info', output: 'json', port: chrome.port };
  const runnerResult = await lighthouse(url, options);
  
  await chrome.kill();
  
  const scores = runnerResult.lhr.categories;
  console.log('Performance Score:', scores.performance.score * 100);
  console.log('SEO Score:', scores.seo.score * 100);
  console.log('Accessibility Score:', scores.accessibility.score * 100);
  console.log('Best Practices Score:', scores['best-practices'].score * 100);
};

runLighthouse('http://localhost:3000');
```

## GITHUB ACTIONS WORKFLOW
```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test
      - run: npm run build
      
      - name: Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.12.x
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```
