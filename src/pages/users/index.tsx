import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Td,
  Th,
  Checkbox,
  Tbody,
  Text,
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1400} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              w="28"
              height="8"
              as="a"
              size="sn"
              fontSize="sn"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="15" />}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vitor Nunes</Text>
                    <Text fontSize="sm" color="gray.300">
                      vnn2006@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>17 de Setembro 2021</Td>
                <Td>
                  <Button
                    w="28"
                    height="8"
                    as="a"
                    size="sn"
                    fontSize="sn"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vitor Nunes</Text>
                    <Text fontSize="sm" color="gray.300">
                      vnn2006@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>17 de Setembro 2021</Td>
                <Td>
                  <Button
                    w="28"
                    height="8"
                    as="a"
                    size="sn"
                    fontSize="sn"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Vitor Nunes</Text>
                    <Text fontSize="sm" color="gray.300">
                      vnn2006@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>17 de Setembro 2021</Td>
                <Td>
                  <Button
                    w="28"
                    height="8"
                    as="a"
                    size="sn"
                    fontSize="sn"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="15" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
