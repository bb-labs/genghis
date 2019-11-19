import Algebra from '../../template/algebra.mjs'
import PairOperation from './operation.mjs'

export default class Division extends PairOperation {
    constructor(args) {
        /** Superclass */
        super(args)

        /** Result */
        this.result = args.result || this.resultant()

        /** Initialize */
        if (this.of.size > 0) {
            this.symbolicBoilerplate() // super class method 
            this.symbolicSourceTemplate() // super class method, utilizes helpers below
        }

        /** Create */
        this.invoke = new Function('A,B,R', this.source)
    }

    /** Symbolic Implementation */
    start() { }

    preLoop() { }

    inLoop() {
        return Algebra.divide(this.variables.result, this.variables.of, this.variables.with)
    }

    postLoop() { }

    finish() { return 'return R' }

    /** (TODO) Pointwise Implementation */
}
