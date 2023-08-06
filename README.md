# mirabon-utils
## Some Useful Functions

### version 0.1.3

```javascript
/**
 * @author matt
 * @brief format a date
 * @param date
 * @param format
 * @returns string : formatted date
 *  a/A: short/long weekday
 *  b/B : short/long month name
 *  d : day of month
 *  H : hour
 *  m : month
 *  M : minute
 *  S : second
 *  Y : year
 */
export const dateFormat = (date: Date, format: string): string => {};

/**
 * @author matt
 * @brief return the first element that matches this specified selector
 * @param cssSelector 
 * @param type 
 * @param parent 
 * @returns Element
 */
export const querySelector = <T extends Element>(cssSelector: string, type?: new () => T, parent: HTMLElement | Document = document) => {};

/**
 * @author matt
 * @brief return a list of elements that matches this specified selector
 * @param cssSelector 
 * @param type 
 * @param parent 
 * @returns NodeListOf
 */
export const querySelectorAll = <T extends Element>(cssSelector: string, type?: new () => T, parent: Element | Document = document) => {};

/**
 * @author matt
 * @brief wait delay seconds
 * @param delay
 * @return promise
 */
export const sleep = (delay: number) => {};

/**
 * @author matt
 * @brief remove all li from ul
 * @param ul 
 * @returns void
 */
export const removeLi = (ul: HTMLUListElement) => {};

/**
 * @author matt
 * @brief remove all cells from row
 * @param row
 * @returns void
 */
export const removeCells = (row: HTMLTableRowElement) => {};

/**
 * @author matt
 * @brief remove all rows from tbody
 * @param tbody
 * @returns void
 */
export const removeRows = (tbody: HTMLTableSectionElement) => {};

/**
 * @author matt
 * @brief remove all options from select
 * @param select
 * @returns void
 */
export const removeOptions = (select: HTMLSelectElement) => {};
```
