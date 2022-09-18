import { t, configureLang } from "./translations"
import { fireEasyBackendChallenge } from './templateGrabber'
import { obtainUserData } from "./userData"

export async function frontOrBack(opts) {
    configureLang(opts)
    console.log(t("welcome"))
    const userData = obtainUserData()
    //ver si ya no tiene un front-or-back.json=> si lo tiene cargar al manager
    fireEasyBackendChallenge()
}