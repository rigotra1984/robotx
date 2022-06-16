import {buildHeaderOptions, requestUrl} from "../utils/request";

export async function getAllLoadsService() {
    return requestUrl( '/load', await buildHeaderOptions(null, {
        method: 'GET',
    }));
}

export async function getAllLoadByIdService(id) {
    return requestUrl( `/load/${id}`, await buildHeaderOptions(null, {
        method: 'GET',
    }));
}

export async function createLoadService(load) {
    return requestUrl( '/load', await buildHeaderOptions(null, {
        method: 'POST',
        body: JSON.stringify(load),
    }));
}

export async function updateLoadService(id, load) {
    return requestUrl( `/load/${id}`, await buildHeaderOptions(null, {
        method: 'PUT',
        body: JSON.stringify(load),
    }));
}

export async function deleteLoadByIdService(id) {
    return requestUrl( `/load/${id}`, await buildHeaderOptions(null, {
        method: 'DELETE',
    }));
}