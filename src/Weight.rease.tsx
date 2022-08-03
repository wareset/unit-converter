import 'rease/jsx'
import type { TypeReaseContext } from 'rease'
import { storeGlobal } from 'rease'

import {
  миллиграмм2грамм, грамм2миллиграмм,
  килограмм2грамм, грамм2килограмм,
  центнер2грамм, грамм2центнер,
  тонна2грамм, грамм2тонна,
  карат2грамм, грамм2карат,

  фунт2грамм, грамм2фунт,
  стоун2грамм, грамм2стоун,
  унция2грамм, грамм2унция,
  драхма2грамм, грамм2драхма,
  гран2грамм, грамм2гран,
  кортонна2грамм, грамм2кортонна,
  корхандредвейт2грамм, грамм2корхандредвейт,

  тройскийфунт2грамм, грамм2тройскийфунт,
  тройскаяунция2грамм, грамм2тройскаяунция,
  велдрахма2грамм, грамм2велдрахма,
  скрупул2грамм, грамм2скрупул,
  велгран2грамм, грамм2велгран,

  берковец2грамм, грамм2берковец,
  пуд2грамм, грамм2пуд,
  русфунт2грамм, грамм2русфунт,
  руслот2грамм, грамм2руслот,
  золотник2грамм, грамм2золотник,
  доля2грамм, грамм2доля

} from './utils/weight'

import { createInput } from './utils/tsx.rease'

const $ГРАММ = storeGlobal<number>(1)

const createTitle = (title: string): void => {
  <h2>{title}</h2>
}

export function Weight(
  this: TypeReaseContext
): void {
  createTitle('Международная система')
  createInput(
    'Миллиграмм', '(мг)', $ГРАММ, грамм2миллиграмм, миллиграмм2грамм
  )
  createInput(
    'Карат — 0,2 г', '', $ГРАММ, грамм2карат, карат2грамм
  )
  createInput(
    'Грамм', '(г)', $ГРАММ, (n) => n, (n) => n
  )
  createInput(
    'Килограмм', '(кг)', $ГРАММ, грамм2килограмм, килограмм2грамм
  )
  createInput(
    'Центнер', '(ц)', $ГРАММ, грамм2центнер, центнер2грамм
  )
  createInput(
    'Тонна', '(т)', $ГРАММ, грамм2тонна, тонна2грамм
  )

  createTitle('Американская система')
  createInput(
    'Гран — 1/7000 фунта, или 64,79891 мг', '', $ГРАММ, грамм2гран, гран2грамм
  )
  createInput(
    'Драхма — 1/256 фунта, или 1,7718451953125 г', '', $ГРАММ, грамм2драхма, драхма2грамм
  )
  createInput(
    'Унция — 1/16 фунта, или 28,349523125 г', '', $ГРАММ, грамм2унция, унция2грамм
  )
  createInput(
    'Фунт — 453,59237 г (точное и официальное значение)', '', $ГРАММ, грамм2фунт, фунт2грамм
  )
  createInput(
    'Стоун — 14 фунтов, или 6,35029318 кг', '', $ГРАММ, грамм2стоун, стоун2грамм
  )
  createInput(
    'Короткий хандредвейт = 100 фунтов = 45,359237 кг', '', $ГРАММ, грамм2корхандредвейт, корхандредвейт2грамм
  )
  createInput(
    'Короткая тонна = 2000 фунтов = 0,90718474 т', '', $ГРАММ, грамм2кортонна, кортонна2грамм
  )

  createTitle('Британская аптечная система')
  createInput(
    'Гран = 1/20 скрупула, или 0,06479891 г', '', $ГРАММ, грамм2велгран, велгран2грамм
  )
  createInput(
    'Скрупул = 1/288 тройского фунта, или 1,2959782 г', '', $ГРАММ, грамм2скрупул, скрупул2грамм
  )
  createInput(
    'Драхма = 1/96 тройского фунта, или 3,8879346 г', '', $ГРАММ, грамм2велдрахма, велдрахма2грамм
  )
  createInput(
    'Тройская унция = 1/12 тройского фунта, или 31,1034768 г', '', $ГРАММ, грамм2тройскаяунция, тройскаяунция2грамм
  )
  createInput(
    'Тройский (аптечный) фунт = 373,2417216 г', '', $ГРАММ, грамм2тройскийфунт, тройскийфунт2грамм
  )

  createTitle('Русская система мер')
  createInput(
    'Доля = 1/96 золотника = 44,435 миллиграмма', '', $ГРАММ, грамм2доля, доля2грамм
  )
  createInput(
    'Золотник = 3 лота = 4,26575417 грамма', '', $ГРАММ, грамм2золотник, золотник2грамм
  )
  createInput(
    'Лот = 1/32 фунта', '', $ГРАММ, грамм2руслот, руслот2грамм
  )
  createInput(
    'Фунт = 40 пудов', '', $ГРАММ, грамм2русфунт, русфунт2грамм
  )
  createInput(
    'Пуд = 1/10 берковца = 1280 лотам = 16,3804815 кг', '', $ГРАММ, грамм2пуд, пуд2грамм
  )
  createInput(
    'Берковец = 163,804815 кг', '', $ГРАММ, грамм2берковец, берковец2грамм
  )
}

// import {
//   convertGuk2Celsius as toCelsius,
//   convertCelsius2Guk as fromCelsius
// } from './utils/temperature'

// console.log(300, fromCelsius(300), toCelsius(fromCelsius(300)))
// console.log(290, fromCelsius(290), toCelsius(fromCelsius(290)))
// console.log(220, fromCelsius(220), toCelsius(fromCelsius(220)))
// console.log(110, fromCelsius(110), toCelsius(fromCelsius(110)))
// console.log(30, fromCelsius(30), toCelsius(fromCelsius(30)))
// console.log(0, fromCelsius(0), toCelsius(fromCelsius(0)))
// console.log(-40, fromCelsius(-40), toCelsius(fromCelsius(-40)))
// console.log(-50, fromCelsius(-50), toCelsius(fromCelsius(-50)))
// console.log(-60, fromCelsius(-60), toCelsius(fromCelsius(-60)))
// console.log(-273.15, fromCelsius(-273.15), toCelsius(fromCelsius(-273.15)))
