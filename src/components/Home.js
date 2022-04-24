import Card from "./Card";
function Home() {
  return (
    <div id="home" className="home-background">
      <div className="center">
        <Card
          className="card mb-3"
          maxWidth="40rem"
          txtcolor="black"
          header="BadBank"
          title="Welcome to BadBank" 
          text="We Built This Bank For You. You're Not Just Another Customer."
          body={
            <img src="badbank2.png" className="img-fluid" alt="Logo" width="1000px"/>
          }
        />
      </div>
    </div>
  );
}

export default Home;
