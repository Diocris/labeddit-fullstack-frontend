import { DivHolder, LogoStyled, NavbarStyled } from "./HeaderStyled"
import { useLocation, useNavigate} from "react-router-dom"
import logoIcon from "../../../assets/logo-icon.png"
import closeIcon from "../../../assets/close.png"
import Button from "../Button/Button"
import { goToHome, goToLogin } from "../../../Routes/coordinator"
import { useContext } from "react"
import { AppContext } from "../../../Context/GlobalContext"
export default function Header() {

    const { loggedIn, setLoggedIn } = useContext(AppContext)
    const pathParams = useLocation().pathname
    
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        setLoggedIn(false)
        goToLogin(navigate)
    }

    return (<>
        {pathParams !== "/login" ? pathParams.includes("/post/") ?
            <NavbarStyled >
                <DivHolder>
                    <Button image={closeIcon} alt="Back button." event={() => goToHome(navigate)}>
                        <img src={closeIcon} alt="" />
                    </Button>
                </DivHolder>
                <DivHolder>
                    <LogoStyled src={logoIcon} alt="Logo icon." />
                </DivHolder>
                <DivHolder>
                    {loggedIn
                        ? <Button text="Logout" alt="Logout button." event={logout} />
                        : <Button text="Login" alt="Login button." event={() => goToLogin(navigate)} />}
                </DivHolder>
            </NavbarStyled> 
            
            :

            <NavbarStyled >
                <DivHolder></DivHolder>
                
                <DivHolder>
                      <LogoStyled $variant={'$primary'} src={logoIcon} alt="Logo icon." />
                </DivHolder>
                
              <DivHolder>
                        {loggedIn
                    ? <Button text="Logout" alt="Logout button." event={logout} />
                    : <Button text="Login" alt="Login button." event={() => goToLogin(navigate)} />}
              </DivHolder>
        

            </NavbarStyled>

       : <></>  }
    </>)
}