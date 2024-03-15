export const getTransformedTime = (dateValue) => {
    let transformedTime = new Date(dateValue).toLocaleTimeString('en-US', {
        timezone: 'Europe/Moscow',
        hour12: false,
    })
    if (transformedTime === 'Invalid Date') return null
    return transformedTime
}

export const getTransformedDate = (dateValue) => {
    let transformedDate = new Date(dateValue).toLocaleString('en-US', {
        timezone: 'Europe/Moscow',
        hour12: false,
    })
    if (transformedDate === 'Invalid Date') return null
    return transformedDate
}
