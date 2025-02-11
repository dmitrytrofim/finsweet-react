import Container from '@/containers/Container';
import post from '@/assets/img/post.png';

function Homepage() {
 return (
  <>
   <section className="bg-[url(@/assets/img/greet-bg.png)] bg-cover bg-center">
    <Container>
     <div className="flex flex-col items-start text-t-light p-[128px_0_192px]">
      <span className="text-16 font-500 uppercase mb-[24px]">
       Posted on <strong className="font-900">startup</strong>
      </span>
      <h1 className="max-w-[803px] text-56 font-700 tracking-[-0.04em] mb-[24px]">
       Step-by-step guide to choosing great font pairs
      </h1>
      <p className="mb-[16px]">
       By <cite className="not-italic text-t-yellow">James West</cite> |{' '}
       <time dateTime="2022-05-23">May 23, 2022</time>
      </p>
      <p className="max-w-[610px] mb-[48px]">
       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
       dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
       proident.
      </p>
      <a href="#" className="btn">
       Read More &gt;
      </a>
     </div>
    </Container>
   </section>
   <section className="">
    <Container>
     <div className="flex gap-[32px] p-[128px_0]">
      <div className="grow">
       <h2 className="text-36 font-700 tracking-[-0.06em] mb-[32px]">
        Featured Post
       </h2>
       <div className="border-[1px] border-[var(--color-b-medium-grey-01)] p-[32px]">
        <div className="flex flex-col items-start">
         <figure className="mb-[16px]">
          <img className="mb-[32px]" src={post} alt="" loading="lazy" />
          <figcaption className="text-14 font-500">
           By <cite className="text-t-purple not-italic">John Doe</cite> | May
           23, 2022
          </figcaption>
         </figure>
         <h3 className="text-28 font-700 leading-[1.43] mb-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
         </h3>
         <p className="text-t-medium-grey leading-[1.75] mb-[32px]">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
         </p>
         <a href="#" className="btn">
          Read More &gt;
         </a>
        </div>
       </div>
      </div>
      <div className="shrink-0 w-[520px] mb-[32px]">
       <div className="flex items-center justify-between">
        <h2 className="text-36 font-700 tracking-[-0.06em]">Featured Post</h2>
        <a href="#" className="text-t-purple">
         View All
        </a>
       </div>
      </div>
     </div>
    </Container>
   </section>
  </>
 );
}

export default Homepage;
