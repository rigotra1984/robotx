import {requestUrl} from '../utils/request';

export async function getAllPersonsService() {
    return requestUrl( '/person', {});
}