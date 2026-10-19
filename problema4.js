document.addEventListener("DOMContentLoaded", () =>{
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "encuentre las tensiones de las cuerdas A y la B";
    da.innerHTML = "200 N / Sen(90°)<br>a / Sen(150°)<br>b / Sen(120°)";
    f.textContent = "N/Sen(C) = a/Sen(A) = b/Sen(B)";
    p.textContent = "calcular a=(226 N / Sen(90°)) * Sen(150°)<br>calcular b=(200N / Sen(90°)) * Sen(120°)";
    r.textContent = "";
    
    console.log("descripcion:", d.textContent);
    console.log("datos:", da.textContent);
    console.log("formula:", f.textContent);
    console.log("calculo:", p.textContent);


    function mostrar() {
        r.textContent = "resultado de A= 100N, resultado de B= 173.2050N";
        console.log("resultado final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
});