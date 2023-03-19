import { Studio } from './Studio/Studio';
import { getServerSideProps } from './index.server';
import { SettingModal } from './SettingModal/SettingModal';
import { Seo } from './seo';
import { useUser } from '@/hooks/useUser';
import { LoadingScreen } from '@/components/LoadingScreen/LoadingScreen';
import type { PageProps } from './index.server';

export { getServerSideProps };

export default function Page({ room }: PageProps) {
  const { user } = useUser();

  if (user === undefined) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Seo eventTitle={room.name} />

      {/* TODO: 管理者であるかどうか */}
      {user === null ? <h1>参加者ページ todo: impl</h1> : <Studio room={room} />}

      <SettingModal room={room} />
    </>
  );
}
