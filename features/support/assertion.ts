import * as chai from "chai";

export class Assertion {
    async toBeEq(expected: any, actual: any): Promise<void> {
        await chai.expect(expected).to.be.eq(actual);
    }
}
