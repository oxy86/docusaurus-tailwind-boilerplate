
/**
 * A local module (added as dependency in package.json) to enable tailwindCSS and co
 * @see https://github.com/facebook/docusaurus/issues/2961#issuecomment-735355912
 * @param {*} context 
 * @param {*} options 
 * @returns 
 */
module.exports = function (context, options) {
    return {
        name: 'postcss-tailwindcss-loader',
        configurePostCss(postcssOptions) {
            const newOptions = {
                ident: 'postcss',
                plugins: [
                    require('postcss-import'),
                    require('tailwindcss'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 4,
                    })
                ],
            };
            return { ...postcssOptions, ...newOptions };
        },
    };
};