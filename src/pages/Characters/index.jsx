import {Container, Navbar, List, Loading, Pagination} from './style';
import { useEffect, useState } from 'react';
import md5 from 'md5';
import { CharacterCard } from '../../components/CharacterCard/index';
import { Footer } from '../../components/Footer/index';
import { MagnifyingGlass } from  'react-loader-spinner';


const publicKey = 'e0ae25b179b9a1b68538004b8bacc5fd';
const privateKey = 'fe8afd427bd15fa06673fc269a9c11918eaee63a';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

export const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [countPage, setCountPage] = useState(1);
    const [search, setSearch] = useState('');  
    const [loading, setLoading] = useState(false);  
    const limit = 36;

    const loadCharacters = async(url) => {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();        
        setCharacters(json.data.results);
        setLoading(false);      
        console.log(characters);
      }
    
      useEffect(() => {
        loadCharacters(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${countPage > 1 ? (countPage * limit) - limit : 0}`);
      }, []);
      
      useEffect(() => {
        setSearch('');
        loadCharacters(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${countPage > 1 ? (countPage * limit) - limit : 0}`);
      }, [countPage]);

      useEffect(() => {
        loadCharacters(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=${limit}&offset=${countPage > 1 ? countPage * limit - 40 : 0}${search&& '&nameStartsWith='}${search}`);
      }, [search]); 


      const scrollPage = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }

      const skipPage = () => {
        parseInt(countPage);
        setCountPage(countPage + 1);
        scrollPage();
      }
      const comeBackPage = () => {
        parseInt(countPage);
        if(countPage > 1){
          setCountPage(countPage - 1);
        }
        scrollPage();
      }


    return(
      <>
        
        <Container>
        <Navbar>
          <img src='https://seeklogo.com/images/M/Marvel_Comics-logo-D489AEB9C1-seeklogo.com.png'/>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}         
          />                    
        </Navbar>    
        {loading && 
          <Loading>
            <MagnifyingGlass
              visible={true}
              height="20%"
              width="20%"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor = '#c0efff'
              color = '#e15b64'
            />
          </Loading>
        } 
        {!loading &&
          <List>
          {characters.map(({id, thumbnail, name}) => {
            return(
              <CharacterCard 
                key={id} 
                image={`${thumbnail.path}.${thumbnail.extension}`} 
                name={name}
              />
            );
          })}          
        </List>
        }
        <Pagination>
          <button onClick={comeBackPage}> ⬅️ </button>
          <input 
            type='number'
            value={countPage ? countPage : setCountPage(1)}
            onChange={(e) => {setCountPage(parseInt(e.target.value))}}
            min={1}
            max={44}
            placeholder='1 - 44'
          />
          <button onClick={skipPage}> ➡️ </button>
          <p>máx 44</p>
        </Pagination>
        <Footer/>  
      </Container>
      </>
      
    );
}