import { HotelType } from "../components/hostel-item/hotel-item";

export const filterMultiFunc = (
    arr: HotelType[],
    keyofElement: keyof HotelType,
    check?: string,
    checkNumber?: number
  ) => {
    let temp;
    if (check && check.length > 0) {
      return temp = arr.filter(i => i[keyofElement] === check)
    }
    if (checkNumber && checkNumber > 0) {
      return temp = arr.filter(i => {
        return i[keyofElement] <= checkNumber
      })
    }
    return arr
  }