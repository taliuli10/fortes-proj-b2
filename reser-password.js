
document.getElementById('toggleNewPassword')?.addEventListener('click', function () {
    const passwordField = document.getElementById('confirmPassword');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = this.textContent === '👁️' ? '👁️‍🗨️' : '👁️';
});

function createAccount() {
    alert('Criar Conta function clicked');
}

function goBack() {
    window.location.href = 'index.html';
}
