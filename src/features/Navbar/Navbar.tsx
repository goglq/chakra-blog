import React from 'react';
import {
	Box,
	Container,
	Menu,
	MenuItem,
	Button,
	MenuButton,
	MenuList,
	Grid,
	GridItem,
	InputGroup,
	Input,
	InputRightElement
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import { useScroll, motion } from 'framer-motion';

const NAVBAR_SHOW_DELAY = 2000;

const Navbar: React.FC = () => {
	const [show, setShow] = React.useState<boolean>(true);

	const { scrollY } = useScroll();

	React.useEffect(() => {
		let timeout: number | undefined = undefined;
		return scrollY.onChange((latest) => {
			if (timeout) {
				clearTimeout(timeout);
			}
			setShow(scrollY.get() < scrollY.getPrevious());
			timeout = setTimeout(() => {
				setShow(true);
			}, NAVBAR_SHOW_DELAY);
		});
	}, [scrollY]);

	return (
		<Container
			position="fixed"
			top={show ? '1rem' : '-5rem'}
			width={['100%', '100%', '100%', '60%']}
			maxWidth="container.xl"
			zIndex={10}
			transition="200ms ease-in-out"
		>
			<Box
				as={motion.div}
				padding="0.5rem"
				border="1px solid rgba(255, 255, 255, 0.5)"
				borderRadius="0.5rem"
				bg="rgba(255, 255, 255, 0.3)"
				backdropFilter="blur(10px)"
				boxShadow="0 4px 20px rgba(0, 0, 0, 0.1), inset 0 0 10px rgba(255, 255, 255, 0.5)"
			>
				<Grid templateColumns="1fr 3fr 1fr" columnGap="1rem">
					<GridItem colStart={1}>
						<Menu>
							<MenuButton
								w="100%"
								as={Button}
								rightIcon={<ChevronDownIcon />}
								border="1px solid rgba(255, 255, 255, 0.5)"
								backgroundColor="rgba(255, 255, 255, 0.4)"
								backdropFilter="blur(10px)"
								boxShadow="0 5px 10px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.4)"
							>
								Category
							</MenuButton>
							<MenuList backgroundColor="rgba(255, 255, 255, 0.8)">
								<MenuItem>All</MenuItem>
								<MenuItem>Home</MenuItem>
								<MenuItem>Popular</MenuItem>
								<MenuItem>Games</MenuItem>
								<MenuItem>Programming</MenuItem>
							</MenuList>
						</Menu>
					</GridItem>
					<GridItem colStart={2}>
						<InputGroup
							size="md"
							border="1px solid rgba(255, 255, 255, 0.5)"
							borderRadius="0.5rem"
							boxShadow="0 5px 10px rgba(0, 0, 0, 0.1)"
						>
							<Input
								backgroundColor="rgba(255, 255, 255, 0.3)"
								backdropFilter="blur(5px)"
							/>
							<InputRightElement marginRight="4px">
								<Button
									size="sm"
									backgroundColor="rgba(255, 255, 255, 0.5)"
									border="1px solid rgba(255, 255, 255, 0.4)"
									boxShadow="0 5px 10px rgba(0, 0, 0, 0.1)"
								>
									<SearchIcon />
								</Button>
							</InputRightElement>
						</InputGroup>
					</GridItem>
					<GridItem colStart={3}>
						<Menu>
							<MenuButton
								w="100%"
								as={Button}
								rightIcon={<ChevronDownIcon />}
								border="1px solid rgba(255, 255, 255, 0.5)"
								backgroundColor="rgba(255, 255, 255, 0.4)"
								backdropFilter="blur(10px)"
								boxShadow="0 5px 10px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.4)"
							>
								Profile
							</MenuButton>
							<MenuList backgroundColor="rgba(255, 255, 255, 0.8)">
								<MenuItem>Position</MenuItem>
							</MenuList>
						</Menu>
					</GridItem>
				</Grid>
			</Box>
		</Container>
	);
};

export default Navbar;
