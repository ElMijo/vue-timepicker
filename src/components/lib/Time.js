const format = (type) => {
    return type === Time.FORMAT_12
        ? /^(0?[1-9]|1[0-2])(:[0-5]{1}\d{1}){1,2} (AM|PM|am|pm){1}$/
        : /^(2?[0-3]{1}|[01]\d{1})(:[0-5]{1}\d{1}){1,2}$/
    ;
}

/**
 * The time interface.
 * @type {TimeInterface}
 */
export class TimeInterface
{
    /**
     * The format type for 12 hours
     * @type {String}
     */
    static FORMAT_12 = '12-H';

    /**
     * The format type for 24 hours
     * @type {String}
     */
    static FORMAT_24 = '24-H';
}

/**
 * The time instance.
 *
 * @type {[Time, TimeInterface]}
 */
export class Time extends TimeInterface
{
    /**
     * Validate time format.
     *
     * @param  {String}  val Value to validate.
     * @param  {String}  [type=TimeInterface.FORMAT_24] Type format to validate.
     *
     * @return {Boolean}
     */
    isValidFormat(val, type = TimeInterface.FORMAT_24) {
        if ([TimeInterface.FORMAT_24, TimeInterface.FORMAT_12].indexOf(type) === -1) {
            throw new Error(`Invalid format type [${type}]`);
        }

        return format(type).test(val)
    }

    parseTime(val) {
        let time, abbr;
        if (this.isValidFormat(val, TimeInterface.FORMAT_12)) {
            [ time, abbr ] = val.split(' ');
        } else if (this.isValidFormat(val)) {
            time = val;
        }

        if (time === undefined) {
            throw new Error(`Invalid time format [${val}]`);
        }

        return time.replace(':', '').split('').map(val => parseInt(val)).concat(abbr?[abbr.toUpperCase()]:[]);
    }
}
