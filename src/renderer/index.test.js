import React from 'react';
import { shallow } from 'enzyme';

describe("tests", () => {

    it("passes", () => {
        var app = shallow(<App />);
        expect(app).toNotEqual(null);
    });

});