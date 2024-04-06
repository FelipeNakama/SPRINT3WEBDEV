import Contato from "../Contato";
import ImagemBack from "../ImagemBack";
import Exames from "../Exames";
import QuemSomos from "../QuemSomos";

function ConteudoPrincipal(){
    return (
        <div>
            <ImagemBack />
            <QuemSomos />
            <Exames />
            <Contato />
      </div>
    );
}

export default ConteudoPrincipal;