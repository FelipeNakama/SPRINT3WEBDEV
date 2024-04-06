import React,{useState} from 'react'
function Contato() {

  const [nome, setNome]=useState()

  const armazenar=(chave,valor)=>{
      localStorage.setItem(chave,valor)
  }

  const consultar=(chave)=>{
      alert(localStorage.getItem(chave))
  }

  const apagar=(chave)=>{
      localStorage.getItem(chave)
}


  return (
    <section className="row">
      <h2>Entre em Contato</h2>
      <form className="second_info"> 
        <div className="form-control">
          <div className="sera">
            <label for="Nome-completo">Nome Completo</label>
            <input type="text" id="nome" class="form-control" placeholder="Nome" value={nome} onChange={(e)=>setNome(e.target.value)}/>
            <button onClick={()=>armazenar('ls_nome',nome)}>Gravar Nome</button>
            <button onClick={()=>consultar('ls_nome')}>Consultar Nome</button>
            <button onClick={()=>apagar('ls_nome')}>Remover Nome</button>
          </div>
          <div className="sera">
          <label for="Email">Digite seu email</label>
          <input type="email" id="email" class="form-control" placeholder="nome@email.com"/>
          </div >
          <div class="col-10">
              <label for="comentario" class="form-label">
                  Escreva como gostaria de ajudar:
                  <span class="text-muted">(obrigatorio)</span>
              </label>
              <textarea name="comentario" id="comentario" rows="3" class="form-control" maxlength="200"></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-20">Enviar Formulario</button>
        </div>
      </form>
    </section>
  );
}

export default Contato;