
import BlogSectionImage from '../homeAssets/blogSection2.jpg'

const BlogSection = () => {
  return (
    <>
    <h2 className="mt-12 md:text-6xl font-bold text-textcol sm:text-4xl text-center">From Our Blog</h2>
        <div className="relative bg-cover bg-center  h-[40rem] my-12" style={{ backgroundImage: `url(${BlogSectionImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="md:text-5xl font-bold text-lightgray sm:text-4xl">LUXE TROVE STYLE TIPS</h2>
            <p>Catch up on exciting styling tips from our blog periodical post.</p>
            <button className="mt-4 bg-btn hover:bg-btnHover text-black font-bold py-2 px-4 rounded">Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSection