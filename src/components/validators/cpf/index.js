export const formatCPF = (cpfNumber) => {
    const cleaned = cpfNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/);
    if (match) {
        return `${match[1]}.${match[2]}.${match[3]}-${match[4]}`;
    }
    return cleaned;
}

export const validateCPF = (cpfNumber) => {
    // Remove todos os caracteres não numéricos
    const cleaned = cpfNumber.replace(/\D/g, '');
    // Verifica se o CPF tem 11 dígitos
    if (cleaned.length !== 11) {
        return false;
    }
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cleaned)) {
        return false;
    }
    // Validação do CPF utilizando algoritmo
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cleaned.substring(9, 10))) {
        return false;
    }
    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) {
        remainder = 0;
    }
    if (remainder !== parseInt(cleaned.substring(10, 11))) {
        return false;
    }
    return true;
}
