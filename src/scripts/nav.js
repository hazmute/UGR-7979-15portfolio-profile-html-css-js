function toggleDropdown() {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const isActive = dropdownMenu.classList.contains("active");

  if (isActive) {
    dropdownMenu.classList.remove("active");
    document.removeEventListener("click", handleOutsideClick);
  } else {
    dropdownMenu.classList.add("active");
    document.addEventListener('click', handleOutsideClick);
  }
}

function handleOutsideClick(event) {
  const dropdownMenu = document.getElementById("dropdown-menu");
  const menuTrigger = document.getElementById('menu-trigger');

  // Close dropdown if the click is outside the dropdown and trigger
  if (!dropdownMenu.contains(event.target) && !menuTrigger.contains(event.target)) {
    dropdownMenu.classList.remove("active");
  }
}
