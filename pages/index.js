import Header from '../components/header';
import Main from '../components/main';
import FDescription from '../components/fdescription';
import SDescription from '../components/sdescription';
import Quote from '../components/quote';
import Card from '../components/card';
import Faq from '../components/faq';
import FreeTrial from '../components/freetrial';
import Footer from '../components/footer';
const index = () => {
  return (
    <div>
      <Header />
      <Main />
      <FDescription />
      <SDescription />
      <Quote />
      <Card />
      <Faq />
      <FreeTrial />
      <Footer />
    </div>
  );
};

export default index;
