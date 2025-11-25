export const ImageCocktail = ({ image, name }: { image: string; name: string }) => {
  return (
    <div className="flex justify-center items-center w-full h-86 mt-10 rounded-lg border-2 border-white">
      <img
        src={image}
        alt={name}
        className="h-full object-cover rounded-lg shadow-2xl"
      />
    </div>
  );
}
