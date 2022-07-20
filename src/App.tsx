import { Box, Center, Container } from '@chakra-ui/react';
import Navbar from './features/Navbar';
import PostComponent from './features/Post';

import { postsMock } from './objects/Post';

import './styles.css';

export default function App() {
	return (
		<>
			<Center>
				<Navbar />
				<Box marginTop="6rem" zIndex={0}>
					<Container width={['95%']} maxWidth="container.xl">
						{postsMock.map((post) => (
							<PostComponent
								key={post.id}
								post={post}
								boxProps={{ marginBottom: '2rem' }}
							/>
						))}
					</Container>
				</Box>
			</Center>
		</>
	);
}
