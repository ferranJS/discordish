module.exports = {
   trailingComma: "all",
   tabWidth: 3,
   semi: false,
   singleQuote: true,

   plugins: [require('prettier-plugin-tailwindcss')],
   tailwindConfig: './tailwind.config.js',
};