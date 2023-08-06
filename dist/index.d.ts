/**
 * @author matt...
 * @brief format a date
 * @param {*} date
 * @param {*} format
 * @return string : formatted date
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
export declare const querySelector: <T extends Element>(cssSelector: string, type?: (new () => T) | undefined, parent?: HTMLElement | Document) => T;
export declare const querySelectorAll: <T extends Element>(cssSelector: string, type?: (new () => T) | undefined, parent?: Element | Document) => NodeListOf<T>;
export declare const sleep: (delay: number) => Promise<unknown>;
export declare function uuid(): string;
/**
 *
 * @param ul
 */
export declare const removeLi: (ul: HTMLUListElement) => void;
/**
 * @brief remove all cells from row
 * @param row
 */
export declare const removeCells: (row: HTMLTableRowElement) => void;
/**
 * @brief remove all rows from tbody
 * @param tbody
 */
export declare const removeRows: (tbody: HTMLTableSectionElement) => void;
/**
 * @brief remove all options from select
 * @param select
 */
export declare const removeOptions: (select: HTMLSelectElement) => void;
