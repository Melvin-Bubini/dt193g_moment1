"use strict";

// Toggle Sidebar for Mobile
const menuButton = document.getElementById("menu-button");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");

menuButton.addEventListener("click", () => {
    sidebar.classList.toggle("translate-x-full");
});

closeSidebar.addEventListener("click", () => {
    sidebar.classList.add("translate-x-full");
});

// Make Navbar Transparent on Scroll
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 1) {
        navbar.classList.remove("bg-opacity-100"); // Remove background
        navbar.classList.add("bg-opacity-0");      // Make transparent
    } else {
        navbar.classList.add("bg-opacity-100");     // Add background
        navbar.classList.remove("bg-opacity-0");    // Remove transparency
    }
});

document.getElementById("tailwindUserForm").addEventListener('submit', function (event) {
    event.preventDefault();

    // Ta upp värden som lagts in i formuläret
    const firstname = document.getElementById('firstname').value;
    const age = document.getElementById('age').value;
    const textarea = document.getElementById('floatingTextarea').value;
    const framework = document.getElementById('frameworkSelect').value;


    const userTable = document.getElementById('tailwindUserTable').querySelector('tbody');
    const newRow = document.createElement('tr');

    // Lägg till klassen hover:bg-gray-700
    newRow.classList.add('hover:bg-gray-700');

    // Lägg till datan i formuläret
    newRow.innerHTML = `
        <td class="py-2 px-4 border-b border-gray-700 text-gray-300">${userTable.rows.length + 1}</td>
        <td class="py-2 px-4 border-b border-gray-700 text-gray-300">${firstname}</td>
        <td class="py-2 px-4 border-b border-gray-700 text-gray-300">${age}</td>
        <td class="py-2 px-4 border-b border-gray-700 text-gray-300">${textarea}</td>
        <td class="py-2 px-4 border-b border-gray-700 text-gray-300">${framework}</td>
    `;

    // Append nya raden till tabellen
    userTable.appendChild(newRow);

    // Rensar formuläret
    event.target.reset();
});

const openFormBtn = document.getElementById('openFormBtn');
const closeFormBtn = document.getElementById('closeFormBtn');
const offcanvas = document.getElementById('offcanvasExample');

openFormBtn.addEventListener('click', () => {
    offcanvas.classList.remove('hidden');
    offcanvas.classList.add('translate-x-0');
});

closeFormBtn.addEventListener('click', () => {
    offcanvas.classList.add('hidden');
    offcanvas.classList.remove('translate-x-0');
});