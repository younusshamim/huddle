import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";
import content from "./content";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Header />
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
