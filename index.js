// Your code here
function mapToNegativize(sourceArray) {
    return sourceArray.map( function(int) {
        return int * -1;
    });
}

function mapToNoChange(sourceArray) {
    return sourceArray
}

function mapToDouble(sourceArray) {
    return sourceArray.map( function(int) {
        return int * 2;
    });
}

function mapToSquare(sourceArray) {
    return sourceArray.map( function(int) {
        return int ** 2;
    });
}

function reduceToTotal(sourceArray, startingPoint=0) {
    return sourceArray.reduce( function(total, int) {
        return int + total;
    }, startingPoint);
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce( function(total, int) {
        return !!int;
    }, false);
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce( function(total, int) {
        if (int === true) {
            return true;
        } else {
            if (!total) {
                return false;
            }
        }
    }, false);
}