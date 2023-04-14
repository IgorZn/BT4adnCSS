class Vehicle {
    constructor(title) {
        this.title = title
    }

}

let FooMixin = (Superclass) => class extends Superclass {
    foo() {
        console.log('foo');
    }
};

let BarMixin = (Superclass) => class extends Superclass {
    bar() {
        console.log('bar');
    }
};

let BazMixin = (Superclass) => class extends Superclass {
    baz() {
        console.log('baz');
    }
};

let TitleMixin = (Superclass) => class extends Superclass {
    showTitle() {
        console.log(this.title);
    }
};

function mix(BaseClass, ...Mixins) {
    return Mixins.reduce((accumulator, current) => current(accumulator),
        BaseClass);
}

// class Bus extends mix(Vehicle, FooMixin, BarMixin, BazMixin, TitleMixin) {
//     constructor(title) {
//         super(title);
//     }
// }




class Bus extends FooMixin(BarMixin(BazMixin(TitleMixin(Vehicle)))) {
    constructor(title) {
        super(title);
    }
}

module.exports = { Bus }

// let b = new Bus('igor');
// b.foo(); // foo
// b.bar(); // bar
// b.baz(); // baz
// b.showTitle(); // title
// console.log(b)