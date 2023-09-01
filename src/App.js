function SelecionaPaises() {
  return (
    <div>
   <h1> Selecione um País</h1>
   <p>Paises da América do norte </p>
   <select>
     <option>EUA</option>
     <option>Canadá</option>
     <option>México</option>

     </select><br/>
     <br/>
     <h1> Selecione um um idioma</h1>

   <select>
     <option>Inglês</option>
     <option>Espanhol</option>
     <option>Português-BR</option>

     </select>

   </div>

  );
}

export default function MyApp() {
  return (

    <div>
     
      <SelecionaPaises />
    </div>
  );
}
