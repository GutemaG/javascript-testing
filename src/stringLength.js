const stringLength = str => {
    if(str.length > 1 && str.length < 10){
        return str.length
    }
    else {
        throw new Error("Length of string should be greater than 1 and less than 10")
    }
}

module.exports = stringLength;