import sangue from "../../Img/exame-de-sangue.jpg"
import raiox from "../../Img/pexels-tara-winstead-77235131.jpg"
import ressonancia from "../../Img/ressonancia_magnetica.jpg"

function Exames (){
    return (
        <div class="bloco2" id="bloco2">
            <div class="conteudo-bloco2">
                <img src={sangue} alt="Exame de Sangue" />;
                <a href="exame-de-sangue.html"><button>Exame de Sangue</button></a>
            </div>
            <div class="conteudo-bloco2">
                <div class="imagem-conteudo-bloco2">
                    <img src={raiox} alt="Raio X" />;
                </div>
                <div class="button-conteudo-bloco2">
                    <a href="raio_x.html"><button >Raio-X</button></a>
                </div>
            </div>
            <div class="conteudo-bloco2">
                <div class="imagem-conteudo-bloco3">
                    <img src={ressonancia} alt="Ressonancia" />;
                </div>
                <div class="button-conteudo-bloco3">
                    <a href="ressonancia_magnetica.html"><button>Ressonância Magnética</button></a>
                </div>
            </div>
      </div>
    );
}

export default Exames;

