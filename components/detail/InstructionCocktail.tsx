export const InstructionCocktail = ({ instructions }: { instructions: string[] }) => {
  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-4 text-pink-400">제조법 (Instructions)</h2>
      <ol className="list-decimal pl-6 space-y-3">
        {instructions.map((step, index) => (
          <li key={index} className="text-slate-300">{step}</li>
        ))}
      </ol>
    </div>
  );
}
