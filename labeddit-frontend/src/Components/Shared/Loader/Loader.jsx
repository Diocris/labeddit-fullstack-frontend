import loaderGif from "../../../assets/animation_llyyyzyx_small.gif"
import { LoaderGif, LoaderHolder } from "./LoaderStyled"
export default function Loader() {
    return<LoaderHolder><LoaderGif src={loaderGif}/></LoaderHolder>
}