import {buildHeaderOptions, requestUrl} from "../utils/request";

export async function getAllLoadsService() {
    return requestUrl( '/api/load', await buildHeaderOptions(null, {
        method: 'GET',
    }));
}

export async function getAllLoadByIdService(id) {
    return requestUrl( `/api/load/${id}`, await buildHeaderOptions(null, {
        method: 'GET',
    }));
}

export async function createLoadService(load) {
    return requestUrl( '/api/load', await buildHeaderOptions(null, {
        method: 'POST',
        body: JSON.stringify(load),
    }));
}

export async function updateLoadService(id, load) {
    return requestUrl( `/api/load/${id}`, await buildHeaderOptions(null, {
        method: 'PUT',
        body: JSON.stringify(load),
    }));
}

export async function deleteLoadByIdService(id) {
    return requestUrl( `/api/load/${id}`, await buildHeaderOptions(null, {
        method: 'DELETE',
    }));
}