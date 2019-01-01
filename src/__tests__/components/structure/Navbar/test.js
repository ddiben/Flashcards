import React from 'react';
import 'jest';
import {shallow} from 'enzyme';
import Navbar from '../../../../renderer/components/structure/Navbar';

describe("Navbar", () => {

    it("should swap to home window on 'home-btn' click", () => {
        const mockManager = new MockManager();
        const nav = shallow(<Navbar manager={mockManager}/>);
        
        nav.find('.nav-home-btn').simulate('click');

        expect(mockManager.activeWindow).toEqual('home');
    });

});

class MockManager {
    constructor() {
        this.activeWindow = 'not set';

        this.launchHomeWindow = this.launchHomeWindow.bind(this);
    }

    launchHomeWindow() {
        this.activeWindow = 'home';
    }
}