import bb from '..'
import jest from '../../test'

export default jest.suite(function () {

    console.log('\n\n-------- Mismatch Suite --------\n\n')

    const A = bb.tensor({
        data: [
            ['10 + 2i'],
            ['40 + 3i'],
            ['50 + i']
        ]
    })

    const D = bb.tensor({
        data: [
            ['0', '1', '2', '3'],
            ['0', '1', '2', '3'],
            ['0', '1', '2', '3'],
            ['0', '1', '2', '3'],
        ],

    })

    const K = bb.tensor({
        data: [
            ['5. + 3i', '4. + 2i', '4. + 8i', '9. + 7i'],
            ['4. + 7i', '9. + 2i', '4. + 4i', '4. + 8i'],
            ['3. + 1i', '4. + 3i', '5. + 1i', '7. + 7i'],
            ['4. + 5i', '7. + 3i', '3. + 5i', '7. + 3i']
        ],

    })






    this.expect(A.multiply({ with: 10 })).toEqual([['100 + 20i'], ['400 + 30i'], ['500 + 10i']])
    this.expect(A.max()).toEqual('50+1i')
    this.expect(A.mean()).toEqual('33.33333206176758+2i')
    this.expect(A.sum()).toEqual('100+6i')
    this.expect(A.norm()).toEqual('64.91532897949219')
    this.expect(B.min()).toEqual('7i')
    this.expect(B.max()).toEqual('9+6i')
    this.expect(B.mean()).toEqual('4.464285850524902+4.690476417541504i')
    this.expect(B.sum()).toEqual('375+394i')
    this.expect(B.norm()).toEqual('69.73521423339844')
    this.expect(B.add({ with: B })).toEqual(B.multiply({ with: bb.tensor({ data: [2], type: bb.ComplexFloat32 }) }))
    this.expect(B.subtract({ with: B })).toEqual(B.multiply({ with: bb.tensor({ data: [0], type: bb.ComplexFloat32 }) }))
    this.expect(B.divide({ with: B })).toEqual([["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]])
    this.expect(B.subtract({ with: C })).toEqual(B.subtract({ with: bb.tensor({ data: [' 0 + 1i'], }) }))
    this.expect(A.multiply({ with: E })).toEqual([["-6+82i"], ["16+323i"], ["42+401i"]])
    this.expect(A.add({ with: E })).toEqual([["11+10i"], ["41+11i"], ["51+9i"]])
    this.expect(D.add({ with: F.T() })).toEqual([['0', '2', '4', '6', '8'], ['0', '2', '4', '6', '8'], ['0', '2', '4', '6', '8'], ['0', '2', '4', '6', '8'], ['0', '2', '4', '6', '8']])
    this.expect(D.add({ with: F })).toEqual([['0', '1', '2', '3', '4'], ['1', '2', '3', '4', '5'], ['2', '3', '4', '5', '6'], ['3', '4', '5', '6', '7'], ['4', '5', '6', '7', '8']])
    this.expect(G.add({ with: H })).toEqual([["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"]])
    this.expect(G.add({ with: H.T() })).toEqual([["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"], ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"], ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"], ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"], ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"], ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"], ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"], ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"], ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"], ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32"], ["14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33"], ["15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"], ["16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"], ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"], ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37"], ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38"]])
    this.expect(I.T().cross({ with: J.T() })).toEqual([["65+2i"], ["-5-33i"], ["-33-35i"]])
    this.expect(K.matMult({ with: L })).toEqual([["41+191i", "3+113i", "39+181i", "-34+180i"], ["32+213i", "2+101i", "6+200i", "-2+200i"], ["75+135i", "23+68i", "62+148i", "19+131i"], ["38+159i", "13+91i", "34+144i", "-15+173i"]])
    this.expect(M.matMult({ with: M })).toEqual(bb.ones({ shape: [100, 100], type: bb.ComplexFloat32 }).assign({ with: bb.tensor({ data: ['200i'], type: bb.ComplexFloat32 }) }))
    this.expect(O.inverse()).toEqual([["0.30000001192092896-0.8999999761581421i", "-0.800000011920929+0.4000000059604645i"], ["0.5i", "0.5-0.5i"]])

    console.log('\n\n-------- End Complex Suite --------\n\n')
})