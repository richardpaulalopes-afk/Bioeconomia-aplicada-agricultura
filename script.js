document.addEventListener("DOMContentLoaded", () => {
    
    const btnCalcular = document.getElementById("btn-calcular");
    const inputHectares = document.getElementById("hectares");
    const containerResultados = document.getElementById("resultados");

    // Elementos onde serão exibidos os resultados
    const resQuimicos = document.getElementById("res-quimicos");
    const resCo2 = document.getElementById("res-co2");
    const resEconomia = document.getElementById("res-economia");

    btnCalcular.addEventListener("click", () => {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples de entrada
        if (isNaN(hectares) || hectares <= 0) {
            alert("Por favor, insira um número válido de hectares maior que zero.");
            return;
        }

        // Lógica de cálculo fictícia baseada em médias de mercado sustentável
        // Exemplo: por Hectare, reduz-se 12kg de defensivos, evita-se 1.5t de CO2 e economiza-se R$ 350
        const defensivosEvitados = hectares * 12;
        const co2Evitado = hectares * 1.5;
        const economiaFinanceira = hectares * 350;

        // Injeta os dados calculados formatados na tela
        resQuimicos.innerText = Math.round(defensivosEvitados).toLocaleString('pt-BR');
        resCo2.innerText = co2Evitado.toFixed(1).replace('.', ',');
        resEconomia.innerText = economiaFinanceira.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Revela a seção de resultados caso estivesse oculta
        containerResultados.classList.remove("hidden");
        
        // Rolagem suave até os resultados
        containerResultados.scrollIntoView({ behavior: 'smooth' });
    });
});