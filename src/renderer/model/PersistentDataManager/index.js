const Store = window.require('electron-store');

/*
 * Reads and writes to the computer, dirpy-d-doo
 *
 * A word of warning: this had to be tested manually, as it did not play nice 
 * with jest. 
 */
class PersistentDataManager {

    constructor() {
        this.store = new Store();

        this.read = this.read.bind(this);
        this.write = this.write.bind(this);
    }

    /*
     * Reads the given key, and returns its data. 
     */
    read(key) {
        // TODO -> should I abstract these functions? 
        return this.store.get(key);
    }

    /*
     * Write the data to the disk
     */
    write(key, data) {
        this.store.set(key, data);
    }

    /*
     * Everything must burn...
     */
    clear() {
        this.store.clear();
    }

}

export default PersistentDataManager;