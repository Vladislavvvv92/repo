const arrayList = {

    length : function(){
        if(arguments.length > 0){
            return false;
        }
        let index = 0;
        for (let i = 0; this[i] !== undefined; i++){
            index = i + 1;
        }
        return index;
    },

    push : function(value){
        if(arguments.length !== 1 || typeof(arguments) == null || typeof(arguments) == undefined){
            return false;
        }
        return (this[this.length()] = value);
    },

    pop : function() {
        if(arguments.length > 0){
            return false;
        }
        let deleted = this[this.length() - 1];
        delete this[this.length() - 1];
        return deleted;
    },

    clear : function(){
        if(arguments.length > 0){
            return false;
        }
        for(let i = this.length(); i > -1; i--){
            delete this[i];
        }
    },

    unshift: function (el) {
        if (arguments.length > 1 || arguments.length < 1) return false;

        for (let i = this.collection.length - 1; i >= 0; i--) {
            this.collection[i + 1] = this.collection[i];
        }
        this.collection[0] = el;
    },

    shift: function () {
        let emptryArr = [];
        if (arguments.length < 0 || arguments.length > 0) return false;
        for (let i = 0; i < this.collection.length - 1; i++) {
            emptryArr[i] = this.collection[i + 1];
        }
        // delete this.collection[this.collection.length - 1];

        this.collection = emptryArr;
    },

    toString : function(){
        if(arguments.length > 0){
            return false;
        }
        let str = "";
        for(let i = 0; i < this.length(); i++){
            str +=this[i] + ", ";
        }
        str = str.substring(0, str.length - 1);
        return str;
    },


    }

const linkedList = {

    length : function(){
        if(arguments.length !== 0){
            return false;
        }
        return this.root.length;
    },

    root : {
        next : null,
        prev : null,
        length : 0,
    },

    createNode : function(el){
        if(arguments.length !== 1){
            return false;
        }
        return {
            el : el ? el : null,
            next : null,
            prev : null,
            index : this.root.length,
        }
    },

    push : function (el) {
        if(arguments.length !== 1){
            return false;
        }
        const newNode = this.createNode(el);
        let tmp = this.root;
        while (tmp.next && (tmp.next !== this.root)){
            tmp.next.prev = tmp;
            tmp = tmp.next;
            newNode.prev = tmp
        }
        tmp.next = newNode;
        this.root.prev = null;
        this.root.length++;
        return true;
    },

    pop: function () {
        if(this.root.length === 0){
            return false;
        }

        if(this.root.length === 1){
            let deleted = this.root.next;
            this.root.next = null;
            this.root.length --;
            return deleted;
        }

        let tmp = this.root;
        while(tmp.next !== null){
            tmp = tmp.next;

            if(tmp.index === (this.root.length - 2) ){
                let deleted = tmp.next;
                tmp.next == null;
                this.root.length --;
                return deleted
            }
        }
    },

    unshift : function (el){
        const newNode = this.createNode(el);

        if(this.root.next == null){
            this.root.next = newNode;
            this.root.length++;
        }else{
            let tmp = this.root.next;
            this.root.next = newNode;
            this.root.next.next = tmp;
            this.root.length++;
        }
        return true;
    },

    shift : function(){
        if(this.root.next = null){
            return false;
        }else{
            const tmp = this.root.next.next;
            this.root.next = tmp;
            this.root.length--;
        }
    },

    toString : function(){
        let str = "";
        let tmp = this.root;
        while(tmp.next !== null){
            tmp = tmp.next;
            str += tmp.el + ", ";
        }
        str = str.substring(0, str.length - 2);
        return str;
    },

    toArrayList : function(){
        let tmp = this.root;
        while(tmp.next !== null){
            tmp = tmp.next;
            arrayList.push(tmp.el);
        }
        return arrayList;
    },

    clear:function(){
        this.root.next = null;
        this.root.prev = null;
        this.root.length = 0;
    },


}
