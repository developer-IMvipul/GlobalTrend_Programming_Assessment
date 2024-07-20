//Implement a simple HashMap class with put, get, and remove methods.

class HashMap {
    constructor() {
        this.size = 20;
        this.buckets = new Array(this.size).fill(null).map(() => []);
    }

    _hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    put(key, value) {
        const hash = this._hash(key);
        const bucket = this.buckets[hash];

        for (let i = 0; i < bucket.length; i++) {
            const [k, v] = bucket[i];
            if (k === key) {
                bucket[i] = [key, value];
                return;
            }
        }

        bucket.push([key, value]);
    }

    get(key) {
        const hash = this._hash(key);
        const bucket = this.buckets[hash];

        for (let [k, v] of bucket) {
            if (k === key) {
                return v;
            }
        }

        return undefined; 
    }

    remove(key) {
        const hash = this._hash(key);
        const bucket = this.buckets[hash];

        for (let i = 0; i < bucket.length; i++) {
            const [k, v] = bucket[i];
            if (k === key) {
                bucket.splice(i, 1);
                return true;
            }
        }

        return false;
    }
}

const map = new HashMap();
map.put('key1', 'value1');
console.log(map.get('key1'));
map.remove('key1');
console.log(map.get('key1'));

