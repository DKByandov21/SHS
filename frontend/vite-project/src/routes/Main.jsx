import NavBar from '../components/NavBar';
import Footer from '../components/Footer'


function MainPage(){


  const containerStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };
  return (
      <div style={containerStyle}>
          <>
            <NavBar></NavBar>
                
            <Footer></Footer>
        </>
      </div>
      );
};
export default MainPage;