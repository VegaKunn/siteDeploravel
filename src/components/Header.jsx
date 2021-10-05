import { IconeCarrinho, IconePerfil } from "./IconsStorage";

export default function Header(props) {
  return (
    <header id="header">
      <div id="logo">
        <a href="/">
          <p className="logo">Deplorável</p>
        </a>
      </div>

      <nav className="navClasse">
        <ul className="ulCab">
          <li className="liCab">
            <a href="/">INICIO</a>
          </li>
          <li className="liCab">
            <a href="/allcamisas">MASCULINO</a>
          </li>
          <li className="liCab">
            <a href="/allcamisasfeminina">FEMININO</a>
          </li>
          <li className="liCab">ACESSÓRIOS</li>
          <li className="liCab">CONTATOS</li>
          <li className="liCab">
            <a href="/sobrenos">SOBRE NÓS </a>
          </li>
        </ul>
      </nav>

      <div className="perfil">
        <input
          type="text"
          name="busca"
          id="busca"
          placeholder="Buscar, Caçar, Destruir"
        />
        <div className="icon">{IconePerfil}</div>
        <div className="icon">{IconeCarrinho}</div>
      </div>
    </header>
  );
}
