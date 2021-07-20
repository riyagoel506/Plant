// import background from './yellow.jpg';
import './App.css';
import Image from './Components/login.js'
import plant1 from './Components/plant1.jpg'
import plant2 from './Components/plant2.jpg'
import plant3 from './Components/plant3.jpg'
import plant4 from './Components/plant4.jpg'
import plant5 from './Components/plant5.jpg'
import plant6 from './Components/plant6.jpg'

function App() {
  return (
    <div className="container">

      <h1 className="text">SAVE SOME GREEN </h1>
      <h1 className="text">  AND GROW SOME, TOO</h1>
      <div  className="imageTag">
     <Image image={plant2} comment="“The clearest way into the Universe is through a forest wilderness.”"></Image>
     <Image image={plant1} comment="“Eat food. Not too much. Mostly plants.”"></Image>
     <Image image={plant3} comment="“Plants are more courageous than almost all human beings: an orange tree would rather die than produce lemons, whereas instead of dying the average person would rather be someone they are not.”"></Image>
     <Image image={plant4} comment="“We can begin the restructuring of thought by declaring legitimate what we have denied for so long. Lets us declare Nature to be legitimate. The notion of illegal plants is obnoxious and ridiculous in the first place.”"></Image>
     <Image image={plant5} comment="“We are made for loving. If we don’t love, we will be like plants without water”"></Image>
     <Image image={plant6} comment="“The planting of a tree, especially one of the long-living hardwood trees, is a gift which you can make to posterity at almost no cost and with almost no trouble, and if the tree takes root it will far outlive the visible effect of any of your other actions, good or evil.”"></Image>
     </div>
    </div>
  );
}

export default App;
