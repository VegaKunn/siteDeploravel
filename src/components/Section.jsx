import Fileira from "../mostrador/Fileira";
import Separadora from "./Separadora";

const Tenis = "img/tumbs/tenis.jpg";
const Camisa = "img/tumbs/camisetas.jpg";
const Acessorios = "img/tumbs/acessorios.jpg";
const Masculino = "img/tumbs/masculino.jpg";
const Feminino = "img/tumbs/feminino.jpg";

export default function Section() {
  return (
    <section className="corpoMain">
      <div className="mf">
        <div className="divGrande">
          <img className="imgMF" src={Masculino} />
        </div>
        <div className="divGrande">
          <img className="imgMF" src={Feminino} />
        </div>
      </div>
      <div className="topicos">
        <div className="divPequena">
          <img className="imgMF" src={Tenis} />
        </div>
        <div className="divPequena">
          <img className="imgMF" src={Camisa} />
        </div>
        <div className="divPequena">
          <img className="imgMF" src={Acessorios} />
        </div>
      </div>

      <Separadora h2="Lançamentos e Mais!" />

      <h2>All Stars</h2>
      <Fileira A={1} B={4} produtos="tenis" />
      <Fileira A={1} B={4} produtos="tenis" />

      <h2>Camias</h2>
      <Fileira A={1} B={4} produtos="camisa" />
      <Fileira A={5} B={8} produtos="camisa" />
    </section>
  );
}
