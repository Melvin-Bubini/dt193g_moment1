"use strict"

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 1) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }
});

document.getElementById('scroll-btn').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#answers-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("userForm").addEventListener('submit', function (event) {
    event.preventDefault();

    // Ta upp värden som lagts in i formuläret
    const firstname = document.getElementById('firstname').value;
    const age = document.getElementById('age').value;
    const textarea = document.getElementById('floatingTextarea').value;
    const framework = document.getElementById('frameworkSelect').value;


    const userTable = document.getElementById('userTable').querySelector('tbody');
    const newRow = document.createElement('tr');

    // Lägg till datan i formuläret
    newRow.innerHTML = `
        <td>${userTable.rows.length + 1}</td>
        <td>${firstname}</td>
        <td>${age}</td>
        <td>${textarea}</td>
        <td>${framework}</td>
    `;

    // Append nya raden till tabellen
    userTable.appendChild(newRow);

    // Rensar formuläret
    event.target.reset();
});