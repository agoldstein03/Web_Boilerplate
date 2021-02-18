const sveltePreprocess = require('svelte-preprocess');

module.exports = {
    preprocess: sveltePreprocess({
        sourceMap: true,
        defaults: {
//          markup: 'pug',
            style: 'scss'
         },
         postcss: {
             plugins: [require('autoprefixer')()]
         }
     })
}
