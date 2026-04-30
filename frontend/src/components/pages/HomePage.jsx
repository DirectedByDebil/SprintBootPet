import './page.css';
import SectionAbout from '../sections/SectionAbout';
import SectionReviews from '../sections/SectionReviews';
import SectionBlogs from '../sections/SectionBlogs';
import SectionCatalogue from '../sections/SectionCatalogue';

function HomePage () {
  return (
    <>
      <header>
        <span>
          Home Page
        </span>
      </header>

      <main>
        <SectionAbout />
        <SectionCatalogue />
        <SectionReviews />
        <SectionBlogs />
      </main>
    </>
  );
}

export default HomePage;