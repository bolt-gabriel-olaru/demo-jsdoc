/** Class representing a point. */
class Point {
    /** The x coordinate */
    public x: number
    /** The x coordinate */
    public y: number


    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }



    /**
     * Get the x value.
     */
    getX() {
        return this.x
    }


    /**
     * Get the y value.
     * @param {String} str - The string containing two comma-separated numbers.
     */
    getY() {
        return this.y
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {String} str - The string containing two comma-separated numbers.
     */
    static fromString(str: string): Point {
        const args = str.split(',').map(arg => +arg)
        return new Point(args[0], args[1])
    }

    /**
     * TestDEmo
     * @param {String} str - test
     * @param {Number} a - something
     */
    static testDemo(str: string, a: number): Point {
        const args = str.split(',').map(arg => +arg)
        return new Point(args[0], args[1])
    }

    /**
     * TestDEmo
     * @param {String} name - test
     * @param {Number} role - something
     */
    static testRadu(name: string, role: number): boolean {
        return true;
    }
}