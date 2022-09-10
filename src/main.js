import { t, configureLang } from "./translations"

export async function frontOrBack(opts) {
    configureLang(opts)
    console.log(t("instructions"))
}