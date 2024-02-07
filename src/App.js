import './App.css';
import MapComponent from './MapComponent.js';
import cocktail from './Images/cocktails.jpg';
import cocktail2 from './Images/cocktail2.jpg';
import serving from './Images/GIF.gif';
import gins from './Images/gins.JPG';
import ostras from './Images/ostras.JPG';
import tapas from './Images/tapas2.jpg';
import republica3 from './Images/república-3.png';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<div class='nav' id='nav'>
					<header class='navbar'>
						<ul>
							<li>
								<a href='https://www.dropbox.com/scl/fi/nxmnu1ulh92nvgj61xtu8/Neutral-Modern-Menu-20.pdf?rlkey=iw2dv7t60v2cyj23of1my5luv&dl=0' target='_blank'>
									Menu
								</a>
							</li>
						</ul>
					</header>
					<section>
						<div id='logo' data-aos='fade-up' data-aos-duration='1200'></div>
					</section>
				</div>
			</header>
			<hr class='divider' />

			<section>
				<div class='container' id='about'>
					<h1 data-aos='fade-up' data-aos-duration='1200'>
						Um cantinho <span class='destaque'>especial</span> num bairro residencial e <span class='destaque'>acolhedor</span>. Uma esplanada agradável que se adapta ao inverno e ao verão.
					</h1>
					<div id='gif' data-aos='fade-up' data-aos-duration='1300'>
						<img src={serving} alt='GIF' data-aos='fade-up' data-aos-duration='1300' />
					</div>
				</div>
			</section>

			<section>
				<div class='container' id='containertxt'>
					<h1 data-aos='fade-up' data-aos-duration='1300'>
						Prove as nossas Tapas!!
					</h1>
				</div>
				<div class='container2' id='container2'>
					<img src={tapas} alt='tapas' data-aos='fade-up' data-aos-duration='1300' />
					<h2>TAPAS</h2>
				</div>
			</section>

			<section>
				<div class='container' id='containertxt'>
					<h1 data-aos='fade-up' data-aos-duration='1300'>
						Cá esperamos por si!
					</h1>
				</div>
			</section>

			<section>
				<div class='container' id='container3'>
					<div id='cocktail' data-aos='fade-up' data-aos-duration='1300'>
						<img src={cocktail2} alt='cocktail' data-aos='fade-up' data-aos-duration='1300' />
					</div>
					<h1 data-aos='fade-up' data-aos-duration='1200'>
						Descubra o sabor que leva-te onde o <span class='destaque'>Gin</span> encontra a cerveja, e a diversão nunca tem fim.
					</h1>
				</div>
			</section>
			<section>
				<div class='container' id='h1destaque'>
					<h1 data-aos='fade-up' data-aos-duration='1300'>
						Destaques
					</h1>
				</div>
			</section>
			<section>
				<div class='containerimagens' id='imagens'>
					<img src={cocktail} alt='cocktails' data-aos='fade-up' data-aos-duration='1300' />
					<img src={ostras} alt='ostras' data-aos='fade-up' data-aos-duration='1300' />
					<img src={gins} alt='gins' data-aos='fade-up' data-aos-duration='1300' />
				</div>
			</section>
			<div class='footer' id='footer' data-aos='fade-up' data-aos-duration='1200'>
				<img src={republica3} alt='republica3' />

				<div class='contactos' id='contactos' data-aos='fade-up' data-aos-duration='1200'>
					<p>
						Instagram: @tapasrepublica
						<br /> Contacto: 217 930 508
						<br /> Email: wepinkpreguica@gmail.com
					</p>
				</div>
				<div id='map' data-aos='fade-up' data-aos-duration='1200'>
					<MapComponent />
				</div>
			</div>
			<script src='https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js'></script>
			<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css' />
			<script src='index.js'></script>
		</div>
	);
}

export default App;
