class StringBuilder {
    #value;
    constructor(value) {
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }

    padStart(padding) {
        this.#value = `${padding}${this.#value}`;
    }

    padEnd(padding) {
        this.#value = `${this.#value}${padding}`;
    }

    padBoth(padding) {
        this.#value = `${padding}${this.#value}${padding}`;
    }
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="
