
import { FaClock } from "react-icons/fa6";
import BlogBanner from './blogAssets/BlogBanner.png'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Fashion Trends 2024',
      description: 'Discover the latest fashion trends of 2024...',
      author: 'Jane Doe',
      date: '2 days ago',
      avatar: new URL("./blogAssets/BlogAvater1.png", import.meta.url).href,
      image: new URL("./blogAssets/BlogPost1.png", import.meta.url).href,
    },
    {
        id: 2,
        title: 'Fashion Trends 2024',
        description: 'Discover the latest fashion trends of 2024...',
        author: 'Jane Doe',
        date: '2 days ago',
        avatar:  new URL("./blogAssets/BlogAvater2.png", import.meta.url).href,
        image: new URL("./blogAssets/BlogPost.png",import.meta.url).href,
      },
      {
        id: 3,
        title: 'Fashion Trends 2024',
        description: 'Discover the latest fashion trends of 2024...',
        author: 'Jane Doe',
        date: '2 days ago',
        avatar:  new URL("./blogAssets/BlogAvater1.png", import.meta.url).href,
        image: new URL("./blogAssets/BlogPost2.png",import.meta.url).href,
      },
      {
        id: 4,
        title: 'Fashion Trends 2024',
        description: 'Discover the latest fashion trends of 2024...',
        author: 'Jane Doe',
        date: '2 days ago',
        avatar:  new URL("./blogAssets/BlogAvater2.png", import.meta.url).href,
        image: new URL("./blogAssets/BlogPost3.png",import.meta.url).href,
      },
      {
        id: 5,
        title: 'Fashion Trends 2024',
        description: 'Discover the latest fashion trends of 2024...',
        author: 'Jane Doe',
        date: '2 days ago',
        avatar:  new URL("./blogAssets/BlogAvater1.png", import.meta.url).href,
        image: new URL("./blogAssets/BlogPost4.png",import.meta.url).href,
      },
      {
        id: 6,
        title: 'Fashion Trends 2024',
        description: 'Discover the latest fashion trends of 2024...',
        author: 'Jane Doe',
        date: '2 days ago',
        avatar:  new URL("./blogAssets/BlogAvater2.png", import.meta.url).href,
        image: new URL("./blogAssets/BlogPost5.png",import.meta.url).href,
      },
      {
        id: 7,
        title: 'Fashion Trends 2024',
        description: 'Discover the latest fashion trends of 2024...',
        author: 'Jane Doe',
        date: '2 days ago',
        avatar:  new URL("./blogAssets/BlogAvater1.png", import.meta.url).href,
        image: new URL("./blogAssets/BlogPost6.png",import.meta.url).href,
      },
      {
        id: 8,
        title: 'Fashion Trends 2024',
        description: 'Discover the latest fashion trends of 2024...',
        author: 'Jane Doe',
        date: '2 days ago',
        avatar:  new URL("./blogAssets/BlogAvater2.png", import.meta.url).href,
        image: new URL("./blogAssets/BlogPost7.png",import.meta.url).href,
      },
      {
        id: 9,
        title: 'Fashion Trends 2024',
        description: 'Discover the latest fashion trends of 2024...',
        author: 'Jane Doe',
        date: '2 days ago',
        avatar:  new URL("./blogAssets/BlogAvater1.png", import.meta.url).href,
        image: new URL("./blogAssets/BlogPost8.png",import.meta.url).href,
      },
    // Add more blog posts here
  ];

  return (
    <div>
      <Navbar/>
   
    <div className="bg-gray-100 mt-40">
      <h2 className="text-5xl font-bold my-20">Blog</h2>

      {/* Featured Section */}
      <section
        className="bg-cover bg-center h-96 text-white flex items-center"
        style={{ backgroundImage: `url(${BlogBanner})` }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold">Featured</h1>
          <h2 className="text-3xl mt-2">The Art of Mixing High and Low Fashion</h2>
          <p className="mt-4 max-w-md">
            Fashion is all about experimentation and self-expression, and one of the most exciting ways to showcase your personal style is by mixing high and low fashion.
          </p>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-12 mx-12">
      <h2 className="text-5xl font-bold my-20">Resent blog post</h2>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-textcol">{post.title}</h3>
                <p className="mt-2 text-gray-600">{post.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                    <img src={post.avatar} alt={post.author} className="w-8 h-8 rounded-full mr-2" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    < FaClock className="h-5 w-5 mr-1" />
                    {post.date}
                  </div>
                 
                </div>
                <button className="mt-4 py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogPage;
