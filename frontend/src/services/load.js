import {requestUrl} from "../utils/request";

export async function getAllLoadsService() {
    return requestUrl( '/load', {});
}

export async function getAllLoadByIdService(id) {
    return requestUrl( `/load/${id}`, {});
}

export async function createLoadService(load) {
    return requestUrl( '/load', {
        method: 'POST',
        body: JSON.stringify(load),
    });
}

export async function updateLoadService(id, load) {
    return requestUrl( `/load/${id}`, {
        method: 'PUT',
        body: JSON.stringify(load),
    });
}

export async function serverDeleteContactById(id) {
    return requestUrl( `/load/${id}`, {
        method: 'DELETE',
    });
}