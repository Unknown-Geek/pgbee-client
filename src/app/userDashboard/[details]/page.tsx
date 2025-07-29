// SERVER COMPONENT
import ClientPage from './clientPage';

interface PageProps {
  params: { details: string };
}

export default function Page({ params }: PageProps) {
  const id = Number(params.details);
  return <ClientPage id={id} />;
}
