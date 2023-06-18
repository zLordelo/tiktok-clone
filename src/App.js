import "./App.css";
import Video from "./pages/Video";


function App() {
  return (
    <div className="App">
      <div className="app-videos">
      <Video
        likes={1+".0M"}
        comments={14+".0K"}
        saves={22+".2K"}
        shares={15+".6K"}
        user={"@WhinderssonNunes"}
        description={"Onde eu pego meu Green Card de carioca?????🤪🤪🤪 Sou cria ou não tropa 🥺🥺🥺🥺"}
        musicName={"Dennis e Kevin O Chris - TÁ OK"}
        videoUrl={"/Download.mp4"}
      />

      <Video
        likes={10+".7K"}
        comments={102}
        saves={533}
        shares={74}
        user={"@biaorc"}
        description={"Rotina capilar no meu cabelo crespo ressecado e pós praia. Ah, meu cabelo secou naturalmente e olha esse volumão 😍"}
        musicName={"085 - Ao Vivo - MC Rogerinho"}
        videoUrl={"/Download (1).mp4"}
      />

      <Video
        likes={1772}
        comments={29}
        saves={316}
        shares={79}
        user={"@mariana.andradde"}
        description={"Minha finalização para cachos mais definidos, tu faz assim também? ➿"}
        musicName={"Seu Brilho Sumiu - Ao Vivo - Israel & Rodolffo & Mari Fernandez"}
        videoUrl={"/Download (2).mp4"}
      />
      </div>
    </div>
  );
}

export default App;
