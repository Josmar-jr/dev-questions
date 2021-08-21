import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';

import { supabase } from 'services/supabase';

import { Flex } from '@chakra-ui/react';

import { Heading } from 'components/Base/Heading';

type RoomProps = {
  room: {
    created_at: string;
    id: string;
    title: string;
  };
};

export default function Room({ room }: RoomProps) {
  const router = useRouter();

  if (router.isFallback) return null;

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

  const paths = response.body.map(({ id }) => ({
    params: {
      id,
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

  if (response.body[0]) return { notFound: true };

  return {
    props: {
      room: response.body[0],
    },
  };
};
