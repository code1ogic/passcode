import NavBar from "./components/NavBar/NavBar";
import RegisterCard from "./components/Cards/RegisterCard";
import { Container } from "@mui/system";

const App = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="sm" style={{ marginTop: "10%" }}>
        <RegisterCard />
      </Container>
    </>
  );
};

export default App;
