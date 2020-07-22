import React, { useEffect, useState } from 'react';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

//React:
// - Componente: bloco isolado de html, css e js o qual não interfere no restante da aplicação
// - Propriedade: Informações que um componente "pai" passa para os componentes filhos (props)
// - Estado: Informações mantidas pelo componente (lembrar: imutabilidade) const [var, setVar] = useState()

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      try {
        const response = await api.get('/devs');

        const { message } = response.data;
        setDevs(message);
      } catch (error) {
        console.log(error);
      }
    };

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    try {
      const response = await api.post('/devs', data);

      const { message } = response.data;
      setDevs([...devs, message])

    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelDev(_id){
    try {
      await api.delete(`/devs/${_id}`);
      const tmp = devs.filter(dev => dev._id !== _id)
      setDevs(tmp);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} onSubmit={handleDelDev}/>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
