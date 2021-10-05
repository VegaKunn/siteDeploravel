import Header from "../components/Header";
import ProdutosCamisa from "../components/ProdutosCamisa";

export default function AllCamisas() {
  return (
    <>
      <Header />
      <main className="backgroundUnico">
        <ProdutosCamisa />
      </main>
    </>
  );
}
