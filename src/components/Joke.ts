import {Point} from "./Point";

/**
 * An abstract base class for the customer entity in our application.
 *
 * Notice how TypeDoc shows the inheritance hierarchy for our class.
 *
 */
export default class Joke {
    constructor() {

    }

    /**
     * This is a test function for jsdoc
     */
    test(){
        console.log("This is a test!");
    }

    /**
     * Retrieves a user by email.
     * @async
     * @method
     * @param {number} id - User email
     * @returns {string} User object
     */
    getUserByID(id: number): string {
        return "Test";
    }

    /**
     *
     * @param {Point} point
     * @returns A {@link Point} containing the parameter.
     */
    printX(point: Point) : void {
        console.log(point.x);
    }
}

/**
 * This matches dynamically shard_id of the messages and propagates it also to SQS.
 * Use it if you are using shard specific SQS queues.
 *
 * Good idea would be to use it always together with city_id (or other shard identifier) that could be used for routing.
 */
export type MqFilterShardId = {is_shard_id_match: true};
