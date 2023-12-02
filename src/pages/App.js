import { useState } from 'react';
import logo from '../assets/img/github_logo.png';
import ItemRepo from '../components/ItemRepo';
import Input from '../components/Input';
import { Container } from './styles';
import Button from '../components/Button';
import {api} from '../services/api';
import InputMessage from '../components/InputMessage';


function App() {

  const [repos, setRepos]  = useState([])
  const [currentRepo, setCurrentRepo] = useState('');
  const [message, setMessage] = useState('')



  const handleSearch = async () =>{
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data?.id){
      //setRepos([...repos, data])
      if(!repos.find(repo => repo.id === data.id)){
        setRepos(prev =>[...prev, data])
        setMessage()
      }else{
        setMessage('Repo already retrieved')
      }
      console.log(data)
    }else{
      setMessage('Repo does not exist')
    }
  }

  const handleRemoveRepo = (id) =>{
    setRepos(prev => prev.filter(repo => repo.id !== id))
    setMessage()
  }

  return (
    <Container>
      <img src={logo} width={"50px"} alt="Github Logo" />
      <Input value={currentRepo} onChange={(e => setCurrentRepo(e.target.value))}/>
      <InputMessage message={message}/>
      <Button onClick={handleSearch}value="Buscar"  />
      {repos.map(repo =><ItemRepo repository = {repo} handleRemoveRepo={handleRemoveRepo}/>)}
    </Container>
  );
}

export default App;
