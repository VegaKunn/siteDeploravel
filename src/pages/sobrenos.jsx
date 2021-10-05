import Header from "../components/Header";

export default function SobreNos() {
  return (
    <>
      <Header />
      <main className="backgroundUnico">
        <section className="corpoMainSobreNos">
        <h1> className=
          <h1 className="sobreH1">Sobre Nós</h1>
          <br />
          <p className="sobreP">
            A Marca deploravél, diz respeito a não só um site ou uma marca mas
            sim a todo um conceito de se vestir, incluindo desde roupas a tambem
            sapatos e acessórios do mundo underground. <br />
            Nossos produtos contam com o olhar crítico do próprio fundador da
            marca que revisa desde o material dos fios das peças de roupa até o
            produto final entregado pelas fabricas terceirizadas por nós,
            garantindo assim a maior qualidade para o produto final entregue aos
            clientes.
          </p>
          <br />
          <h2 className="sobreH2">Redes Sociais</h2>
          <br />
          <p className="sobreP">
            Contamos também com atendimentos e vendas em nossas redes sociais
            sendo elas{" "}
            <a className="sobreFace" href="/">
              facebook
            </a>{" "}
            e{" "}
            <a
              href="https://www.instagram.com/deploravel.shop/"
              className="sobreInsta"
              target="_blank"
            >
              instagram
            </a>{" "}
            onde por elas tambem oferecemos vendas de nossos produtos!
          </p>

          <br />
          <h2 className="sobreH2">FeedBack</h2>
          <br />
          <p className="sobreP">
            Em nossas redes sociais que recebemos o feedback dos clientes onde
            podem comentar os produtos individualmente e podem comentar algo que
            agregue como um todo todas as nossas plataformas, ou seja, sua
            critica será sempre bem vinda e os agradecemos desde já por nos
            ajudar com dicas para a nossa melhora!
          </p>
        </section>
      </main>
    </>
  );
}
