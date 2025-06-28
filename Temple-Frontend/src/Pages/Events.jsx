import React from 'react'

import prabhupadastory1 from '../assets/imgs/Prabhupada-iskcon.jpg'
import prabhupadastory2 from '../assets/imgs/prabhupada story2.jpg'
import prabhupadastory3 from '../assets/imgs/prabhupada story3.jpg'
import prabhupadastory4 from '../assets/imgs/prabhupada story4.jpg'
import prabhupadastory5 from '../assets/imgs/prabhupada story5.jpg'

const Events = () => {
  return (
   <div>

  <div className="page-title-area bg-3">
    <div className="container">
      <div className="page-title-content">
        <h2>Success Stories</h2>
        <ul>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li className="active">Success Stories</li>
        </ul>
      </div>
    </div>
  </div>
  <section className="help-people-area">
        <div className="container-fluid">
          <div className="section-title">
            {/* <span>What The Causes</span> */}
            <h2 style={{ paddingBlock: '2rem' }}>Success Stories of Srila Prabhupada Disciples Care Program</h2>
          </div>
          <div className="row" >
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }} >
              {/* <div className="people-img-one jarallax" data-jarallax="{&quot;speed&quot;: 0.3}"  /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory1} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Establishment of ISKCON</h2>
                  <p> Perhaps the most remarkable success story of Srila Prabhupada is the establishment of ISKCON itself. In 1966, at the age of 70, he arrived in New York City with just a few dollars and a trunk of books. Despite facing numerous challenges and setbacks, he tirelessly spread the teachings of Bhagavad Gita and the practice of Krishna consciousness. His dedication and perseverance led to the rapid growth of ISKCON, which has now become a global spiritual movement with millions of followers worldwide.</p>
                </div>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Writing and Publishing</h2>
                  <p> Srila Prabhupada translated and wrote commentaries on numerous Vedic scriptures, including the Bhagavad Gita, Srimad Bhagavatam, and Caitanya Caritamrita. His translations and commentaries are widely regarded for their clarity and depth, and they continue to inspire millions of people around the world. He also established the Bhaktivedanta Book Trust (BBT) to publish and distribute his books, which have been translated into dozens of languages and distributed in millions of copies.</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }}>
              {/* <div className="people-img-two jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory2} />
              </div>
            </div>

          </div>


          <div className="row">
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }}>
              {/* <div className="people-img-one jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory3} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Temple Establishments</h2>
                  <p>Srila Prabhupada oversaw the establishment of numerous temples and ashrams around the world, where devotees could practice Krishna consciousness and engage in devotional activities. The most famous of these is the Krishna Balaram Mandir in Vrindavan, India, and the ISKCON temple in Mayapur, West Bengal, which is the headquarters of ISKCON</p>
                </div>

              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Food Distribution</h2>
                  <p>  Srila Prabhupada initiated the distribution of prasadam (sanctified food offered to Krishna) as a means of alleviating hunger and poverty. ISKCON's food distribution programs, such as the Hare Krishna Food for Life, have served millions of free meals to the needy around the world, regardless of race, religion, or nationality.</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }}>
              {/* <div className="people-img-two jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory4} />
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 " style={{ padding: '5rem' }}>
              {/* <div className="people-img-one jarallax" data-jarallax="{&quot;speed&quot;: 0.3}" /> */}
              <div className="people-img-one jarallax">
                <img src={prabhupadastory5} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 p-0">
              <div className="all-help-content">
                <div className="people-content">
                  <h2>Cultural Influence </h2>
                  <p> Srila Prabhupada's teachings and the Hare Krishna movement have had a significant cultural influence, especially in the West. The chanting of the Hare Krishna mantra, popularized by ISKCON, became a prominent feature of the counterculture movement of the 1960s and 1970s. Today, the Hare Krishna mantra continues to be sung and practiced by people of various backgrounds as a means of spiritual upliftment.</p>
                </div>

              </div>
            </div>


          </div>

        </div>
      </section>
</div>

  )
}

export default Events
