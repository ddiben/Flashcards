import React from 'react';
import { shallow } from 'enzyme';
import Frame from '../../../../renderer/components/structure/Frame';
import * as C from '../../../../renderer/utilities/constants';


describe("Frame", () => {

    it("registers swap function in manager", () => {
        const mockManager = new MockManager();
        const frame = shallow(<Frame manager={mockManager}/>).instance();

        expect(mockManager.swapFunction).toEqual(frame.state.swapActiveWindow);
    });

    it("swaps active window", () => {
        const mockManager = new MockManager();
        const frame = shallow(<Frame manager={mockManager}/>);

        const testWindow = C.EDIT;
        frame.instance().swapActiveWindow(testWindow);

        expect(frame.state().activeWindow).toEqual(C.EDIT);
    });

});

class MockManager {
    constructor() {
        this.swapActiveWindow = null;
    }

    registerSwapFunction(func) {
        this.swapActiveWindow = func;
    }
}