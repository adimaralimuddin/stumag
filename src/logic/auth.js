

import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import useAntext from '../context/context'
import { auth } from '../firebase-config'

export default function useAuth() {

    const {setAuth} = useAntext();

    async function loginWithGoogle() {
        const provider = new GoogleAuthProvider()
        const res = await signInWithPopup(auth, provider)
        // console.log(res.user.displayName)
        setAuth(res.user)
    }

    return {
        loginWithGoogle,
    }
}