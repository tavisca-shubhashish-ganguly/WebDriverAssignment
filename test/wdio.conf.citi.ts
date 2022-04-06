const merge = require('deepmerge')
const wdioConf = require('./wdio.conf.ts')

exports.config = merge(wdioConf.config,{
    mochaOpts:{
        grep: "citi"
    },
})