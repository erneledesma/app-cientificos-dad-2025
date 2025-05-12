import getData from '../utils/getData.js';

const Home = async () => {
  const characters = await getData();

  const view = `
    <div class="Characters">
      ${
        characters?.results
          ? characters.results.map(character => `
            <article class="Character-item">
              <a href="#/${character.id}/">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
              </a>
            </article>
          `).join('')
          : '<p>No hay personajes disponibles.</p>'
      }
    </div>
  `;
  
  return view;
}

export default Home;
