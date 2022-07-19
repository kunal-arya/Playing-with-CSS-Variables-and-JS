const inputs = document.querySelectorAll(".controls input");

function inputClickHandler() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    console.log(this.name)
}


inputs.forEach(input => input.addEventListener("click", inputClickHandler));
inputs.forEach(input => input.addEventListener("mousemove", inputClickHandler));