/**
 * Silicon Forest Map
 * Copyright 2017-2019 Todd Brochu
 */
/*jslint browser: true, devel: true, plusplus: true*/
/*global google, Promise*/

function getUsersLocation(callback) {
	const promise = new Promise((resolve, reject) =>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                resolve([position.coords.latitude, position.coords.longitude]);
            });
        } else {
            reject('Unknown location');
        }
    });

    return promise;
}