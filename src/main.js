import './App.css';
import HornedBeast from './Horned';
import HornedBeastArray from './data.json';


// fucntion to put the content of the page
//shortend way to display images
function Main() {
    return (
        
      <div className = "d-flex justify-content-between flex-wrap">
        {/* <main>This is Horned Beasts</main> */}
 
        {HornedBeastArray.map((Beast, index) => (
            <HornedBeast
            key={index}
            title={Beast.title}
            description={Beast.description}
            image={Beast.image_url}
            timesClick={0}/>
        ))}
        

        {/* <HornedBeast title = {HornedBeastArray[0].title}  description = {HornedBeastArray[0].description} image = {HornedBeastArray[0].image_url} timesClick= {0} ></HornedBeast>
        <HornedBeast title = {HornedBeastArray[1].title}  description = {HornedBeastArray[1].description} image = {HornedBeastArray[1].image_url} timesClick= {0}></HornedBeast>
        <HornedBeast title = {HornedBeastArray[2].title}  description = {HornedBeastArray[2].description} image = {HornedBeastArray[2].image_url} timesClick= {0}></HornedBeast>
        <HornedBeast title = {HornedBeastArray[3].title}  description = {HornedBeastArray[3].description} image = {HornedBeastArray[3].image_url} timesClick= {0}></HornedBeast>
        <HornedBeast title = {HornedBeastArray[4].title}  description = {HornedBeastArray[4].description} image = {HornedBeastArray[4].image_url} timesClick= {0}></HornedBeast>
        <HornedBeast title = {HornedBeastArray[5].title}  description = {HornedBeastArray[5].description} image = {HornedBeastArray[5].image_url} timesClick= {0}></HornedBeast>
        <HornedBeast title = {HornedBeastArray[6].title}  description = {HornedBeastArray[6].description} image = {HornedBeastArray[6].image_url} timesClick= {0}></HornedBeast>
        <HornedBeast title = {HornedBeastArray[7].title}  description = {HornedBeastArray[7].description} image = {HornedBeastArray[7].image_url} timesClick= {0}></HornedBeast>
        <HornedBeast title = {HornedBeastArray[8].title}  description = {HornedBeastArray[8].description} image = {HornedBeastArray[8].image_url} timesClick= {0}></HornedBeast>
        <HornedBeast title = {HornedBeastArray[9].title}  description = {HornedBeastArray[9].description} image = {HornedBeastArray[9].image_url} timesClick= {0}></HornedBeast>
        <HornedBeast title = {HornedBeastArray[10].title}  description = {HornedBeastArray[10].description} image = {HornedBeastArray[10].image_url} timesClick= {0} ></HornedBeast>
        <HornedBeast title = {HornedBeastArray[11].title}  description = {HornedBeastArray[11].description} image = {HornedBeastArray[11].image_url} timesClick= {0} ></HornedBeast>
        <HornedBeast title = {HornedBeastArray[12].title}  description = {HornedBeastArray[12].description} image = {HornedBeastArray[12].image_url} timesClick= {0} ></HornedBeast>
        <HornedBeast title = {HornedBeastArray[13].title}  description = {HornedBeastArray[13].description} image = {HornedBeastArray[13].image_url} timesClick= {0} ></HornedBeast>     
        <HornedBeast title = {HornedBeastArray[14].title}  description = {HornedBeastArray[14].description} image = {HornedBeastArray[14].image_url} timesClick= {0} ></HornedBeast>
        <HornedBeast title = {HornedBeastArray[15].title}  description = {HornedBeastArray[15].description} image = {HornedBeastArray[15].image_url} timesClick= {0} ></HornedBeast>
        <HornedBeast title = {HornedBeastArray[16].title}  description = {HornedBeastArray[16].description} image = {HornedBeastArray[16].image_url} timesClick= {0} ></HornedBeast>
        <HornedBeast title = {HornedBeastArray[17].title}  description = {HornedBeastArray[17].description} image = {HornedBeastArray[17].image_url} timesClick= {0} ></HornedBeast>
        <HornedBeast title = {HornedBeastArray[18].title}  description = {HornedBeastArray[18].description} image = {HornedBeastArray[18].image_url} timesClick= {0} ></HornedBeast>
        <HornedBeast title = {HornedBeastArray[19].title}  description = {HornedBeastArray[19].description} image = {HornedBeastArray[19].image_url} timesClick= {0} ></HornedBeast> */}
      </div>
      
    );
  }

export default Main