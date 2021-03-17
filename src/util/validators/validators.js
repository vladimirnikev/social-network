export const required = (value) => {
    return value ? undefined : 'Error'
}

export const maxLength = (maxLength) => (value) => {
    return value.length > maxLength ? `Must be less, then ${maxLength} symbols` : undefined
}

export const email = (value) => {
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
}