import { session } from '$lib/session';
import { auth } from '$lib/firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateCurrentUser,
  type UserCredential
} from 'firebase/auth';
import { goto } from '$app/navigation';

export async function loginWithMail(email: string, password: string) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const { user }: UserCredential = result;
      session.set({
        loggedIn: true,
        user: {
          displayName: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
          uid: user?.uid
        }
      });
      goto('/');
    })
    .catch((error) => {
      return error;
    });
}

export async function handleRegister(email: string, password: string, name: string) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then(async (result) => {
      const { user } = result;
      await updateCurrentUser(auth, {
        ...user,
        displayName: name,
      })
      session.update((cur: any) => {
        return {
          ...cur,
          user,
          loggedIn: true,
          loading: false
        };
      });
      goto('/chat');
    })
    .catch((error) => {
      throw new Error(error);
    });
}