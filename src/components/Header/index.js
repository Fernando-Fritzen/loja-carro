import styled from 'styled-components';

const HeaderWrapper = styled.header`
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
`;

const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
        padding: 10px 20px;
        margin-right: 10px;
        list-style: none;

        &:last-child {
            background: #0A4DF2;
            color: #FFF;
        }

        &:hover {
            color: #0A4DF2;
        }
    }
`;

function Header() {
  return (
    <HeaderWrapper>
        <h1>Logo</h1>
        <Menu>
            <li>HOME</li>
            <li>CARROS</li>
            <li>OFERTAS</li>
            <li>CONCESSIONÁRIAS</li>
            <li>SOBRE</li>
            <li>LOGIN</li>
        </Menu>
    </HeaderWrapper>
  );
}

export default Header;