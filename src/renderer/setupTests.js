import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/*
 * Setting up testing environment
 */

// configure adapter for enzyme
configure({ adapter: new Adapter() });