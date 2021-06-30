const ArrayProcessor = require('../lib/array-processor')
const p = new ArrayProcessor();

describe('ArrayProcessor' , () => {
    test('deve achar o menor e maior em um array ordenado' , () => {
        p.process([1, 2, 3, 4, 5]);
        expect(p.menor).toBe(1);
        expect(p.maior).toBe(5);
    });

    test('deve achar o menor e maior em um array ordenado decrescente' , () => {
        p.process([10, 9, 8, 7, 6]);
        expect(p.menor).toBe(6);
        expect(p.maior).toBe(10);
    });

    test('deve achar o menor e maior em um array desordenado' , () => {
        p.process([10, 9, -8, 70, 68]);
        expect(p.menor).toBe(-8);
        expect(p.maior).toBe(70);
    });

    test('deve lancar excecao para array vazio' , () => {
        expect(() => {
            p.process([]);
        }).toThrow('array vazio');
    });

    test('deve lancar excecao quando eh null' , () => {
        expect(() => {
            p.process(null);
        }).toThrow('tipo invalido');
    });
});