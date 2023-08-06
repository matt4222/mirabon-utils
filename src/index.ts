const months: string[] =
    [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

const longMonths: string[] =
    [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

const days: string[] =
    [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];

const longDays: string[] =
    [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

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
export const dateFormat = (date: Date, format: string): string =>
{
    let out: string = "";
    for (let i = 0; i < format.length; i++)
    {
        switch (format[i])
        {
            case 'a':
                out += days[date.getDay()];
                break;
            case 'A':
                out += longDays[date.getDay()];
                break;
            case 'b':
                out += months[date.getMonth()];
                break;
            case 'B':
                out += longMonths[date.getMonth()];
                break;
            case "d":
                let day = date.getDate();
                out += day < 10 ? "0" + day : day;
                break;
            case "H":
                let hours = date.getHours();
                out += hours < 10 ? "0" + hours : hours;
                break;
            case "m":
                let month = date.getMonth() + 1;
                out += month < 10 ? "0" + month : month;
                break;
            case "M":
                let minutes = date.getMinutes();
                out += minutes < 10 ? "0" + minutes : minutes;
                break;
            case "S":
                let seconds = date.getSeconds();
                out += seconds < 10 ? "0" + seconds : seconds;
                break;
            case "Y":
                out += date.getFullYear();
                break;
            default:
                out += format[i];
        }
    }

    return out;
};


export const querySelector = <T extends Element>(
    cssSelector: string,
    type?: new () => T,
    parent: HTMLElement | Document = document
) =>
{
    const elt = parent.querySelector(cssSelector);
    if (elt === null)
    {
        throw new Error(`Cannot find element with selector: ${cssSelector}`);
    }
    if (type && !(elt instanceof type))
    {
        throw new Error(
            `Cannot find element of type ${type} with selector: ${cssSelector}`
        );
    }
    return elt as T;
};

export const querySelectorAll = <T extends Element>(
    cssSelector: string,
    type?: new () => T,
    parent: Element | Document = document
) =>
{
    const element = parent.querySelectorAll(cssSelector);
    if (element === null)
    {
        throw new Error(`Cannot find element with selector: ${cssSelector}`);
    }

    if (type && !(element[0] instanceof type))
    {
        throw new Error(
            `Cannot find element of type ${type} with selector: ${cssSelector}`
        );
    }

    return element as NodeListOf<T>;
};

export const sleep = (delay: number) =>
{
    return new Promise((resolve) =>
    {
        setTimeout(resolve, delay);
    });
};

export function uuid()
{
    let dt = new Date().getTime();
    let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r.toString() : (r & 0x3 | 0x8).toString(16));
    });

    return uuid;
}

/**
 * 
 * @param ul 
 */
export const removeLi = (ul: HTMLUListElement) =>
{
    const len = ul.childNodes.length - 1;
    for (let i = len; i >= 0; i -= 1)
    {
        ul.childNodes[i].remove();
    }
};

/**
 * @brief remove all cells from row
 * @param row 
 */
export const removeCells = (row: HTMLTableRowElement) =>
{
    const len = row.cells.length - 1;
    for (let i = len; i >= 0; i -= 1)
    {
        row.cells[i].remove();
    }
};

/**
 * @brief remove all rows from tbody
 * @param tbody 
 */
export const removeRows = (tbody: HTMLTableSectionElement) =>
{
    const len = tbody.rows.length - 1;
    for (let i = len; i >= 0; i -= 1)
    {
        const row = tbody.rows[i];
        removeCells(row);
        row.remove();
    }
};

/**
 * @brief remove all options from select
 * @param select 
 */
export const removeOptions = (select: HTMLSelectElement) =>
{
    const len = select.options.length - 1;
    for (let i = len; i >= 0; i -= 1)
    {
        select.remove(i);
    }
};