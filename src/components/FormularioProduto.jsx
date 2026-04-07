import { useState } from "react";

function FormularioProduto({ onAdicionarProduto }) {
  const [form, setForm] = useState({ nome: "", preco: "", descricao: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.nome || !form.preco || !form.descricao) return;

    onAdicionarProduto({
      ...form,
      id: Date.now(),
      imagem: `https://placehold.co/300x200?text=${encodeURIComponent(form.nome)}`,
    });

    setForm({ nome: "", preco: "", descricao: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Adicionar Produto</h2>
      <input
        name="nome"
        placeholder="Nome do produto"
        value={form.nome}
        onChange={handleChange}
        required
      />
      <input
        name="preco"
        type="number"
        placeholder="Preço"
        value={form.preco}
        onChange={handleChange}
        required
      />
      <textarea
        name="descricao"
        placeholder="Descrição"
        value={form.descricao}
        onChange={handleChange}
        required
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FormularioProduto;