/**
 * @author matt
 * @brief format a date
 * @param {*} date
 * @param {*} format
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
export declare const dateFormat: (date: Date, format: string) => string;
/**
 * @author matt
 * @brief return the name of the day number
 * @param i
 * @returns
 */
export declare const getDay: (i: number) => string;
/**
 * @author matt
 * @brief return the name of the month number
 * @param i
 * @returns
 */
export declare const getMonth: (i: number) => string;
/**
 * @author matt
 * @brief return the first element that matches this specified selector
 * @param cssSelector
 * @param type
 * @param parent
 * @returns Element
 */
export declare const querySelector: <T extends Element>(cssSelector: string, type?: (new () => T) | undefined, parent?: HTMLElement | Document) => T;
/**
 * @author matt
 * @brief return a list of elements that matches this specified selector
 * @param cssSelector
 * @param type
 * @param parent
 * @returns NodeListOf
 */
export declare const querySelectorAll: <T extends Element>(cssSelector: string, type?: (new () => T) | undefined, parent?: Element | Document) => NodeListOf<T>;
/**
 * @author matt
 * @brief wait delay seconds
 * @param delay
 * @return promise
 */
export declare const sleep: (delay: number) => Promise<unknown>;
export declare function uuid(): string;
/**
 * @author matt
 * @brief remove all li from ul
 * @param ul
 * @returns void
 */
export declare const removeLi: (ul: HTMLUListElement) => void;
/**
 * @author matt
 * @brief remove all cells from row
 * @param row
 * @returns void
 */
export declare const removeCells: (row: HTMLTableRowElement) => void;
/**
 * @author matt
 * @brief remove all rows from tbody
 * @param tbody
 * @returns void
 */
export declare const removeRows: (tbody: HTMLTableSectionElement) => void;
/**
 * @author matt
 * @brief remove all options from select
 * @param select
 * @returns void
 */
export declare const removeOptions: (select: HTMLSelectElement) => void;
