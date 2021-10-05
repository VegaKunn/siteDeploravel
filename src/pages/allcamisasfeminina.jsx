import Header from "../components/Header";
import ProdutosCamisaFeminina from "../components/ProdutosCamisaFeminina";

export default function AllCamisasFeminina() {
  return (
    <>
      <Header />
      <main className="backgroundUnico">
        <ProdutosCamisaFeminina />
      </main>
    </>
  );
}
