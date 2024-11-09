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

    // 添加可迭代性
    [Symbol.iterator]() {
        let index = 0;
        let properties = this.properties;

        return {
            next() {
                if (index < properties.length) {
                    return { value: properties[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };

    }
}

let group = Group.from(['a', 'b', 'c']);
for (let value of group) {
    console.log(value); // 输出: a, b, c
}