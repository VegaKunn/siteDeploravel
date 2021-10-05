import camisetas from "../Storage/Camisetas";
import camisetasFemininas from "../Storage/CamisetasFemininas";
import tenis from "../Storage/Tenis";
import tenisFemininos from "../Storage/TenisFeminino";
import acessorios from "../Storage/Acessorios";

export default function Fileira(props) {
  var produto;
  if (props.produtos == "camisa") {
    produto = camisetas;
  } else if (props.produtos == "tenis") {
    produto = tenis;
  } else if (props.produtos == "camisaFeminina") {
    produto = camisetasFemininas;
  } else if (props.produtos == "tenisFeminino") {
    produto = tenisFemininos;
  } else if (props.produtos == "acessorios") {
    produto = acessorios;
  }

  const produtoFiltro = produto.filter((item) => {
    if (item.id >= props.A && item.id <= props.B) {
      return true;
    } else {
      return false;
    }
  });
  const itemAmostra = produtoFiltro.map((item) => (
    <div className="fileiraLista" key={item.id}>
      <a className="fileiraLink" href={item.tipo + item.label}>
        <img className="fotoFileira" src={item.foto} />
      </a>
      <div>
        <p>
          {item.nome} | R$:{item.valor}
        </p>
      </div>
    </div>
  ));

  return <div className="fileira">{itemAmostra}</div>;
}
