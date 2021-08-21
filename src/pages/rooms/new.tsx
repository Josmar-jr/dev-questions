import { Flex } from '@chakra-ui/react';
import { Heading } from 'components/Base/Heading';
import { useAuth } from 'hooks/useAuth';
import { GetServerSideProps } from 'next';
import { supabase } from 'services/supabase';

export default function NewRoom() {
  const { user } = useAuth();
  console.log(user);
  return <div>oi</div>;
}
