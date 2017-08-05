
/* global gapi */
import store from './store'
import * as signedInStates from './signed-in-states.js'

var CLIENT_ID = '788562310771-vagjhi4qmo345iinlofd6anj601l1v71.apps.googleusercontent.com'

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4']

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly'

function handleClientLoad () {
  gapi.load('client:auth2', initClient)
}

function signOut () {
  gapi.auth2.getAuthInstance().signOut()
}

function signIn () {
  gapi.auth2.getAuthInstance().signIn()
}

function grabData (sheetId = '1Kbx--QrhcQvJdr1z1F3pDEAzEy-ezKI1footkHakQTY', range = 'Sheet1!A2:C100') {
  return gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: range
  })
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient () {
  gapi.client.init({
    discoveryDocs: DISCOVERY_DOCS,
    clientId: CLIENT_ID,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
    // authorizeButton.onclick = handleAuthClick;
    // signoutButton.onclick = handleSignoutClick;
  })
}

function updateSigninStatus (isSignedIn) {
  if (isSignedIn) {
    // authorizeButton.style.display = 'none';
    // signoutButton.style.display = 'block';
    // listMajors();
    store.commit('signedInState', signedInStates.SIGNED_IN)
    console.log('yep -signed in')
  } else {
    console.log('not signed in')
    store.commit('signedInState', signedInStates.NOT_SIGNED_IN)
    // gapi.auth2.getAuthInstance().signIn()
    // authorizeButton.style.display = 'block';
    // signoutButton.style.display = 'none';
  }
}
export { handleClientLoad, signIn, signOut, grabData }
