describe('Array list', function () {
    beforeEach(function () {
        arrayList.clear();
    })

    describe('Object structure', function () {
        it('Check object structure', function () {
            const exp = ["length", "push", "pop", "clear", "unshift", "shift", "toString", "toLinkedList", "sort"];
            const act = [];
            for(let key in arrayList){
                act.push(key);
            }
            assert.deepEqual(exp, act);
        })
    })

    describe('Length method', function () {
        it('Method length have arg/s and expected return false', function () {
            const exp = false;
            const act = arrayList.length(1);
            assert.equal(exp, act);
        })
        it('Call push method three times, expected return true if length = 3', function () {
            arrayList.push(1);
            arrayList.push(1);
            arrayList.push(1);
            const exp = 3;
            const act = arrayList.length();
            assert.equal(exp, act)
        })

    })

    describe('Clear method', function () {
        it('Method clear have arg/s and expected return false ', function () {
            const exp = false;
            const act = arrayList.clear(1);
            assert.equal(exp, act);
        })
    })

    describe('Push method', function () {
        it('Method push have more one argument and expected return false ', function () {
            const exp = false;
            const act = arrayList.push(1, "a");
            assert.equal(exp, act);
        })
        it('set to push method arguments null or undefined ', function () {
            const exp = false;
            const act = arrayList.push(undefined, null);
            assert.equal(exp, act);
        })
    })

    describe('Pop method', function () {
        it('List have length 0, expected return false ', function () {
            const exp = false;
            const act = arrayList.length();
            assert.equal(exp, act)
        })

    })

    describe('Unshift method', function () {
        it('Method unshift have more one argument and expected return false', function () {
            const exp = false;
            const act = arrayList.unshift(1, "a");
            assert.equal(exp, act);
        })

    })

    describe('toString method', function () {
        it('Method toString have arg/s and expected return false', function () {
            const exp = false;
            const act = arrayList.toString(1, "a");
            assert.equal(exp, act);
        })

        it('Method toString return no String and expected return false', function () {
            const exp = false;
            const act = [];
            assert.equal(exp, act);
        })
        it('Method toString return String and expected return true', function () {
            const exp = "string";
            const act = typeof(arrayList.toString())
            assert.equal(exp, act);
        })
    })

})



describe('Linked list', function () {
    beforeEach(function () {
        linkedList.clear();
    })

    describe('Object structure', function () {
        it('Check object structure', function () {
            const exp = ["length", "root", "createNode", "push", "pop", "unshift", "shift", "toString", "toArrayList", "clear", "sort"];
            const act = [];
            for(let key in linkedList){
                act.push(key);
            }
            assert.deepEqual(exp, act);
        })

        it('Check if linkedList is object ', function () {
            const exp = typeof({});
            const act = typeof(linkedList);
            assert.deepEqual(exp, act);
        })
    })

    describe('Length', function () {
        it('Function CreateNode have arg/s expected return false', function () {
            const exp = false;
            const act = linkedList.length(1, 2);
            assert.deepEqual(exp, act);
        })
    })

    describe('Root field', function () {
        it('Check default properties of root object', function () {
            const exp = {
                next : null,
                prev : null,
                length : 0,
            };
            const act = linkedList.root;
            assert.deepEqual(exp, act);
        })
    })

    describe('CreateNode', function () {
        it('Function CreateNode have more one arg/s expected return false', function () {
            const exp = false;
            const act = linkedList.createNode(1, 2);
            assert.deepEqual(exp, act);
        })
        it('Function CreateNode create object, expected return true', function () {
            const exp = "object";
            const act = typeof(linkedList.createNode(1));
            assert.deepEqual(exp, act);
        })
    })

    describe('Push method', function () {
        it('Method push have more one argument and expected return false ', function () {
            const exp = false;
            const act = linkedList.push(1, "a");
            assert.equal(exp, act);
        })
        it('set to push method arguments null or undefined ', function () {
            const exp = false;
            const act = linkedList.push(undefined, null);
            assert.equal(exp, act);
        })
    })

    describe('Pop method', function () {
        it('List have length 0, expected return false ', function () {
            const exp = false;
            const act = linkedList.length();
            assert.equal(exp, act)
        })

    })

    describe('Unshift method', function () {
        it('Method unshift have one argument and expected return true', function () {
            const exp = true;
            const act = linkedList.unshift(1);
            assert.equal(exp, act);
        })
    })

    describe('toString method', function () {
        it('Method toString have arg/s and expected return false', function () {
            const exp = false;
            const act = linkedList.toString(1, "a");
            assert.equal(exp, act);
        })

        it('Method toString return no String and expected return false', function () {
            const exp = false;
            const act = [];
            assert.equal(exp, act);
        })
        it('Method toString return String and expected return true', function () {
            const exp = "string";
            const act = typeof(linkedList.toString())
            assert.equal(exp, act);
        })
    })

})