import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';
import data from './data';


function App() {
  const cards= data.map(item=>{
    return(
      <Card 
        key={item.id}
        item={item}
        />
    )
  })
    

  return (
    <div>
      <NavBar />
      <section>
       {cards}
      </section>
    </div>
  );
}

export default App;
