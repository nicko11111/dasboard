import { describe, test, expect } from 'vitest'
import { dateToTime } from '@/assets/helpers'

describe('dateToTime', () => {
  test('return correct format', () => {
    const result = dateToTime('02/01/2025')
    expect(result).toBe('1 de febrero de 2025')
  })

  test('incorrect date', () => {
    const result = dateToTime('fecha-invalida')
    expect(result).toBe('Invalid Date')
  })

  test('test limit date', () => {
    const result = dateToTime('01/01/1970')
    expect(result).toBe('1 de enero de 1970')
  })
})
