function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;
    let k = collection3.length - 1;
    while (i < collection1.length || j < collection2.length || k >= 0) {
        let currentMin: number | undefined;
        let sourceArray = -1;

        if (i < collection1.length) {
            currentMin = collection1[i];
            sourceArray = 1;
        }
        if (j < collection2.length) {
            const val2 = collection2[j];
            if (currentMin === undefined || val2 < currentMin) {
                currentMin = val2;
                sourceArray = 2;
            }
        }
        if (k >= 0) {
            const val3 = collection3[k];
            if (currentMin === undefined || val3 < currentMin) {
                currentMin = val3;
                sourceArray = 3;
            }
        }
        if (currentMin !== undefined) {
            result.push(currentMin);
            
            switch (sourceArray) {
                case 1:
                    i++;
                    break;
                case 2:
                    j++;
                    break;
                case 3:
                    k--;
                    break;
            }
        }
    }
    return result;
}

module.exports = { merge };