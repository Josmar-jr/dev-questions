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

import { LinkNext } from 'components/Base/Link';
import { FormEvent, useState } from 'react';
import { supabase } from 'services/supabase';

export default function NewRoom() {
  const [newRoom, setNewRoom] = useState('');

  async function handleCreateNewRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') return;

    const { error } = await supabase.from('rooms').insert({
      title: newRoom,
    });

    if (error) {
      console.log(error);
      return;
    }

    setNewRoom('');
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
        <VStack spacing="8" m="auto" maxW="320px" w="full">
          <Image w="32" src="/images/logo.svg" alt="Logo Letmeask" />
          <Heading size="md" variant="h2" color="dark">
            Crie uma nova sala
          </Heading>
          <FormControl as="form" id="text" onSubmit={handleCreateNewRoom}>
            <Input
              type="text"
              height="50px"
              placeholder="Degite o código da sala"
              color="#29292E"
              onChange={({ target }) => setNewRoom(target.value)}
              value={newRoom}
            />
            <Button w="full" mt="4" type="submit">
              Criar sala
            </Button>
            <Text color="#737380" fontSize="0.875rem" textAlign="center" mt="4">
              Quer entrar em uma sala já existente?{' '}
              <LinkNext href="/">Clique aqui</LinkNext>
            </Text>
          </FormControl>
        </VStack>
      </Flex>
    </Flex>
  );
}
