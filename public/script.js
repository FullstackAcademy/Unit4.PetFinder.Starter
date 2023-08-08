const API = '/api/v1/pets'
const petsList = document.getElementById('pets-list');

const fetchAllPets = async () => {
    try {

        const response = await fetch(`${API}`);
        const fetchData = await response.json();
        console.log("data: ", fetchData)
        return fetchData;
        
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const renderAllPets = async () => {
    try {

        const renderPets = await fetchAllPets();

        petsList.innerHTML = '';

        renderPets.forEach(pet => {
            
            const listItem = document.createElement('li');

            listItem.textContent = `Name: ${pet.name}, Owner: ${pet.owner}`;

            petsList.appendChild(listItem);
          });

        }
        
    
        
    catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    
        }
    };

renderAllPets();