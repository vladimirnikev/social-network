export const required = (value) => {
    return value ? undefined : 'Value is empty'
}

export const maxLength = (maxLength) => (value) => {
    return value.length > maxLength ? `Must be less, then ${maxLength} symbols` : undefined
}

export const email = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
}

export const link = (value) => {
    return (value && /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i.test(value)) || !value
        ? undefined
        : 'Invalid link'
}