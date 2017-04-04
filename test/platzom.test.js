const platzom = require('..').default

test('Si la palabra termina en "ar", se le quitan esos dos caracteres', function () {
  expect(platzom('programar')).toBe('program')
})

test('Si la palabra inicia con Z, se le añade "pe" al final', function () {
  expect(platzom('zorro')).toBe('zorrope')
})

test('Si cumple con más de una de las condiciones, aplicarlas todas', function () {
  expect(platzom('zarpar')).toBe('zarppe')
})

test('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio', function () {
  expect(platzom('abecedario')).toBe('abece-dario')
})

test('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function () {
  expect(platzom('sometemos')).toBe('SoMeTeMoS')
})
