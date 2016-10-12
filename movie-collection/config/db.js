
/*
-
- A file that creates a unique id for every shoe
  And emulates a database .
-
-
-
*/

"use strict";

//Include crypto to generate the shoe id
var crypto = require('crypto');

module.exports = function() {
    return {
        shoeList : [],
        /*
         * Save the shoe inside the "db".
         */
        save(shoe) {
            shoe.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
            this.shoeList.push(shoe);
            return 1;
        },
        /*
         * Retrieve a shoe with a given id or return all the shoes if the id is undefined.
         */
        find(id) {
            if(id) {
                return this.shoeList.find(element => {
                        return element.id === id;
                    });
            }else {
                return this.shoeList;
            }
        },
        /*
         * Delete a shoe with the given id.
         */
        remove(id) {
            var found = 0;
            this.shoeList = this.shoeList.filter(element => {
                    if(element.id === id) {
                        found = 1;
                    }else {
                        return element.id !== id;
                    }
                });
            return found;
        },
        /*
         * Update a shoe with the given id
         */
        update(id, shoe) {
            var shoeIndex = this.shoeList.findIndex(element => {
                return element.id === id;
            });
            if(shoeIndex !== -1) {
                this.shoeList[shoeIndex].size = shoe.size;
                this.shoeList[shoeIndex].model = shoe.model;
                return 1;
            }else {
                return 0;
            }
        }
    }
};
