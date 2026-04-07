import { useState, useEffect } from "react";
import ProdutoCard from "../components/ProdutoCard";
import FormularioProduto from "../components/FormularioProduto";
import produtosMock from "../data/produtos";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Simula chamada à API
  useEffect(() => {
    setTimeout(() => {
      setProdutos(produtosMock);
      setCarregando(false);
    }, 1500);
  }, []);

  function adicionarProduto(novoProduto) {
    setProdutos([...produtos, novoProduto]);
  }

  return (
    <div>
      <header className="app-header">
        <h1>🛍️ Catálogo de Produtos</h1>
        <span className="contagem">{produtos.length} produtos</span>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <FormularioProduto onAdicionarProduto={adicionarProduto} />
        </aside>

        <main>
          {carregando ? (
            <p className="carregando">Carregando produtos...</p>
          ) : (
            <div className="lista-produtos">
              {produtos.map((p) => (
                <ProdutoCard key={p.id} {...p} />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default Home;