import styled from "styled-components"
import { ThemeToogleButton } from "../Theme-toogle-button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { type } from "@testing-library/user-event/dist/cjs/utility/type.js"

const StyleNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    position: fixed;
    height: 52px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`
const StyleImage = styled.img`
    width: 150px;
    padding: 1rem;
`
const StyleInput = styled.input`
    padding: 0.6rem;
    border-radius: 10px;
    border: 1px solid #ffffff;
    margin-right: 0.2rem;
`
const StyleButton = styled.button`
    padding: 0.5rem;
    border-radius: 10px;
    border: 1px solid #ffffff;
    background-color: #ffff;
    cursor: pointer;
    `
export const Header = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const trimedQuery = query.trim().toLowerCase();
        if (trimedQuery) {
            navigate(`/pokemon/${query.toLowerCase()}`)
        } else if (type) {
            navigate(`/type/${type}`);
        }
    }
    return (
        <StyleNavBar>
            <StyleImage src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokeapi-logo" className="navbar-logo" />
            <form onSubmit={handleSearch} style={{ display: "flex", alignItems: "center" }}>
                <StyleInput type="text" placeholder="Pesquise o seu pokemon"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <StyleButton type="submit">🏸</StyleButton>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">Selecione o seu tipo</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fogo</option>
                    <option value="water">Água</option>
                    <option value="electric">Elétrico</option>
                    <option value="grass">Grama</option>
                    <option value="ice">Gelo</option>
                    <option value="fighting">Lutador</option>
                    <option value="poison">Veneno</option>
                    <option value="ground">Terra</option>
                    <option value="flying">Voador</option>
                    <option value="psychic">Psíquico</option>
                    <option value="bug">Inseto</option>
                    <option value="rock">Pedra</option>
                    <option value="ghost">Fantasma</option>
                    <option value="dragon">Dragão</option>
                    <option value="dark">Sombrio</option>
                    <option value="steel">Aço</option>
                    <option value="fairy">Fada</option>
                </select>
            </form>
            <ThemeToogleButton />
        </StyleNavBar>
    )
}

