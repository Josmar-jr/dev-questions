import Router from 'next/router';
import {
  Box,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Button } from 'components/Base/Button';
import { Heading } from 'components/Base/Heading';

import { useAuth } from 'hooks/useAuth';

export default function Home() {
  const { signInWithGithub, user } = useAuth();

  function handleCreateRoom() {
    if (!user) {
      signInWithGithub();
    }

    Router.push('/rooms/new');
  }

  return (
    <Flex h="100vh" w="full" align="stretch">
      <Flex
        as="aside"
        direction="column"
        justify="center"
        align="center"
        bgColor="blue.100"
        flex="7"
        p="8"
      >
        <Image
          src="/images/illustration.svg"
          alt="Ilustração simbolizando perguntas e respostas"
          maxW="320px"
        />
        <Heading my="8">Toda pergunta tem uma resposta</Heading>
        <Text as="strong" fontWeight="500">
          Crie salas de Q&amp;A ao-vivo
        </Text>
        <Text>Aprenda e compartilhe conhecimento com outras pessoas</Text>
      </Flex>
      <Flex as="main" w="full" flex="8" px="32">
        <VStack spacing="6" m="auto" maxW="320px" w="full">
          <Image w="32" src="/images/logo.svg" alt="Logo Letmeask" />
          <Button
            onClick={handleCreateRoom}
            bgColor="dark"
            w="full"
            _hover={{
              filter: 'brightness(0.9)',
              bgColor: 'dark',
            }}
            _focus={{
              filter: 'brightness(0.9)',
              bgColor: 'dark',
              boxShadow: '2px 4px 5px rgba(66, 153, 225, 0.6)',
            }}
            _active={{
              bgColor: 'dark',
            }}
          >
            <Image m="2" src="/images/google-icon.svg" alt="Logo do Google" />
            Crie sua sala com o google
          </Button>
          <Box textAlign="center" color="gray.200" fontSize=".875rem" mx="2">
            ou entre em uma sala
          </Box>
          <FormControl id="text">
            <Input
              type="text"
              height="50px"
              placeholder="Degite o código da sala"
              color="#29292E"
            />
            <Button w="full" mt="4" type="submit">
              Entrar na sala
            </Button>
          </FormControl>
        </VStack>
      </Flex>
    </Flex>
  );
}
