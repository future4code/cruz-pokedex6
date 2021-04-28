import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { HeaderContainer, Logo, Title, ErrorContainer, H1 } from '../components/style'
import { goToHome } from '../PagesNavigation/Coordinator'
import Button from '@material-ui/core/Button';
import pokebola from '../images/pokebola.png'


export default function ErrorPage() {
    const history = useHistory()
    useEffect(() => {
        document.title = `Ops! Link incorreto!`
    }, [])
    return <div>
        <HeaderContainer>
            <p></p>
            <div>
                <Title src="https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1" alt="logo" />
            </div>
            <p></p>
            <Logo src={pokebola} />
        </HeaderContainer>
        <ErrorContainer>
            <H1>LINK NÃO ENCONTRADO</H1>
            <p>Parece que o link digitado não existe. Você ainda pode virar um Mestre Pokemon! (Mas na nossa Home, não aqui ;) )</p>
            <Button color="primary" variant="contained" onClick={() => goToHome(history)}>Home</Button>
        </ErrorContainer>
    </div>
}