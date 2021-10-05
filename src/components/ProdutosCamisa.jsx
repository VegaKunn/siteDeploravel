import Fileira from "../mostrador/Fileira";
import Separadora from "./Separadora";

export default function ProdutosCamisa() {
  return (
    <main className="corpoMain">
      <div className="separadora">
        <Separadora h2="Camisas Deploravél!" />
      </div>

      <Fileira A={1} B={4} produtos="camisa" />
      <Fileira A={5} B={8} produtos="camisa" />
      <Fileira A={1} B={4} produtos="camisa" />
      <Fileira A={1} B={4} produtos="camisa" />
      <Fileira A={1} B={4} produtos="camisa" />
      <Fileira A={1} B={4} produtos="camisa" />
    </main>
  );
}
