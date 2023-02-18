function inputvalue(elementId) {
    const input = document.getElementById(elementId)
    const valueString = input.value
    const value = parseFloat(valueString)

    return value
}