import bb from '../tensor'
import jest from '../../test'

export default jest.suite(function () {

    console.log('\n\n-------- Complex Suite --------\n\n')

    const A = bb.tensor([
        ['10 + 2i'],
        ['40 + 3i'],
        ['50 + 1i']], bb.ComplexInt32)

    const B = bb.tensor([
        ["2+2i", "7+9i", "3+5i", "5+8i", "3+4i", "5+6i", "0+7i", "5+9i", "6+0i", "1+6i", "7+9i", "5+7i", "1+9i", "6+6i", "0+8i", "6+8i", "1+4i", "1+0i", "2+1i", "6+9i", "0+6i", "3+4i", "8+6i", "1+0i", "0+2i", "3+7i", "0+7i", "9+6i", "3+5i", "2+4i", "1+7i", "7+8i", "6+2i", "6+8i", "4+7i", "9+1i", "8+6i", "5+2i", "1+2i", "5+2i", "8+7i", "7+0i"],
        ["6+4i", "8+0i", "4+0i", "8+7i", "2+0i", "9+8i", "8+7i", "3+7i", "8+6i", "5+0i", "2+1i", "7+5i", "8+6i", "7+4i", "7+7i", "4+8i", "6+6i", "0+3i", "6+1i", "2+6i", "1+6i", "2+8i", "1+9i", "1+3i", "2+2i", "1+6i", "6+0i", "6+6i", "0+2i", "8+7i", "8+9i", "4+6i", "7+4i", "3+2i", "7+1i", "7+4i", "7+6i", "5+3i", "4+5i", "9+1i", "5+2i", "3+0i"]], bb.ComplexFloat32)

    const C = bb.tensor(["0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i", "0+1i"], bb.ComplexInt32)

    const D = bb.tensor([
        ['0', '1', '2', '3', '4'],
        ['0', '1', '2', '3', '4'],
        ['0', '1', '2', '3', '4'],
        ['0', '1', '2', '3', '4'],
        ['0', '1', '2', '3', '4']], bb.Int32)

    const E = bb.tensor(['1 + 8i'], bb.ComplexInt32)
    const F = bb.tensor([['0'], ['1'], ['2'], ['3'], ['4']], bb.Int32)
    const G = bb.tensor([
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]], bb.Int32)

    const H = bb.tensor([["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]], bb.Int32)
    const I = bb.tensor([['1 + 1i'], ['4 + 6i'], ['2 - 5i']], bb.ComplexInt32)
    const J = bb.tensor([['7 - 1i'], ['2 + 1i'], ['5 - 9i']], bb.ComplexInt32)

    const K = bb.tensor([
        ['5. + 3i', '4. + 2i', '4. + 8i', '9. + 7i'],
        ['4. + 7i', '9. + 2i', '4. + 4i', '4. + 8i'],
        ['3. + 1i', '4. + 3i', '5. + 1i', '7. + 7i'],
        ['4. + 5i', '7. + 3i', '3. + 5i', '7. + 3i']], bb.ComplexInt32)

    const L = bb.tensor([
        ['6 + 1i', '4 + 0i', '4 + 4i', '3 + 1i'],
        ['1 + 5i', '0 + 1i', '2 + 4i', '3 + 9i'],
        ['7 + 8i', '5 + 4i', '3 + 6i', '7 + 9i'],
        ['7 + 1i', '2 + 3i', '9 + 2i', '2 + 2i']], bb.ComplexInt32)

    // const M = bb.zeros([100, 100], bb.ComplexInt32).assign(bb.tensor(['1 + i'], bb.ComplexInt32))
    const N = bb.tensor([['1. + 0i', '2. + 0i', '4. + 1i', '2. + 3i'], ['4. + 3i', '4. + 3i', '0. + 2i', '4. + 1i'], ['0. + 4i', '1. + 0i', '0. + 1i', '1. + 4i'], ['0. + 1i', '1. + 4i', '0. + 2i', '2. + 0i']], bb.ComplexInt32)
    const O = bb.tensor([['1. + 3i', '0. + 4i'], ['2. + 1i', '3. + 3i']], bb.ComplexInt32)
    const P = bb.tensor([["0.+4i", "0.+4i", "2.+2i", "0.+1i", "3.+4i"], ["1.+2i", "1.+3i", "4.+0i", "2.+4i", "0.+3i"], ["3.+3i", "4.+1i", "3.+0i", "3.+3i", "0.+1i"], ["0.+3i", "3.+3i", "0.+1i", "1.+4i", "2.+1i"], ["2.+2i", "4.+4i", "3.+3i", "3.+4i", "1.+1i"]], bb.ComplexInt32)

    this.expect(bb.min(A, bb.NULL, bb.zeros([1, 1], bb.ComplexInt32), { axes: [0, 1] })).toEqual([["10+2i"]])
    this.expect(bb.max(A, bb.NULL, bb.zeros([1, 1], bb.ComplexInt32), { axes: [0, 1] })).toEqual([["40+3i"]])
    this.expect(bb.mean(A, bb.NULL, bb.zeros([1, 1], bb.ComplexInt32), { axes: [0, 1] })).toEqual([["33+2i"]])
    this.expect(bb.sum(A, bb.NULL, bb.zeros([1, 1], bb.ComplexInt32), { axes: [0, 1] })).toEqual([['100+6i']])
    this.expect(bb.norm(A, bb.NULL, bb.zeros([1, 1], bb.Float32), { axes: [0, 1] })).toEqual([["64.91532897949219"]])
    this.expect(bb.add(B, B, bb.zerosLike(B))).toEqual(bb.mult(B, bb.tensor([2], bb.ComplexInt32), bb.zerosLike(B)))
    this.expect(bb.sub(B, B, bb.onesLike(B))).toEqual(bb.zerosLike(B))
    this.expect(bb.div(B, B, bb.zerosLike(B))).toEqual([["1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i"], ["1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i", "1+0i"]])
    this.expect(bb.add(A, A, bb.zerosLike(A))).toEqual(bb.mult(A, bb.tensor([2], bb.ComplexInt32), bb.zerosLike(A)))
    this.expect(bb.sub(A, A, bb.onesLike(A))).toEqual(bb.mult(A, bb.tensor([0], bb.ComplexInt32), bb.onesLike(A)))
    this.expect(bb.sub(B, C, bb.zerosLike(B))).toEqual(bb.sub(B, bb.tensor(['0 + 1i'], bb.ComplexFloat32), bb.zerosLike(B)))
    this.expect(bb.mult(A, E, bb.zerosLike(A))).toEqual([["-6+82i"], ["16+323i"], ["42+401i"]])
    this.expect(bb.add(D, F.T(), bb.zerosLike(D))).toEqual([['0', '2', '4', '6', '8'], ['0', '2', '4', '6', '8'], ['0', '2', '4', '6', '8'], ['0', '2', '4', '6', '8'], ['0', '2', '4', '6', '8']])
    this.expect(bb.add(D, F, bb.zerosLike(D))).toEqual([['0', '1', '2', '3', '4'], ['1', '2', '3', '4', '5'], ['2', '3', '4', '5', '6'], ['3', '4', '5', '6', '7'], ['4', '5', '6', '7', '8']])
    this.expect(bb.add(G, H, bb.zerosLike(G))).toEqual([["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"], ["0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38"]])
    this.expect(bb.add(G, H.T(), bb.zerosLike(G))).toEqual([["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"], ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"], ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"], ["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ["5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"], ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25"], ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26"], ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"], ["9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"], ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"], ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"], ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"], ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32"], ["14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33"], ["15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"], ["16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35"], ["17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"], ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37"], ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38"]])
    this.expect(bb.cross(I.T(), J.T(), bb.zeros([3, 1], bb.ComplexFloat32))).toEqual([["65+2i"], ["-5-33i"], ["-33-35i"]])
    this.expect(K.matMult({ with: L })).toEqual([["41 + 191i", "3 + 113i", "39 + 181i", "-34 + 180i"], ["32 + 213i", "2 + 101i", "6 + 200i", "-2 + 200i"], ["75 + 135i", "23 + 68i", "62 + 148i", "19 + 131i"], ["38 + 159i", "13 + 91i", "34 + 144i", "-15 + 173i"]])
    this.expect(M.matMult({ with: M })).toEqual(bb.ones({ shape: [100, 100] }).assign({ with: ['200i'] }))
    this.expect(O.inverse()).toEqual([["0.30000001192092896 - 0.8999999761581421i", "-0.800000011920929 + 0.4000000059604645i"], ["0.5i", "0.5 - 0.5i"]])
    this.expect(N.inverse()).toEqual([["0.0618274100124836 + 0.12558375298976898i", "0.2156345248222351 + 0.17888325452804565i", "-0.2829441726207733 - 0.14121827483177185i", "-0.35624364018440247 - 0.04741116613149643i"], ["0.0063959392718970776 - 0.09045685082674026i", "0.1947208195924759 - 0.1539086252450943i", "0.03969543054699898 + 0.29573604464530945i", "-0.03685279190540314 + 0.06406091153621674i"], ["0.15583756566047668 + 0.08172588795423508i", "-0.21116751432418823 + 0.24365481734275818i", "-0.11218274384737015 - 0.2705583870410919i", "0.02588832564651966 - 0.3375634551048279i"], ["-0.039593908935785294 - 0.15431472659111023i", "-0.07208121567964554 - 0.20913705229759216i", "0.2304568588733673 + 0.02639593929052353i", "0.28527918457984924 + 0.19390863180160522i"]])
    this.expect(P.inverse()).toEqual([["0.023028014227747917 - 0.08704032748937607i", "-0.1014542281627655 + 0.028265008702874184i", "0.22375236451625824 - 0.21050089597702026i", "-0.16637200117111206 + 0.0725223571062088i", "0.0666307657957077 + 0.20431560277938843i"], ["-0.010000413283705711 + 0.027437880635261536i", "-0.2931888699531555 + 0.07762960344552994i", "0.18492411077022552 - 0.08047686517238617i", "0.13059282302856445 + 0.2999614179134369i", "0.1263776272535324 - 0.20456275343894958i"], ["0.035041287541389465 - 0.0724048987030983i", "0.17941303551197052 + 0.09125683456659317i", "-0.10447283834218979 + 0.11167241632938385i", "-0.08355795592069626 - 0.04628606140613556i", "-0.034528572112321854 - 0.1460578888654709i"], ["-0.04100386053323746 + 0.11433622986078262i", "0.16529399156570435 - 0.23608864843845367i", "-0.13789406418800354 + 0.16201353073120117i", "-0.09026080369949341 - 0.2903452515602112i", "0.029125187546014786 + 0.10484481602907181i"], ["0.08950340747833252 - 0.0981309786438942i", "0.1408514827489853 + 0.10284423828125i", "-0.31014662981033325 - 0.09020819514989853i", "0.23178651928901672 - 0.14469356834888458i", "-0.0847020223736763 - 0.033725906163454056i"]])

    console.log('\n\n-------- End Complex Suite --------\n\n')
})
