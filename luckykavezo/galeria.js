const galeria = () => {
    return `
      <section id="galeria" class="my-4">
        <h2 class="text-success">Galéria</h2>
        <div class="row">
          <div class="col-md-4">
            <img src="kavezo.png" alt="Kávézó belülről" class="img-fluid rounded mb-2" />
            <p class="text-center"><strong>Kávézó belülről</strong></p>
          </div>
          <div class="col-md-4">
            <img src="cappuccino_k.png" alt="Kávéfajták" class="img-fluid rounded mb-2" />
            <p class="text-center"><strong>Kávéfajták</strong></p>
          </div>
          <div class="col-md-4">
            <img src="tiramisu_k.png" alt="Sütemények" class="img-fluid rounded mb-2" />
            <p class="text-center"><strong>Sütemények</strong></p>
          </div>
        </div>
      </section>
    `;
  };
  
  export default galeria;
  