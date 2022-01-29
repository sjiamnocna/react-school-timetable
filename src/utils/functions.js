export const timeDifference = (begin, end) => {
    // if end is later than beginning, revert sign
    const sign = end > begin ? 1 : -1
    if (sign < 0){
        // switch values and continue
        const tmp = end
        end = begin
        begin = tmp
    }
    // begin/end hours + minutes
    const ahr = Number(String(begin).slice(0, -2)),
        amin = Number(String(begin).slice(-2)),
        bhr = Number(String(end).slice(0, -2)),
        bmin = Number(String(end).slice(-2))
    
    if (bhr === ahr){
        // diff in minutes
        return bmin - amin
    }
    
    // rest of minutes to end of hour plus difference of hours times 60min
    return ((60 - amin) + ( bhr - ( ahr + 1 ) ) * 60 + bmin) * sign
}

export const timeReadableFormat = (time) => {
    time = String(time)
    // last two characters
    let m = time.slice(-2)
    // characters until the one before the last
    let h = time.slice(0, -2)

    return h + ':' + m
}

export const overlapRows = (rows) => {
    const left = []
    rows.sort((first, second) => first.time.begin > second.time.begin)
    const res = rows.filter((item, i, array) => {
        if (i !== 0){
            // cover [-1] error
            let prev = i - 1
            // go back in items and skip items marked as overlapd
            for(; prev > 0 && array[prev] && array[prev].overlap === true; prev--);

            // if end of the item is greater than current item beginning, it's 
            if (array[prev].time.end > item.time.begin){
                array[i].overlap = true
                return true
            }
        }

        left.push(item)
        return false
    })

    return res.length > 0 ? [left, res] : null
}