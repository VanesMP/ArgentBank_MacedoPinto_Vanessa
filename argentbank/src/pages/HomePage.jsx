import '../style/main.css'
import chat from '../img/icon-chat.png';
import money from '../img/icon-money.png';
import security from '../img/icon-security.png';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function HomePage() {

    return(
        <div className="">
    <Header />
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open Link savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Features icon={chat} title="You are our #1 priority" text="Need to talk to Link representative? You can get in touch through our
            24/7 chat or through Link phone call in less than 5 minutes." />
        <Features icon={money} title="More savings means higher rates" text="The more you save with us, the higher your interest rate will be !" />
        <Features icon={security} title="Security you can trust" text="We use top of the line encryption to make sure your data and money
            is always safe." />    
      </section>
    </main>
    <Footer />
        </div>
    )
}