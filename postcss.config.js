const tailwindcss = require("tailwindcss");
const production = !process.env.ROLLUP_WATCH;

// Refer https://github.com/tailwindcss/discuss/issues/254 for any issues with Tailwind compilation

// only needed if you want to purge
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./public/**/*.html"],
  defaultExtractor: content => {
    const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);

    const matchedTokens = [];

    let match = regExp.exec(content);

    while (match) {
        if (match[0].startsWith('class:')) {
            matchedTokens.push(match[0].substring(6));
        } else {
            matchedTokens.push(match[0]);
        }

        match = regExp.exec(content);
    }

    return matchedTokens;
  }
});

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),

    // only needed if you want to purge
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};