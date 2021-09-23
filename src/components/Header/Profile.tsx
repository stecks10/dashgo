import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vitor Nunes</Text>
        <Text color="gray.300" fontSize="small">
          vnn2006@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Vitor Nunes"
        src="https://github.com/stecks10.png"
      />
    </Flex>
  );
}
