interface PageProps {
  params: {
    fileid: string;
  };
}

const Page = ({ params }: PageProps) => {
  // retrieve the file id
  const { fileid } = params;
  // make the database call
  return <div>{fileid}</div>;
};

export default Page;
