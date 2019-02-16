// Factory function to create Enum object from variant names
const Enum = (...names) => {
    if (names.length === 0) throw TypeError("No variants given");
    let variants = new Set(names);

    const symNames = Symbol("names");

    let obj = {};
    obj[symNames] = {};

    for (let variant of variants) {
        const sym = Symbol(variant);
        obj[variant] = sym;
        obj[symNames][sym] = variant;
    }


    obj.length = variants.size;

    obj.toString = (variant) => {
        if (variant === undefined) {
            let vars = Array.from(variants.values()).toString();
            return `Enum(${vars})`;
        } else {
            return obj[symNames][variant];
        }

    }

    return Object.freeze(obj);
};

module.exports = Enum;