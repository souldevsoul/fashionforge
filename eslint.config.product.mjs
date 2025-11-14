import productQuality from './eslint-plugin-product-quality/index.js';
import tsParser from '@typescript-eslint/parser';

const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "next-env.d.ts",
      "test-*.ts",
      "eslint-plugin-product-quality/**",
      // Legacy code - to be removed
      "app/admin/**",
      "app/specialist/**",
      "components/voicecraft/**",
      "components/project/**",
      // Demo/marketing pages - lower priority
      "app/blog/**",
      "app/components/**",
      "app/demo/**",
      "app/delivery-policy/**",
      "app/payment-policy/**",
      "app/cancellation-policy/**",
      "app/cookie-policy/**",
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'product-quality': productQuality,
    },
    rules: {
      // Enable all product quality rules
      'product-quality/no-broken-internal-links': 'error',
      'product-quality/use-styleguide-colors-only': ['error', {
        allowedColors: ['pink', 'rose', 'purple', 'fuchsia', 'white', 'black', 'gray', 'slate', 'zinc', 'transparent', 'current'],
      }],
      'product-quality/consistent-company-info': ['error', {
        companyName: 'FashionForge',
        email: 'support@fashionforge.ai',
      }],
      'product-quality/consistent-payment-providers': ['error', {
        provider: 'stripe',
      }],
      'product-quality/no-button-without-handler': 'error',
      'product-quality/no-form-without-submit': 'error',
      'product-quality/no-missing-alt-text': 'error',
      'product-quality/no-generic-placeholders': 'error',
      'product-quality/require-loading-state-on-async-button': 'error',
      'product-quality/require-try-catch-fetch': 'error',
      'product-quality/require-empty-state': 'warn',
      'product-quality/require-image-optimization': 'warn',
      'product-quality/require-aria-label-on-icon-buttons': 'error',
    },
  },
];

export default config;
