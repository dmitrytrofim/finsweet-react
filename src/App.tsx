import TheWrapper from '@/layouts/TheWrapper';
import Header from '@/layouts/TheHeader';
import Footer from '@/layouts/TheFooter';

function App() {
 return (
  <>
   <TheWrapper>
    <Header />
    <main>
     <div className="text-[red]">test</div>
    </main>
    <Footer />
   </TheWrapper>
  </>
 );
}

export default App;
