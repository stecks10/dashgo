import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vitor Nunes</Text>
          <Text color="gray.300" fontSize="small">
            vnn2006@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Vitor Nunes"
        src="https://github.com/stecks10.png"
      />
    </Flex>
  );
}
