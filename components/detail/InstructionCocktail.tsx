export const InstructionCocktail = ({ instructions }: { instructions: string[] }) => {
  return (
    <div className="mt-16 flex flex-col items-center">
      <h2 className="text-2xl mb-4 text-pink-400">레시피 설명</h2>

      <div className="w-full max-w-1xl lg:max-w-4xl bg-slate-800 rounded-lg px-12 py-6 shadow-lg border border-pink-600">
        <ol className="space-y-3">
          {instructions.map((step, index) => (
            <li key={index} className="text-slate-300">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
