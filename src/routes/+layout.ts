import { initializeFirebase, auth } from '$lib/firebase/firebase';
import { browser } from '$app/environment';
import { onAuthStateChanged } from 'firebase/auth';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async function ({ url }) {
  if (browser) {
    try {
      initializeFirebase();
    } catch (ex) {
      console.error(ex);
    }
  }

  function getAuthUser() {
    return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => resolve(user ? user : false));
    });
  }

  return {
    getAuthUser: getAuthUser,
    url: url.pathname
  };
}