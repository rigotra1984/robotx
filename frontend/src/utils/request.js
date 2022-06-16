const BASE_URL = 'https://lit-sea-07478.herokuapp.com';
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
export function parseJSON(response) {
	if (response.status === 204 || response.status === 205) {
		return null;
	}
	return response.json();
}

export function parseText(response) {
	if (response.status === 204 || response.status === 205) {
		return null;
	}
	return response.text();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
	if (response.status >= 200 && response.status < 300) {
		return response;
	}

	const error = new Error(response.statusText);
	error.response = response;
	throw error;
}

export function requestWithResponseText(url, options) {
	return fetch(url, options)
		.then(checkStatus)
		.then(parseText);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function requestUrl(url, options) {
	return fetch(BASE_URL + url, options)
		.then(checkStatus)
		.then(parseJSON);
}


export async function buildBaseHeaders (extraHeaders = {}) {
	const headers = Object.assign({}, {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}, extraHeaders);

	return {
		headers,
	};
}

export async function buildHeaderOptions(token, options, extraHeaders = {}) {
	const auth = token ? {'Authorization': `${ token}`} : {};
	const headers = await buildBaseHeaders(Object.assign({}, auth, extraHeaders));
	return Object.assign({}, headers, options);
}

/**
 * https://docs.expo.io/versions/v36.0.0/react-native/network/
 *
 * fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  }),
});

function getMoviesFromApiAsync() {
  return fetch('https://reactnative.dev/movies.json')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.movies;
    })
    .catch(error => {
      console.error(error);
    });
}
 */
