import { Flex } from '@chakra-ui/react';
import { Heading } from 'components/Base/Heading';
import { GetStaticPaths, GetStaticProps } from 'next';
import { supabase } from 'services/supabase';

type RoomProps = {
  room: {
    created_at: string;
    id: string;
    title: string;
  };
};

export default function Room({ room }: RoomProps) {
  console.log(room);
  return (
    <Flex>
      <Heading color="red">id da sala{room.id}</Heading>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await supabase
    .from('rooms')
    .select('*')
    .order('created_at', { ascending: true });

  const paths = response.body.map((room) => ({
    params: {
      id: room.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await supabase
    .from('rooms')
    .select('*')
    .eq('id', `${ctx.params.id}`);

  return {
    props: {
      room: response.body[0],
    },
  };
};
