const PropertyPage = ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { name: string };
}) => {
  return (
    <h1>
      Property Page {params.id} {searchParams.name}
    </h1>
  );
};

export default PropertyPage;
