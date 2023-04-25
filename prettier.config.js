module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',

  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './tailwind.config.js'
}
