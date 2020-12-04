import * as commander from "commander"

import { translate } from './main'

const program  = new commander.Command();

program.version('0.0.1')
.name('fy')
.usage('<English>')
.arguments('<English>')
.action((English)=>{
  translate(English)
})

program.parse(process.argv)