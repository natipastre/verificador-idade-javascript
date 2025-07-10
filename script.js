function verificar() {
    var data = new Date();
    var ano = data.getFullYear();

    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fAno.value.length === 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var fase = '';
        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (fsex[0].checked) {
            genero = "masculino";

            if (idade < 12) {
                fase = "uma criança";
                img.setAttribute("src", "imagem/criancamenino.jpg");
            } else if (idade < 21) {
                fase = "um jovem";
                img.setAttribute("src", "imagem/homem.jpg");
            } else if (idade < 50) {
                fase = "um adulto";
                img.setAttribute("src", "imagem/homem.jpg");
            } else {
                fase = "um idoso";
                img.setAttribute("src", "imagem/senhor.jpg");
            }

        } else if (fsex[1].checked) {
            genero = "feminino";

            if (idade < 12) {
                fase = "uma criança";
                img.setAttribute("src", "imagem/criancamenina.jpg");
            } else if (idade < 21) {
                fase = "uma jovem";
                img.setAttribute("src", "imagem/mulher.jpg");
            } else if (idade < 50) {
                fase = "uma adulta";
                img.setAttribute("src", "imagem/mulher.jpg");
            } else {
                fase = "uma idosa";
                img.setAttribute("src", "imagem/senhora.jpg");
            }
        }

        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${fase} do sexo ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
