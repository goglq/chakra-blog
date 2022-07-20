import React from 'react';

import { Post } from '../../objects/Post';

import {
	Box,
	BoxProps,
	Button,
	Center,
	Divider,
	Flex,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	Icon
} from '@chakra-ui/react';
import { BiDotsVerticalRounded, BiLike, BiDislike } from 'react-icons/bi';

interface PostProps {
	post: Post;
	boxProps?: BoxProps;
}

const PostComponent: React.FC<PostProps> = ({ post, boxProps }) => {
	return (
		<Box
			maxWidth="900px"
			width="100%"
			border="1px solid rgba(255, 255, 255, 0.5)"
			borderRadius="0.5rem"
			padding="1.5rem"
			backgroundColor="rgba(255, 255, 255, 0.4)"
			backdropFilter="blur(20px)"
			boxShadow="0 5px 20px rgba(0, 0, 0, 0.1)"
			{...boxProps}
		>
			<Center width="100%">
				<Image
					src={post.img}
					border="1px solid rgba(255, 255, 255, 0.5)"
					borderRadius="0.5rem"
					boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
				/>
			</Center>
			<Box
				margin="1rem 0"
				border="1px solid rbga(255, 255, 255, 0.6)"
				borderRadius="0.5rem"
				padding="0.5rem 1rem"
				backgroundColor="rgba(255, 255, 255, 0.5)"
			>
				<Text fontSize="3xl" noOfLines={2}>
					{post.title}
				</Text>
				<Divider
					margin="5px 0"
					borderWidth="2px"
					borderColor="rgba(180, 180, 180, 0.1)"
				/>
				<Text noOfLines={4}>{post.content}</Text>
			</Box>
			<Flex justifyContent="space-between">
				<Box>
					<Button marginRight="0.5rem">
						<Icon as={BiLike} />
					</Button>
					<Button>
						<Icon as={BiDislike} />
					</Button>
				</Box>
				<Box>
					<Button marginRight="0.5rem">Open</Button>
					<Menu>
						<MenuButton as={Button}>
							<Icon as={BiDotsVerticalRounded} />
						</MenuButton>
						<MenuList>
							<MenuItem>Item</MenuItem>
						</MenuList>
					</Menu>
				</Box>
			</Flex>
		</Box>
	);
};

export default PostComponent;
