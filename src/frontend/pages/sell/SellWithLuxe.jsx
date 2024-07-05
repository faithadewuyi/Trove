
import SellBanner from './sellAssets/SellBanner1.png'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'

const SellWithLuxe = () => {
  const sections = [
    {
      id: 1,
      title: 'WHAT WE CONSIGN',
      description: 'Women’s clothing and Accessories, Men’s clothing and Accessories, Handbags, Shoes, Watches, and Anything Vintage! Please view our list of brands to see what we consign. The list is not exhaustive and we are open to taking other brands.',
    },
    {
      id: 2,
      title: 'HOW TO CONSIGN',
      description: 'Contact us via Email, Call or Message Us, Instagram, Facebook, or Ship your items to our showroom Address Near you.',
    },
    {
      id: 3,
      title: 'LET US DO THE WORK',
      description: 'We evaluate, authenticate and inventorize all your items. You will need to approve your inventory before we proceed to photograph and market your items online.',
    },
    {
      id: 4,
      title: 'GET PAID',
      description: 'We pay you via EFT or store credit when your item sells and the ten-day return period, as per our policy, has lapsed.',
    },
    {
      id: 5,
      title: 'HOW DO WE PRICE',
      description: 'We base our prices on global market-related values and trends, taking into account the designer, item type, age, condition, and current market demand. Certain brands and styles retain a higher resale value and can thus command higher prices than others. We strive to pay you the highest possible price within a reasonable amount of time.',
    },
    {
      id: 6,
      title: 'TO GET STARTED',
      description: "Kindly click on 'registration form' below to begin the process and follow the prompts.",
    },
  ];

  return (
    <div>
      <Navbar/>
  
    <div className="bg-gray-100 mt-40">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center "
        style={{ backgroundImage: `url(${SellBanner})`}}
      >
        <h1 className="text-6xl font-extrabold bg-zinc-800  opacity-80 px-2">Consign With us</h1>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6 md:px-0">
        <div className="container mx-auto w-full md:w-4/5">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col md:flex-row mb-8">
              <div className="md:w-1/12 flex justify-center mb-4 md:mb-0">
                <h2 className="text-7xl font-bold">{section.id}</h2>
              </div>
              <div className="md:w-11/12">
                <h3 className="text-xl font-bold mt-8 mb-2">{section.title}</h3>
                <p className="text-gray-700">{section.description}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-8">
            <Link to="/SellReg" className="py-2 px-4 bg-btn text-black font-bold rounded-lg shadow-md hover:bg-btnHover  ">
              REGISTRATION FORM
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default SellWithLuxe;
