const amount = document.getElementById("amount")

// Manipulando o input amount parar receber somente números.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value  = amount.value.replace(hasCharactersRegex, "")
})