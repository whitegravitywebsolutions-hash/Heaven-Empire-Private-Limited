import { GripaLogo } from '../components/ProductBags'
import { images } from '../data/site'

const leftTerms = [
  {
    num: 1,
    title: 'Product Usage',
    body: 'GRIPA Tile & Stone Adhesive must be used strictly in accordance with the instructions, specifications, warnings and recommended applications mentioned on the product packaging and applicable Technical Data Sheet (TDS).',
  },
  {
    num: 2,
    title: 'Application Responsibility',
    body: 'The purchaser, contractor and applicator are responsible for selecting the appropriate product grade, verifying site suitability, preparing the substrate and ensuring correct mixing, application, curing and maintenance in accordance with the prescribed instructions.',
  },
  {
    num: 3,
    title: 'Storage and Shelf Life',
    body: 'The product must be stored in its original packaging under the recommended conditions and used within the stated shelf life. The Company shall not be responsible for deterioration resulting from improper storage, contamination, damaged packaging or use after expiry, to the extent permitted by applicable law.',
  },
  {
    num: 4,
    title: 'Limitation of Responsibility',
    body: 'The Company shall not be responsible for bonding failure, tile or stone detachment, cracking, installation defects or associated expenses to the extent caused by improper workmanship, unsuitable substrates, incorrect product selection, deviation from instructions, structural movement, moisture conditions or other factors beyond the Company’s reasonable control.',
  },
  {
    num: 5,
    title: 'Product Performance Disclaimer',
    body: 'Heaven Empire Private Limited does not guarantee or warrant any specific bonding strength, adhesion performance, durability, service life or installation outcome under all site conditions. Actual performance depends on several factors beyond the Company’s direct control, including surface preparation, substrate condition, tile or stone characteristics, mixing proportions, application technique, workmanship, environmental conditions, curing and maintenance. Users are advised to verify product suitability and conduct preliminary trials wherever necessary before large-scale application.',
  },
]

const rightTerms = [
  {
    num: 6,
    title: 'Complaints and Inspection',
    body: 'Any suspected manufacturing defect must be reported promptly with the purchase invoice, batch number, product details and supporting evidence. The affected product and relevant site conditions must be made available for reasonable inspection. Complaints shall be assessed on their merits and in accordance with applicable law.',
  },
  {
    num: 7,
    title: 'Unauthorised Representations',
    body: 'No dealer, distributor, contractor or representative is authorised to provide additional warranties, guarantees or performance assurances on behalf of the Company unless expressly authorised in writing.',
  },
  {
    num: 8,
    title: 'Limitation of Liability',
    body: 'To the maximum extent permitted by applicable law, the Company shall not be liable for indirect or consequential losses arising from improper use or installation. Any liability established against the Company shall be determined in accordance with applicable law and any valid written warranty. Nothing in these terms excludes any statutory right or liability that cannot lawfully be excluded or limited.',
  },
  {
    num: 9,
    title: 'Governing Law',
    body: 'These Terms & Conditions shall be governed by the laws of India. Disputes shall be subject to the jurisdiction of competent courts and forums, without restricting any mandatory statutory rights of consumers.',
  },
  {
    num: 10,
    title: 'Important Notice',
    body: 'Read all product instructions before use. Purchase or use of the product does not guarantee any particular installation result or bonding performance under every site condition.',
  },
]

export default function Terms() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero terms-hero" style={{ '--hero-image': `url(${images.marble})` }}>
        <span className="corner-tl" />
        <span className="corner-tr" />
        <span className="corner-bl" />
        <span className="corner-br" />
        <div className="wrap terms-hero-grid">
          <div className="terms-hero-copy">
            <h1 className="terms-hero-title">TERMS &amp; CONDITIONS AND DISCLAIMER</h1>
            <p className="terms-hero-sub1">HEAVEN EMPIRE PRIVATE LIMITED</p>
            <p className="terms-hero-sub2">GRIPA — TILE &amp; STONE ADHESIVE</p>
          </div>
          <div className="terms-hero-visual">
            <GripaLogo className="gripa-logo-terms" />
          </div>
        </div>
      </section>

      {/* 2. TERMS 2-COLUMN SECTION */}
      <section className="section terms-content-section">
        <div className="wrap terms-columns-grid">
          {/* LEFT COLUMN: 1 TO 5 */}
          <div className="terms-col">
            {leftTerms.map((item) => (
              <article className="term-card" key={item.num}>
                <div className="term-badge">{item.num}</div>
                <div className="term-text">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>

          {/* RIGHT COLUMN: 6 TO 10 */}
          <div className="terms-col">
            {rightTerms.map((item) => (
              <article className="term-card" key={item.num}>
                <div className="term-badge">{item.num}</div>
                <div className="term-text">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
