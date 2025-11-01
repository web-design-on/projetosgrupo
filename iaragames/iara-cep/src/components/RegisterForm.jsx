import React, { useState } from "react";

/**
 * RegisterForm - componente que substitui o formulário estático do register.html
 * Faz consulta de CEP na ViaCEP e preenche rua, bairro, cidade e estado.
 */
export default function RegisterForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        nickName: "",
        phone1: "",
        phone2: "",
        birthDate: "",
        cep: "",
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
        password: "",
        passwordConfirm: "",
        terms: false,
        optIn: false,
    });

    const [loadingCep, setLoadingCep] = useState(false);
    const [cepError, setCepError] = useState("");
    const [submitError, setSubmitError] = useState("");

    // limpa apenas dígitos do CEP
    const normalizeCep = (value) => value.replace(/\D/g, "");

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setForm((prev) => ({ ...prev, [id]: type === "checkbox" ? checked : value }));
    };

    const lookupCep = async (rawCep) => {
        const cep = normalizeCep(rawCep);
        if (cep.length !== 8) {
            setCepError("CEP deve ter 8 dígitos.");
            return;
        }

        setLoadingCep(true);
        setCepError("");

        try {
            const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            if (!res.ok) throw new Error("Erro na requisição ViaCEP");
            const data = await res.json();
            if (data.erro) {
                setCepError("CEP não encontrado.");
                setForm((prev) => ({
                    ...prev,
                    street: "",
                    neighborhood: "",
                    city: "",
                    state: "",
                }));
            } else {
                setForm((prev) => ({
                    ...prev,
                    street: data.logradouro || "",
                    neighborhood: data.bairro || "",
                    city: data.localidade || "",
                    state: data.uf || "",
                }));
            }
        } catch (err) {
            setCepError("Não foi possível consultar o CEP. Tente novamente.");
            console.error(err);
        } finally {
            setLoadingCep(false);
        }
    };

    // disparar busca quando perder o foco do input de CEP
    const handleCepBlur = (e) => {
        const cep = e.target.value;
        if (cep.trim() === "") return;
        lookupCep(cep);
    };

    const handleCepButton = (e) => {
        e.preventDefault();
        const cep = form.cep;
        lookupCep(cep);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // validação básica
        if (!form.terms) {
            setSubmitError("Você precisa aceitar os termos.");
            return;
        }
        if (form.password !== form.passwordConfirm) {
            setSubmitError("As senhas não conferem.");
            return;
        }
        setSubmitError("");

        // Exemplo: enviar a um endpoint ou apenas logar (ainda não temos backend)
        // aqui você pode chamar sua API de cadastro
        console.log("Dados para cadastro:", form);
        alert("Formulário submetido (teste). Veja console para dados).");
    };

    return (
        <main className="container my-5">
            <form className="row register" onSubmit={handleSubmit}>
                <div className="mb-3 col-md-5">
                    <label htmlFor="name" className="form-label">Nome completo:</label>
                    <input id="name" value={form.name} onChange={handleChange} type="text" className="form-control" required />
                </div>

                <div className="mb-3 col-md-5">
                    <label htmlFor="email" className="form-label">Endereço de email:</label>
                    <input id="email" value={form.email} onChange={handleChange} type="email" className="form-control" required />
                </div>

                <div className="mb-3 col-md-2">
                    <label htmlFor="nickName" className="form-label">Nome de usuário:</label>
                    <input id="nickName" value={form.nickName} onChange={handleChange} type="text" className="form-control" required />
                </div>

                <div className="mb-3 col-md-4">
                    <label htmlFor="phone1" className="form-label">Celular:</label>
                    <input id="phone1" value={form.phone1} onChange={handleChange} type="tel" className="form-control" />
                </div>

                <div className="mb-3 col-md-4">
                    <label htmlFor="phone2" className="form-label">Telefone:</label>
                    <input id="phone2" value={form.phone2} onChange={handleChange} type="tel" className="form-control" />
                </div>

                <div className="mb-3 col-md-4">
                    <label htmlFor="birthDate" className="form-label">Data de nascimento:</label>
                    <input id="birthDate" value={form.birthDate} onChange={handleChange} type="date" className="form-control" required />
                </div>

                <div className="mb-3 col-md-3">
                    <label htmlFor="cep" className="form-label">CEP:</label>
                    <div className="d-flex gap-2">
                        <input id="cep" value={form.cep} onChange={handleChange} onBlur={handleCepBlur} type="text" className="form-control" required />
                        <button className="btn btn-outline-secondary" onClick={handleCepButton} disabled={loadingCep} title="Consultar CEP">
                            {loadingCep ? "..." : "Buscar"}
                        </button>
                    </div>
                    {cepError && <small className="text-danger">{cepError}</small>}
                </div>

                <div className="mb-3 col-md-5">
                    <label htmlFor="street" className="form-label">Rua:</label>
                    <input id="street" value={form.street} onChange={handleChange} type="text" className="form-control" required />
                </div>

                <div className="mb-3 col-md-4">
                    <label htmlFor="number" className="form-label">Número:</label>
                    <input id="number" value={form.number} onChange={handleChange} type="text" className="form-control" required />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="neighborhood" className="form-label">Bairro:</label>
                    <input id="neighborhood" value={form.neighborhood} onChange={handleChange} type="text" className="form-control" required />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="city" className="form-label">Cidade:</label>
                    <input id="city" value={form.city} onChange={handleChange} type="text" className="form-control" required />
                </div>

                <div className="mb-3 col-md-3">
                    <label htmlFor="state" className="form-label">Estado (UF):</label>
                    <input id="state" value={form.state} onChange={handleChange} type="text" className="form-control" maxLength={2} />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="password" className="form-label">Senha:</label>
                    <input id="password" value={form.password} onChange={handleChange} type="password" className="form-control" required />
                </div>

                <div className="mb-3 col-md-6">
                    <label htmlFor="passwordConfirm" className="form-label">Confirme sua senha:</label>
                    <input id="passwordConfirm" value={form.passwordConfirm} onChange={handleChange} type="password" className="form-control" required />
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input id="terms" checked={form.terms} onChange={handleChange} className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="terms">
                            Li e aceito os <a href="#">termos e condições</a>
                        </label>
                    </div>

                    <div className="form-check">
                        <input id="optIn" checked={form.optIn} onChange={handleChange} className="form-check-input" type="checkbox" />
                        <label className="form-check-label" htmlFor="optIn">
                            Aceito receber comunicações sobre as novidades da plataforma
                        </label>
                    </div>
                </div>

                {submitError && <div className="col-12"><p className="text-danger">{submitError}</p></div>}

                <div className="col-12 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                </div>
            </form>
        </main>
    );
}
