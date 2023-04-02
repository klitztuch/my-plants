import SignIn from "../../../lib/auth/SignIn.svelte";
import { Link } from "carbon-components-svelte";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, userDoc } from "../../../firebase/firebase.js";
import { goto } from "$app/navigation";
import { setDoc } from "firebase/firestore/lite";


export async function signIn(event) {
    try {
        let user = await signInWithEmailAndPassword(auth, event.detail.email, event.detail.password)
        await setDoc(userDoc(auth.currentUser.uid), { username: user.user.displayName, email: user.user.email })
        await goto("/admin")
    } catch (error) {
        console.log("error signin in", error)
    }
}