class Group {
    properties = [];

    add(value) {
        if (!this.has(value)) {
            this.properties.push(value);
        }
    }

    delete(value) {
        this.properties = this.properties.filter(n => n !== value);
    }

    has(value) {
        return this.properties.includes(value);
    }

    static from(mix) {
        let group = new Group;
        for (let value of mix) {
            group.add(value);
        }
        return group;
    }
}

let group = Group.from([1, 2, 1]);
console.log(group);
console.log(group.has(1));
group.delete(1);
console.log(group);