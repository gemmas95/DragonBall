import React from 'react';
import './aboutComponent.css';

function AboutComponent() {
	return (
		<>
			<h1 className="titleAbout">Meet the development team</h1>
			<section className="mainContainerAbout">
				<div className="usAbout">
					<img
						className="profileImage"
						src="https://trello-attachments.s3.amazonaws.com/5f7c8a555ab68f5a168f4a4f/200x200/7bc66a69e9afb0618f654055c2a5e3b0/Profile_Jordi.jpg"
						alt="profile jordi"
					></img>
					<h3>Jordi Muñoz</h3>
					<p>Front-End y Back-End Developer</p>
					<div className="containerAbout">
						<a href="https://www.linkedin.com/in/jordi-munoz-mallofre-developer/">
							<img
								src="https://trello-attachments.s3.amazonaws.com/5edcc7367102c32f7a0d5304/5f7dbba23b74527ee1978ff6/7469ba2ec8c71dabdbc9c75142a69573/linkedin.svg"
								alt="linkedin logo"
							></img>
						</a>
						<a href="https://github.com/Jordimm11">
							<img
								src="https://trello-attachments.s3.amazonaws.com/5edcc7367102c32f7a0d5304/5f7dbba23b74527ee1978ff6/a6f8e79ea07b290807d9228397e1c4dc/github.svg"
								alt="github logo"
							></img>
						</a>
					</div>
				</div>
				<div className="usAbout">
					<img
						className="profileImage"
						src="https://trello-attachments.s3.amazonaws.com/5f7c8a555ab68f5a168f4a4f/200x200/9aa67309136b0e376aafaa6b3a18bd6b/Profile_Gabri.jpg"
						alt="profile gabriel"
					></img>
					<h3>Gabriel Penalva</h3>
					<p>Web Developer</p>
					<div className="containerAbout">
						<a href="https://www.linkedin.com/in/gabriel-penalva/">
							<img
								src="https://trello-attachments.s3.amazonaws.com/5edcc7367102c32f7a0d5304/5f7dbba23b74527ee1978ff6/7469ba2ec8c71dabdbc9c75142a69573/linkedin.svg"
								alt="linkedin logo"
							></img>
						</a>
						<a href="https://github.com/gaeremtro">
							<img
								src="https://trello-attachments.s3.amazonaws.com/5edcc7367102c32f7a0d5304/5f7dbba23b74527ee1978ff6/a6f8e79ea07b290807d9228397e1c4dc/github.svg"
								alt="github logo"
							></img>
						</a>
					</div>
				</div>
				<div className="usAbout">
					<img
						className="profileImage"
						src="https://trello-attachments.s3.amazonaws.com/5f7c8a555ab68f5a168f4a4f/200x200/16d5a61267568fcfdc6572e1c2e6926e/Profile_Gem.jpg"
						alt="profile gemma"
					></img>
					<h3>Gemma Sanz</h3>
					<p>FullStack Web Developer</p>
					<div className="containerAbout">
						<a href="https://www.linkedin.com/in/gemma-sanz-rabadan/">
							<img
								src="https://trello-attachments.s3.amazonaws.com/5edcc7367102c32f7a0d5304/5f7dbba23b74527ee1978ff6/7469ba2ec8c71dabdbc9c75142a69573/linkedin.svg"
								alt="linkedin logo"
							></img>
						</a>
						<a href="https://github.com/gemmas95">
							<img
								src="https://trello-attachments.s3.amazonaws.com/5edcc7367102c32f7a0d5304/5f7dbba23b74527ee1978ff6/a6f8e79ea07b290807d9228397e1c4dc/github.svg"
								alt="github logo"
							></img>
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default AboutComponent;
