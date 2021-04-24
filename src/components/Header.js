import minime from '../images/minime.png'
import styled from 'styled-components'


const HeaderBox = styled.header`
    background-color: #282c34;
    height: 80px;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`
const ULbox = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const UL = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    position: relative;
    right: 50px;
`
const P = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 400;
    :hover {
        cursor: pointer;
        color: grey;
    }
`



export const Header = ()=>{

    return (
        <HeaderBox>
            <img src={minime} className="App-logo" alt="logo" />
            <ULbox>
                <UL>
                    <li>
                        <P>Home</P>
                    </li>
                    <li>
                        <P>About</P>
                    </li>
                    <li>
                        <P>Portfolio</P>
                    </li>
                    <li>
                        <P>Connect</P>
                    </li>
                </UL>
            </ULbox>
                

        </HeaderBox>
    )

}