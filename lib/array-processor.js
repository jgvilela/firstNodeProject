class ArrayProcessor {

    validate(arr) {
        if (arr == null)
            throw 'tipo invalido';

        if (arr.length == 0)
            throw 'array vazio';
    }

    process(arr) {
        this.validate(arr);

        this.menor = Number.MAX_SAFE_INTEGER;
        this.maior = Number.MIN_SAFE_INTEGER;

        for (let num of arr) {
            if (num < this.menor)
                this.menor = num;

            if (num > this.maior)
                this.maior = num;
        }
    }
}

module.exports = ArrayProcessor;