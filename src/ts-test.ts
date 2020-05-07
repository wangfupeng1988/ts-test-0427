// import { cloneDeep } from 'lodash'
import fn1, { fn2 } from './utils/u'

import './assets/style/a.less'
import './assets/style/icon.less'

const a = 'hello world'
console.log(a)
console.log(fn1(a))

const n = 10
console.log(fn2(15))

interface SomeObj {
    x: number
}

const obj: SomeObj = { x: 100 }
// console.log(cloneDeep(obj))

export { a, n, obj }
