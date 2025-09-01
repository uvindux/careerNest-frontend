import React from 'react';

const CVGenerator = () => {
	return (
		<div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f9f9f9' }}>
			<h1 style={{ margin: '2rem 0 1rem 0', fontSize: '2rem', fontWeight: 'bold', color: '#222' }}>CV Generator</h1>
			<div style={{ flex: 1, width: '100%', maxWidth: '1200px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: '12px', overflow: 'hidden', background: '#fff' }}>
				<iframe
					src="https://cv-generator1-tawny.vercel.app/"
					title="CV Generator"
					width="100%"
					height="100%"
					style={{ minHeight: '80vh', border: 'none' }}
					allowFullScreen
				/>
			</div>
		</div>
	);
};

export default CVGenerator;
